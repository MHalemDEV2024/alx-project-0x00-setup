# alx-project-0x00-setup

🚀 Initial setup for a modern web application using **Next.js**, **TypeScript**, **Tailwind CSS**, and **ESLint** — part of the **React Genesis** learning series.

---

## 📘 Project Description

This project is the foundational step in the **React Genesis** series. It introduces you to scaffolding a Next.js project with a professional setup that follows industry best practices. Inspired by real-world applications like Airbnb, this project sets the stage for building modular, scalable, and responsive web interfaces using the latest tools in frontend development.

---

## 🎯 Learning Objectives

By completing this project, you will:

- Understand how to scaffold a Next.js project using the CLI
- Set up TypeScript, Tailwind CSS, and ESLint
- Learn folder structure and organization best practices
- Prepare for building reusable components and interactive UIs
- Apply responsive design principles using Tailwind
- Ensure code quality and consistency with ESLint

---

## ⚙️ Technologies Used

- [Next.js v13+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Node.js (v16+)](https://nodejs.org/)

---

## 🛠️ Setup Instructions

### 1. Scaffold the Project

Open your terminal and run:

```bash
npx create-next-app@latest alx-project-0x00 --typescript
```
## 2. 🧩 Respond to Prompts

When running `npx create-next-app@latest`, respond to the following prompts:

| Prompt                            | Your Response |
|----------------------------------|---------------|
| Use ESLint?                      | ✅ Yes        |
| Use Tailwind CSS?                | ✅ Yes        |
| Use `@/` as import alias?        | ✅ Yes        |
| Use the `/src` directory?        | ❌ No         |
| Use the App Router?              | ❌ No         |

---

## 3. 🚀 Navigate and Run

Use the following commands to start your development server:

<pre><code>cd alx-project-0x00
npm run dev -- -p 3000
</code></pre>

Your application should now be running at:

👉 [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

<pre><code>alx-project-0x00/
├── components/        # Reusable UI components (to be created)
├── interfaces/        # TypeScript interfaces (to be added)
├── pages/             # Next.js pages (default folder)
├── public/            # Static assets like images
├── styles/            # Global styles and Tailwind config
├── .eslintrc.json     # Linter configuration
├── tailwind.config.js # Tailwind setup
└── README.md          # Project instructions and info
</code></pre>
