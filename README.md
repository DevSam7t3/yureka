> [!NOTE]
> Note: Only critical bugs are being addressed right now as we are planning a complete rewrite in the very near future!


<h1 align="center">
  yureka
</h1>
<p align="center">
<img src="https://img.shields.io/npm/v/yureka?style=flat-square" alt="npm_version">
</p>

<p align="center">yureka is a command-line tool for <strong>building full-stack Next.js apps faster</strong>. It supercharges your development workflow, allowing you to quickly integrate packages and scaffold resources for your application with best practices in mind.</p>

<br />


## Features

1. **Initialization and Configuration**: quickly add and set up essential packages to jump-start your Next.js project.
2. **Code Generation**: scaffold models, views, and controllers directly from the CLI.

<br />

## Quick Start

Install yureka CLI globally:

```bash
npm install -g yureka
```

<br />

If you don't already have a Nextjs app, run create-next-app with your preferred package manager.

Then run the following command within the directory of your project:

```bash
yureka init
```

Note: yureka is not compatible with the the pages directory.

# Commands

Run these commands within the directory of your Nextjs app:

### 1. `yureka add`

Initializes and configures the following packages for your Next.js project, categorized into:

### ORM

#### Drizzle-ORM

- Based on your chosen database type (PostgreSQL, MySQL, SQLite), yureka sets up the required files for [Drizzle-ORM](https://github.com/drizzle-team/drizzle-orm), [drizzle-zod](https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-zod/README.md) for validations and and [drizzle-kit](https://github.com/drizzle-team/drizzle-kit-mirror) to manage migrations.
- Scripts are auto-added to `package.json` for immediate use of drizzle-kit.

#### Prisma

- yureka sets up required files for [Prisma](https://github.com/prisma/prisma) with [zod-prisma](https://github.com/CarterGrimmeisen/zod-prisma) for validations.

---

### Authentication

#### Auth.js

- Generates files for [Auth.js](https://github.com/nextauthjs/next-auth) (Next-Auth), including the latest Drizzle adapter. (For PlanetScale, references are excluded as it doesn't support foreign keys).
- Generates a generic sign-in component for immediate use within your Next.js project.
- Wraps the root layout with the auth provider and generates utilities for auth checks and redirects in your Next.js routes.

#### Clerk

- Generates files for [Clerk](https://github.com/clerkinc/javascript) including all necessary config.
- Wraps the root layout with the auth provider and generates utilities for auth checks and redirects in your Next.js routes.

#### Lucia

- Generates files for [Lucia](https://github.com/lucia-auth/lucia) including all necessary config.
- Generates UI and API routes for sign-in and sign-up

#### Kinde

- Generates files for [Kinde](https://github.com/kinde-oss/kinde-auth-nextjs) including all necessary config.
- Generates sign in component and route handler

---

### Other

#### tRPC

- Generates files to configure [tRPC](https://github.com/trpc/trpc) with the app router.
- Provides client-side tRPC and scaffolds server-side configuration using the experimental server-invoker pattern.
- Wraps the root layout in the tRPC provider.

#### Shadcn-UI

- Installs and configures [Shadcn-UI](https://github.com/shadcn-ui/ui) including button and toast components.
- Inserts the toast-provider (`<Toaster />`) to the root layout for instant toast notifications in your Next.js app.

#### Stripe

- Installs and configures Stripe within your Next.js project so you can start accepting subscription payments.

#### Resend

- Installs and configures [Resend](https://resend.com/)

yureka also adds relevant keys to your `.env` which you'll need to provide values for.

<br />

## 2. `yureka generate`

Akin to `rails scaffold` but for Next.js:

![](https://github.com/nicoalbanese/gifs_for_demos/blob/main/gif_generate_script_1.gif?raw=true)

![](https://github.com/nicoalbanese/gifs_for_demos/blob/main/gif_generate_script_2.gif?raw=true)

yureka generates:

#### a) Model:

- Generates a drizzle schema with column types based on your SQL flavor and database provider.
- Uses drizzle-zod to generate Zod schemas for frontend and backend validation.
- Generates queries and mutations for CRUD operations, fully typed and optimized for consumption via a Next.js front-end.

#### b) Controller:

- Gives you an option to scaffold tRPC, Server Actions and/or API routes.
- Uses Zod schemas from models for request validation.
- Includes built-in error handling for API routes and auto-adding of tRPC routes to the root router.

#### c) Views:

- Scaffolds views using Shadcn-UI to enable immediate CRUD operations (including select fields for adding relations and datepickers for dates).
- Option to use either React Hook Form with tRPC or plain React (useOptimistic and useValidated Form hooks)

## Run in non-interactive mode

As of v0.0.23, you can run `yureka init` and `yureka add` entirely via the command line as follows:

```sh
yureka init -sf yes -pm bun --orm prisma -db pg -a next-auth -ap github discord -mp trpc stripe resend -cl shadcn-ui -ie yes
```

| Command | Short Flag | Long Option       | Description                                    | Argument          |
| ------- | ---------- | ----------------- | ---------------------------------------------- | ----------------- |
| init    | -          | -                 | initialise and configure yureka              | -                 |
| -       | -h         | --headless        | initialise without any ui                      | `yes` or `no`     |
| -       | -sf        | --src-folder      | use a src folder                               | `yes` or `no`     |
| -       | -pm        | --package-manager | package manager                                | `<pm>`            |
| -       | -cl        | --component-lib   | component library                              | `<component-lib>` |
| -       | -o         | --orm             | orm                                            | `<orm>`           |
| -       | -db        | --db              | database ("pg", "mysql", "sqlite")             | `<db>`            |
| -       | -dbp       | --db-provider     | database provider - important if using drizzle | `<dbp>`           |
| -       | -a         | --auth            | auth                                           | `<auth>`          |
| -       | -ap        | --auth-providers  | auth providers (if using next-auth)            | `<providers>`     |
| -       | -mp        | --misc-packages   | packages ("trpc", "shadcn-ui", "resend")       | `<packages>`      |
| -       | -ie        | --include-example | include example                                | `yes` or `no`     |

## Contributing

Keen on enhancing yureka? Contributions, bug reports, and feature requests are always welcome. Feel free to open an issue or submit a pull request.

To run locally:

```sh
pnpm i
pnpm run dev

npm install -g . (in a second terminal - this will then make yureka available across your machine using "yureka *command*")
```

## License

[MIT](LICENSE)
