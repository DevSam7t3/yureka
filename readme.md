# Create Yureka

`create-yureka` is a CLI tool for generating project templates based on user inputs. It supports multiple frameworks, languages, ORMs, databases, and authentication providers.

## Features

- Supports popular frameworks: React, Next.js, Vanilla, Svelte, Vue, Angular
- Choose between TypeScript and JavaScript
- Select your preferred ORM: Mongoose, Drizzle, Prisma, TypeORM, Sequelize
- Choose your database: MongoDB, SQLite, Postgres, MySQL
- Supports various auth providers: Clerk, Firebase, Supabase, NextAuth

## Installation

You can use `create-yureka` via npx:

```bash
npx create-yureka
```

## Usage

Run the following command and answer the prompts to generate your project template:

```bash
npx create-yureka
```

### Prompts

1. **Name of the project**: Enter the name of your project.
2. **Framework**: Choose from React, Next.js, Vanilla, Svelte, Vue, Angular.
3. **Language**: Choose between TypeScript and JavaScript.
4. **ORM**: Select your preferred ORM from Mongoose, Drizzle, Prisma, TypeORM, Sequelize.
5. **Database**: Choose your database from MongoDB, SQLite, Postgres, MySQL.
6. **Auth Provider**: Select your authentication provider from Clerk, Firebase, Supabase, NextAuth.

After answering these questions, the CLI will generate a project template based on your choices in your local folder.

## Example

```bash
npx create-yureka
```

```plaintext
? Name of the project: my-awesome-project
? Framework: Next.js
? Language: TypeScript
? ORM: Prisma
? Database: Postgres
? Auth Provider: NextAuth
```

This will create a `my-awesome-project` folder with the appropriate files and structure based on your selections.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Repository

- [GitHub](https://github.com/DevSam7t3/yureka)
- [npm](https://www.npmjs.com/package/create-yureka)

## License

This project is licensed under the MIT License.
