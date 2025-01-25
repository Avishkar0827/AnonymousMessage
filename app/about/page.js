import Image from "next/image"
import Layout from "../components/Layout"
import AnimatedText from "../components/AnimatedText"

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <AnimatedText>
          <h1 className="text-4xl font-bold text-white mb-8">About Nebula</h1>
        </AnimatedText>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 max-w-2xl">
          <AnimatedText>
            <p className="text-white text-lg mb-4">
              Nebula is a platform where you can share your thoughts, feelings, and experiences anonymously. We
              believe in the power of honest expression without the fear of judgment.
            </p>
          </AnimatedText>
          <AnimatedText>
            <p className="text-white text-lg mb-4">
              Our mission is to create a safe space for people to connect, share, and support each other through the
              power of words.
            </p>
          </AnimatedText>
          <Image
            src="/images/A.jpg"
            alt="About AnonyMsg"
            width={400}
            height={600}
            className="rounded-lg shadow-lg mb-4"
          />
          <AnimatedText>
            <p className="text-white text-lg">Join our community today and start sharing your story with the world!</p>
          </AnimatedText>
        </div>
      </div>
    </Layout>
  )
}

