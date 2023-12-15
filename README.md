# Next14-spotify

Made with Next.js, Tailwind, Stripe, ReduxUI, SupaBase, ZustLand.

# Disclaimer

Note this may look like a copy it is not a copy of the real application [Spotify](https://spotify.com/) It has it's own database and api's and it's own code.

# Installation

NodeJS: >=18
Optional: Any Package Manger like

In this instance, I'm going to use [Bun](https://bun.sh) but you can use any package manager to install.

```bash
bun install
```

This will install all of the required dependencies and packages.

# Running in development

To run the project in development mode run:

```bash
bun dev
```

or

```bash
bun run dev
```

# Deploying to production

First of most, you must include the licence in this project and the Copyright: `Copyright © 2023 Eveeifyeve` To the top of each file.

## Automation Way!

Using GitHub actions it will automatically and test for you. All you will have to do is put the code in to deploy it.|

As of this, we are using GitHub pages to deploy this application but you can use something like AWS or your own server.

## Manual way

For the manual way to build the project run:

```bash
bun run build
```

This will create a file at `./dist` which is your compiled code.

Then do:

```bash
bun start
```

or

```bash
bun run start
```

To run your application 🎉 Now you have a spotify clone running on your machine!

# Licence

This project is licensed under the [GNU AFFERO LICENSE](./LICENSE)

# Love more projects?

If you like my projects give me a check out of my [website](eveeifyeve.pages.dev)
