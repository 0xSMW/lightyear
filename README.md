# Lightyear

Lightyear helps you to write powerful integrations in a few lines of code. With built-in authentications and serverless infrastructure, we help you take the complexity out of API automation.

## System Requirements

* [Node](https://nodejs.org/en/) v14.20, v16.17, or greater (check with `node --version`)
* [Git](https://git-scm.com/)

## Getting Started

### Create your project

Create your project directory from our template.

```shell
npx @runlightyear/cli create https://github.com/correct-repo-url.git
```

### Install dependencies

Change to the directory and log in to the app using the command line.

```shell
npm install
```

### Authenticate

```shell
npx lightyear signup
```

or if you already have a Lightyear account

```shell
npx lightyear login
```

### Run the development server

```shell
npm run dev
```

### Access the dashboard

https://app.runlightyear.com

### Deploy to production

```shell
npm run deploy
```

## Documentation

https://docs.runlightyear.com

## Intercom Contacts API

The Intercom Contacts API is implemented in the `@runlightyear/intercom` package. You can use this API to fetch contact information from Intercom.

### Usage

```typescript
import { getContacts } from '@runlightyear/intercom/contacts';

// Fetch contacts
const contacts = await getContacts();
```

### Response

The `getContacts` function returns a Promise that resolves to an array of contacts. Each contact is an object that includes the following properties:

* `id`: The ID of the contact.
* `name`: The name of the contact.
* `email`: The email address of the contact.
* `phone`: The phone number of the contact.

Please note that the actual response may include additional properties as provided by the Intercom API.

