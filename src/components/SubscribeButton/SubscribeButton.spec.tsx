import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { SubscribeButton } from '.';

jest.mock('next-auth/client');

jest.mock('next/dist/client/router');

describe('Subscribe Now component', () => {
  it('renders correctly', () => {
    const userSessionMocked = mocked(useSession);

    userSessionMocked.mockReturnValueOnce([null, false]);

    render(
      <SubscribeButton />
    );
  
    expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
  });

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn);
    const userSessionMocked = mocked(useSession);

    userSessionMocked.mockReturnValueOnce([null, false]);

    render(
      <SubscribeButton />
    );

    const subscribeButton = screen.getByText('Subscribe Now');
  
    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it('redirects to posts when user has a subscription', () => {
    const useRouterMocked = mocked(useRouter);
    const userSessionsMocked = mocked(useSession);
    const pushMock = jest.fn();

    userSessionsMocked.mockReturnValueOnce([{
      user: {
        name: 'John Doe',
        email: 'john.doe@exemple.com',
      },
      activeSubscription: 'fake-active-subscription',
      expires: 'fake-expires'
    }, false])

    useRouterMocked.mockReturnValue({
      push: pushMock,
    } as any);
    
    render(
      <SubscribeButton />
    );

    const subscribeButton = screen.getByText('Subscribe Now');
  
    fireEvent.click(subscribeButton);

    expect(pushMock).toHaveBeenCalledWith('/posts');
  });
})

