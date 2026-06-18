# 🔐 ZA Auth - Next.js Authentication System

A modern and secure authentication system built with **Next.js 16**, **Better Auth**, **MongoDB**, and **Tailwind CSS**.

## ✨ Features

* Email & Password Authentication
* Google OAuth Login
* Email Verification
* Password Reset System
* Protected Routes with Middleware
* Session Management
* Custom Loading Page
* Custom Error Page
* Custom 404 Not Found Page
* User Dashboard
* MongoDB Database Integration
* Responsive UI
* Secure Authentication Flow

## 🛠️ Tech Stack

* Next.js 16
* React 19
* Better Auth
* MongoDB
* Tailwind CSS
* Resend
* Lucide React

## 📸 Screenshots

Add screenshots of:

* Sign In Page
* Sign Up Page
* Dashboard
* Email Verification
* Password Reset

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/zuhairmansoori/nextjs-better-auth.git
cd nextjs-better-auth
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

RESEND_API_KEY=your_resend_api_key
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📦 Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```text
src/
├── app/
├── components/
├── actions/
├── lib/
├── hooks/
└── middleware.js
```

## 🔒 Authentication Flow

1. User Registration
2. Email Verification
3. User Login
4. Session Creation
5. Protected Dashboard Access
6. Password Reset
7. Secure Logout

## 🌐 Deployment

Deploy easily on:

* Vercel
* VPS
* Docker
* Railway

## 👨‍💻 Author

**Zuhair Akhtar**



---

⭐ If you found this project useful, please consider giving it a star.
