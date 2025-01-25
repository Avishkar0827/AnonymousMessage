"use client"

import { useState } from "react"
import Layout from "../components/Layout"
import AnimatedText from "../components/AnimatedText"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login process
    console.log("Login attempted with:", { email, password })
    alert("Login functionality not implemented in this demo")
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <AnimatedText>
          <h1 className="text-4xl font-bold text-white mb-8">Login</h1>
        </AnimatedText>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <AnimatedText>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Email"
              required
            />
          </AnimatedText>
          <AnimatedText>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Password"
              required
            />
          </AnimatedText>
          <AnimatedText>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-purple-700 transition duration-300"
            >
              Login
            </button>
          </AnimatedText>
        </form>
      </div>
    </Layout>
  )
}

