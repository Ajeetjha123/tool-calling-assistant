🚀 Tool Calling Assistant

An AI-powered tool calling assistant with real-time streaming responses, authentication, and specialized tools for weather, stock market data, and AI-powered conversations.

🔗 Live Demo:

✨ Features

🔐 OAuth Authentication - GitHub and Google login

💬 Real-time AI Chat - Streaming responses using OpenAI or Gemini

📝 Multiple Chat Sessions - Manage conversations separately

💾 Persistent Chat History - Stored securely in database

⏹️ Stop Streaming - Cancel AI responses anytime

🌤️ Weather Tool - Real-time weather data for any city

📈 Stock Price Tool - Live stock market prices

🤖 Multi LLM Support - Switch between OpenAI and Gemini

📱 Responsive Design - Mobile + Desktop supported

🎨 Modern UI - Built using Tailwind CSS

🚀 Setup Instructions
1️⃣ Clone the Repository
git clone https://[github.com/](https://github.com/Ajeetjha123/tool-calling-assistant)tool-calling-assistant.git
cd tool-calling-assistant
npm install
2️⃣ Environment Variables Setup

Create .env.local in root:

# Database (Neon PostgreSQL)

DATABASE_URL=postgresql://user:password@host/database

# NextAuth

NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000

# GitHub OAuth

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Google OAuth

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# AI Provider (Choose ONE)

LLM_PROVIDER=OPENAI
OPENAI_API_KEY=your-openai-key

# OR

# LLM_PROVIDER=GEMINI

# GOOGLE_GENERATIVE_AI_API_KEY=your-gemini-key

# External APIs

OPENWEATHER_API_KEY=your-openweather-key
ALPHAVANTAGE_API_KEY=your-alphavantage-key

🗄 Database Setup (Neon + Drizzle)
Create Neon Database

Go to 👉 https://neon.tech

Create project

Copy connection string

Add To .env
DATABASE_URL=postgresql://user:password@ep-xxx.aws.neon.tech/neondb?sslmode=require

Push Database Schema
npm run db:push

Optional Database GUI
npm run db:studio

▶️ Run Development Server
npm run dev

Open 👉
http://localhost:3000

🔑 Getting API Keys
GitHub OAuth

👉 https://github.com/settings/developers

Callback URL:

http://localhost:3000/api/auth/callback/github

Google OAuth

👉 https://console.cloud.google.com/

Redirect URI:

http://localhost:3000/api/auth/callback/google

AI Providers

OpenAI → https://platform.openai.com/api-keys

Gemini → https://makersuite.google.com/app/apikey

External APIs

OpenWeather → https://openweathermap.org/api

AlphaVantage → https://www.alphavantage.co/support/#api-key

🛠 Tech Stack

Frontend: Next.js, React, TypeScript, Tailwind CSS

Backend: Next.js API Routes, NextAuth.js

Database: Neon PostgreSQL

ORM: Drizzle ORM

AI: OpenAI / Google Gemini

SDK: Vercel AI SDK

External Tools: Weather API, Stock API

📝 Available Scripts
npm run dev # Development server
npm run build # Production build
npm run start # Start production server
npm run lint # Run ESLint
npm run db:push # Push schema
npm run db:generate # Generate migrations
npm run db:studio # Open DB GUI

🚀 Deploy on Vercel

1️⃣ Push project to GitHub
2️⃣ Import repo into Vercel
3️⃣ Add Environment Variables
4️⃣ Deploy

⚠ Production Change:

NEXTAUTH_URL=https://your-project.vercel.app

📄 License

MIT License — Free for personal and commercial use.

❤️ Built With

Next.js + AI + Modern Web Stack
