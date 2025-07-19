# 🚀 alx-project-0x00-setup

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint"/>
</p>

Initial setup for a modern web application using Next.js, TypeScript, Tailwind CSS, and ESLint — part of the **React Genesis** learning series.

---

## 📘 Project Description

This project is the foundational step in the React Genesis series. It introduces you to scaffolding a Next.js project with a professional setup that follows industry best practices. Inspired by real-world applications like Airbnb, this project sets the stage for building modular, scalable, and responsive web interfaces using the latest tools in frontend development.

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

## 🛠️ Setup Instructions

### 1. Scaffold the Project

```bash
npx create-next-app@latest alx-project-0x00 --typescript
```

### 2. 🧩 Respond to Prompts

| Prompt                         | Your Response |
|-------------------------------|----------------|
| Use ESLint?                   | ✅ Yes         |
| Use Tailwind CSS?            | ✅ Yes         |
| Use @/ as import alias?      | ✅ Yes         |
| Use the /src directory?      | ❌ No          |
| Use the App Router?          | ❌ No          |

### 3. 🚀 Navigate and Run

```bash
cd alx-project-0x00
npm run dev -- -p 3000
```

Your application should now be running at:

👉 [http://localhost:3000](http://localhost:3000)

---


## 📦 Technologies Used

| Tech           | Purpose                            |
|----------------|------------------------------------|
| **Next.js**    | React framework for server-side rendering and routing  
| **TypeScript** | Typed superset of JavaScript  
| **Tailwind CSS** | Utility-first CSS framework  
| **ESLint**     | Code linting and style enforcement  
| **Node.js**    | Environment and package manager  

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/alx-project-0x00.git
cd alx-project-0x00
```

## 📦 2. Install Dependencies

```bash
npm install
```

## 🏁 3. Run the Development Server

```bash
npm run dev
```

Then open your browser at: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
alx-project-0x00/
├── components/        # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Pill.tsx
│
├── pages/             # Application pages
│   ├── index.tsx
│   └── landing.tsx
│
├── public/            # Static assets
├── styles/            # Global styles (Tailwind CSS)
│   └── globals.css
│
├── .eslintrc.json     # Linter configuration
├── tailwind.config.js # Tailwind setup
├── tsconfig.json      # TypeScript configuration
└── README.md
```

---

## 🧩 Components Overview

### 📦 `Card`

A reusable card UI with title and description:

```tsx
<Card title="Card Title" description="This is a card description." />
```

---

### 🔘 `Button`

Multiple button styles for different UI needs:

```tsx
<Button title="Small Rounded" />
<Button title="Rounded Full" />
```

---


## 📸 Screenshots

![Landing Page Screenshot](./Screenshot.png)