# Node.js Express TypeScript Template

This repository contains a basic template for **Node.js** projects using **Express** and **TypeScript**.
It provides a structure for quickly starting backend development projects with the ability to extend and configure it to suit your needs.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Get start](#get-start)
- [Testing](#testing)
- [License](#license)

## Introduction

This project creation of the rapid deployment of projects on Node.js with Typescript, and with all necessary, in my opinion, addictions for the base application

While I am aware that frameworks like NestJS already provide robust solutions for building applications with TypeScript, I created this template to address a specific need. Many coding challenges and test tasks ask for solutions based on plain Node.js, so I wanted a minimal yet powerful template that leverages all the benefits of TypeScript, along with essential tools like ESLint, Prettier, and more.

This template provides a clean, straightforward setup for building Node.js applications with TypeScript, while including tools that help maintain high code quality, consistency, and ease of development. It's perfect for anyone who wants to get started quickly while keeping the flexibility and power of TypeScript without the overhead of a full-fledged framework.

## Features

- **Node.js** (v20)
- **Express.js** for web server creation
- **TypeScript** for better typing support and development
- **ESLint** and **Prettier** for maintaining clean code
- **Jest** for unit tests
- **Swagger** for automatic API documentation
- Development support with `nodemon` for auto-reloading the server
- Docker setup for deployment preparation

## Get start

To get started with this template, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/Rostyslav-Stetsyk/node-js-express-template.git
cd node-js-express-template
```

### Install Dependencies

Run the following command to install all the required dependencies:

```bash
npm install
```

### Start the Development Server

Run the following command to start the development server:

```bash
npm run start:dev
```

This will start the server using `nodemon`, and TypeScript will compile the code in watch mode with `tsc -w`.

### Start in Production Mode

To build the project and start the server in production mode, use the following commands:

```bash
npm run build
npm run start
```

#### Run with Docker

This project also supports running with Docker compose.

```bash
docker compose up --build -d
```

## Testing

Tests are run using Jest. To run the tests, use the following command:

```bash
npm run test
```

or run them in watch mode:

```bash
npm run test:watch
```

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Conclusion

I'm always open to new ideas and improvements! If you have suggestions, bug reports, or any contributions that can help enhance this project, feel free to open an issue or submit a pull request. Your feedback and contributions are greatly appreciated.

Let's collaborate and make this repository better together!

p.s. This is my first experience developing such templates, and I'm excited to continue improving it. If you have any suggestions or improvements, feel free to contribute!
