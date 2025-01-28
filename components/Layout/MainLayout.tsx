// Example navbar implementation with animated logo
function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Animated Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="animate-pulse"
                />
                <span className="text-xl font-bold">Your Brand</span>
              </div>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <Link href="/features" className="hover:text-blue-600">Features</Link>
              <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 