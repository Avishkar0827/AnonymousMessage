"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/anyy.gif"// Replace this with your actual GIF URL
          alt="Background Animation"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Content */}
      <AnimatePresence>
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            >
              <MessageSquare className="w-24 h-24 mx-auto mb-8 text-purple-500" />
            </motion.div>
            <h1 className="text-5xl font-bold text-white mb-6">Welcome to Nebula</h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Share your thoughts anonymously with the world. 
            </p>
            <Link href="/post" passHref>
              <motion.a
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Write a Message
              </motion.a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

