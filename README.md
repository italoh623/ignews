<h1 align="center">

<img src="https://raw.githubusercontent.com/italoh623/ignews/main/public/images/avatar.svg" alt="ig.news" width="100px"/>ig.news

</h1>

ig.news is a blog about ReactJs developed in the Ignite Bootcamp by RocketSeat.


# Getting Started 

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

The project must be built with npm, so download it below if you don't have any installed on your system.

* **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

* **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general. [Download Yarn](https://yarnpkg.com/en/docs/install)


To run this server you will need a node version 12.0.0 (minimum) 

## Stripe

This project uses Stripe api as Payment sistem so you'll neeed to create a [Stripe account](https://stripe.com/br) with a Product registred.

### Stripe CLI

Stripe CLI is a tools to recive stripe webhooks in 
development environment. To install follow the [documentation](https://stripe.com/docs/stripe-cli).


After you must run the following command in terminal to start to listen the webhooks:

```
$ stripe listen --forward-to localhost:3000/api/webhooks
```

Finally you must add this lines to `.env.local` file:

```js
STRIPE_API_KEY= // Api key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY= // Public key
STRIPE_WEBHOOK_SECRET= // Webhook signing secret
STRIPE_SUCCESS_URL=http://localhost:3000/posts
STRIPE_CANCEL_URL=http://localhost:3000/
```

## Prismic

[Prismic](https://prismic.io) is a Content Management System, a tool for editing online content.

You must create a account and a new Type `Post` whith this format:

![](https://raw.githubusercontent.com/italoh623/ignews/main/screenshots/prismic.png)

You need to create a private key for your prismic repository. Go to `Settings >  API & Security > Repository ecurity` and select 'Private API'.

Finally you must add this line to `.env.local` file:

```js
PRISMIC_API_ENDPOINT= // Api endpoint
PRISMIC_ACCESS_TOKEN= // Api secret token
```


# How to Install

* To download the project follow the instructions bellow:


1. `git clone https://github.com/italoh623/ignews.git`

2. `cd ignews`

* Install the dependencies and start the server:

3. `yarn install`

4. `yarn start` 🥳

# Screenshots 

* Home Page

![](https://raw.githubusercontent.com/italoh623/ignews/main/screenshots/home.png)

* Posts Page

![](https://raw.githubusercontent.com/italoh623/ignews/main/screenshots/posts.png)

* Post Preview Page

![](https://raw.githubusercontent.com/italoh623/ignews/main/screenshots/preview.png)

***The application still is in development 🚧. Soon this file will be updated with the deploy of the app and new features***

---
### Author



<img style="border-radius: 50%;" src="https://github.com/italoh623.png" width="80px;" alt="" />


<sub><b>Ítalo Henrique Leça da Silva</b></sub>

[![Linkedin Badge](https://img.shields.io/badge/-@italo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gitirana/)](https://www.linkedin.com/in/italo-leca/) [![Gmail Badge](https://img.shields.io/badge/-italohenrique014@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:italohenrique014@gmail.com)](mailto:italohenrique014@gmail.com)
