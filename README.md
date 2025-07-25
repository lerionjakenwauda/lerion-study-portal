# Lerion Study Portal

## Project info



## How can I edit this code?

There are several ways of editing your application.

You can work locally with your preferred IDE or edit files directly in GitHub.

**Use your preferred IDE**

Clone this repo and push changes when you're ready.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Deploy the project using your preferred hosting service.
## Running the PHP exam locally

Navigate to the `php_exam` folder and start PHP's built-in server:

```sh
php -S localhost:8000
```

Then open [http://localhost:8000/exam.php](http://localhost:8000/exam.php) in your browser. The timer automatically submits each section when time expires.




## PHP Exam Demo

A basic PHP-based exam interface is provided under `php_exam/`. It loads questions from JSON files and supports a 30 minute objective section and 40 minute theory section. Deploy the contents of this folder to any PHP-enabled host (e.g. cPanel) and open `exam.php` in a browser to begin.
