# 🍣 Sushi Store

This is a modern and responsive e-commerce web application for a sushi restaurant. Users can browse different categories of sushi, beverages, and packs, add items to their cart, and proceed through a multi-step checkout process.

## ✨ Features

- **Product Browsing:** View products categorized into Sushi, Temaki, Packs, and Beverages.
- **Shopping Cart:** Add and remove items, and view the cart summary in a sidebar.
- **Multi-Step Checkout:** A seamless checkout process that includes user information, address, and order confirmation.
- **Responsive Design:** A mobile-first design that looks great on all screen sizes.
- **Dark Mode:** Theme toggling for a comfortable viewing experience.

## 🚀 Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Linting:** [ESLint](https://eslint.org/)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 20 or later) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/YujiSeto/sushi-store.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd sushi-store
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs the linter to check for code quality issues.

## 📂 Folder Structure

Here's a high-level overview of the project's folder structure:

```
sushi-store/
├── public/                # Static assets (images, fonts)
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable UI components
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── products/
│   │   └── ui/            # Shadcn/UI components
│   ├── data/              # Static data and mock products
│   ├── lib/               # Utility functions
│   ├── services/          # API service definitions (if any)
│   ├── stores/            # Zustand state management stores
│   └── types/             # TypeScript type definitions
├── .gitignore
├── next.config.ts
├── package.json
└── tsconfig.json
```
