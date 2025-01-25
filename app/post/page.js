"use client"

import { useState } from "react"
import Layout from "../components/Layout"
import AnimatedText from "../components/AnimatedText"

export default function Post() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the message to your backend
    console.log("Message submitted:", message)
    setMessage("")
    alert("Message posted successfully!")
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <AnimatedText>
          <h1 className="text-4xl font-bold text-white mb-8">Post a Message</h1>
        </AnimatedText>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <AnimatedText>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-40 p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Type your anonymous message here..."
              required
            />
          </AnimatedText>
          <AnimatedText>
            <button
              type="submit"
              className="mt-4 w-full bg-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-purple-700 transition duration-300"
            >
              Post Anonymously
            </button>
          </AnimatedText>
        </form>
      </div>
    </Layout>
  )
}

