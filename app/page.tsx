import Image from "next/image"
import Link from "next/link"
import Layout from "./components/Layout"
import AnimatedText from "./components/AnimatedText"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <AnimatedText>
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Welcome to Nebula</h1>
        </AnimatedText>
        <AnimatedText>
          <p className="text-xl text-white mb-8 text-center">Share your thoughts anonymously with the world</p>
        </AnimatedText>
        <Image
                 src="/images/B.jpg"

          alt="Anonymous messaging"
          width={300}
          height={300}
          className="mb-8 rounded-full shadow-lg"
        />
        <AnimatedText>
          <Link
            href="/post"
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition duration-300"
          >
            Write a Message
          </Link>
        </AnimatedText>
      </div>
    </Layout>
  )
}

