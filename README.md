
# 🔐 Next.js Better Auth

A complete authentication system built with **Next.js**, **Better Auth**, and **MongoDB**.

## ✨ Features

* Email & Password Authentication
* Google OAuth Login
* Session Management
* Protected Routes
* Password Reset
* Email Verification
* MongoDB Database Integration
* Modern UI with Next.js

## 🛠️ Tech Stack

* Next.js
* Better Auth
* MongoDB
* React
* Tailwind CSS

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/zuhairakhter2002-dotcom/nextjs-better-auth.git
cd nextjs-better-auth
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```text
src/
├── app/
├── components/
├── lib/
├── actions/
└── middleware/
```

## 🔒 Authentication Flow

* User Sign Up
* Email Verification
* User Sign In
* Session Creation
* Protected Dashboard Access
* Password Reset Support

## 🌐 Deployment

This project can be deployed on:

* Vercel
* Netlify
* VPS Servers
* Docker Containers

## 👨‍💻 Author

**Zuhair Akhter**

GitHub: https://github.com/zuhairakhter2002-dotcom

---

⭐ If you found this project useful, consider giving it a star.








This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
