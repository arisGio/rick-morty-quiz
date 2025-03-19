# Rick & Morty Quiz - SPA

## Overview

**Rick & Morty Quiz** is a simple single-page application (SPA) built using **React** and **TypeScript**.

### Features:

- **State Management**: Used for centralized state management to track user updates.
- **Light/Dark Mode**: Implemented through CSS without the need of a state manager.

## Technologies Used

- [**React**](https://react.dev/): The library for web and native user interfaces.
- [**TypeScript**](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [**Redux Toolkit**](https://redux-toolkit.js.org/): The official, opinionated, batteries-included toolset for efficient Redux development.
- [**tailwindcss**](https://tailwindcss.com/): Rapidly build modern websites without ever leaving your markup. Going with versions older than 4 means you need to follow others configuration steps.
- [**shadcn/ui**](https://ui.shadcn.com/): A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code. Used together with TailwindCSS for faster UI development.
- [**Vite**](https://vite.dev/): Vite is a blazing fast frontend build tool powering the next generation of web applications.
- [**quicktype**](https://quicktype.io/): To generate the TypeScript schema. Convert JSON into gorgeous, typesafe code in any language.

## Design Decisions

1. **State Management**:

   - **Redux Toolkit** if set up properly then it can scale easily. Used an async thunk to fetch data and then only through reload or re-entering the url it makes additional API calls. If not needed then it does not. By creating extra slices we can easily add extra features hassle-free.

2. **Styling**:

   - **TailwindCSS** was selected for its flexibility and efficiency in writing utility-first CSS. No need to create additional CSS files. Great choice to implement light/dark mode through CSS without using any state manager in the implementation. Goes hand in hand with **shadcn/ui**.

3. **Commit History**:
   The commit history follows conventional commits, such as:
   - `feat`: For adding new features.
   - `chore`: For tasks like dependency management.
   - `fix`: For fixing bugs.

## Setup Instructions

### Installation:

1. Clone the repository and navigate into the project directory.
2. Execute `npm install` to install dependencies.
3. Execute `npm run dev` to start up the development server.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
