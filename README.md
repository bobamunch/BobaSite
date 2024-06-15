# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- [Netlify Functions Overview](https://docs.netlify.com/functions/overview)

## Netlify Setup

1. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```sh
pnpm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
pnpm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

Ensure all packages are installed by running:

```sh
pnpm install
```

Run

```sh
netlify dev
```

Open up [http://localhost:8888](http://localhost:8888), and you're ready to go!

### Serve your site locally

To serve your site locally in a production-like environment, run

```sh
netlify serve
```

Your site will be available at [http://localhost:8888](http://localhost:8888). Note that it will not auto-reload when you make changes.

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```

## Style Guide

### Layout

- Holy grail layout
- Sticky header
- Sticky footer

## Tech Stack

- pnpm
- TypeScript
- React (FullCalendar)
- Remix
- Netlify (Functions)
- Squarespace Domains
- Google Calendar API

### Colors

- Porsche (#e5a363) - used for links, icons, FAQ header hover effects
- Pampas (#f7f2ec) - for "white" text
- Dark Red (#9b1414) - for event card
- Dark Charcoal (#333333) - for header, footer

### Typography

- Text: [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto)
- Headers: [LibreCaslonText](https://fonts.google.com/specimen/Libre+Caslon+Text)
- Event Card: [Montserrat](https://fonts.google.com/specimen/Montserrat)

### Icons

- [RadixUI](https://www.radix-ui.com/icons)
