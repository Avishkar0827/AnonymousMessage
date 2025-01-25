import Link from "next/link"
import { MessageSquare, Home, Info, LogIn } from "lucide-react"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <nav className="bg-black bg-opacity-50 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-white">
                <MessageSquare className="h-8 w-8 mr-2" />
                <span className="font-bold text-xl">Nebula</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <NavLink href="/" icon={<Home className="h-5 w-5" />} text="Home" />
              <NavLink href="/about" icon={<Info className="h-5 w-5" />} text="About" />
              <NavLink href="/post" icon={<MessageSquare className="h-5 w-5" />} text="Post" />
              <NavLink href="/login" icon={<LogIn className="h-5 w-5" />} text="Login" />
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">{children}</main>
    </div>
  )
}

function NavLink({ href, icon, text }) {
  return (
    <Link
      href={href}
      className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium flex items-center"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  )
}

