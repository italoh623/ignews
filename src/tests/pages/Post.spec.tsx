import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils'

import { getPrismicClient } from '../../services/prismic';

import Post, { getServerSideProps } from '../../pages/posts/[slug]';
import { getSession } from 'next-auth/client';

const post = {
  slug: 'my-new-post',
  title: 'My new Post',
  content: '<p>Post content</p>',
  updatedAt: '10 de Abril'
};

jest.mock('next-auth/client');
jest.mock('../../services/prismic');

describe('Post page', () => {
  it('renders correnctly', () => {
    render(<Post post={post} />);

    expect(screen.getByText('My new Post')).toBeInTheDocument();
    expect(screen.getByText('Post content')).toBeInTheDocument();
  });

  it('redirects user if no subscription is found', async () => {
    const getSessinsMocked = mocked(getSession);

    getSessinsMocked.mockResolvedValueOnce(null);

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post',
      }
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/posts/preview/my-new-post',
        }),
      })
    );
  });

  it('loads initial data', async () => {
    const getSessinsMocked = mocked(getSession);
    const getPrismicClientMocked = mocked(getPrismicClient);

    getSessinsMocked.mockResolvedValueOnce({
      activeSubscription: 'fake-active-subscription',
    } as any);

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            { type: 'heading', text: 'My new post' }
          ],
          content: [
            { type: 'paragraph', text: 'Post content' }
          ],
        },
        last_publication_date: '04-01-2021'
      })
    } as any);

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post',
      }
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new post',
            content: '<p>Post content</p>',
            updatedAt: '01 de abril de 2021'
          }
        }
      })
    );
  });
});
