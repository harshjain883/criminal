"use client"

import { useState, useEffect } from "react"
// Ensure all used icons are imported from lucide-react
import { Sun, Moon, Instagram, Github, Mail, Send } from "lucide-react" // Added Send icon

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  useEffect(() => {
    // Set initial theme based on system preference or default to dark
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDarkMode(prefersDark)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  const socialLinks = [
    {
      name: "Telegram",
      icon: Send, // Changed to Send icon for Telegram
      href: "https://t.me/CRIMINAL_B0Y",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50",
    },
    {
      name: "Instagram",
      icon: Instagram, // Already correct, keeping as Instagram
      href: "https://instagram.com/love",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:shadow-pink-500/50",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/harshjain883",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-700/50",
    },
    {
      name: "Mail",
      icon: Mail,
      href: "mailto:sahilvermajmk@gmail.com",
      color: "from-red-500 to-red-700",
      hoverColor: "hover:shadow-red-500/50",
    },
  ]

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 ${isDarkMode ? "dark" : "light"}`}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline // Added for better mobile compatibility
        className="fixed top-0 left-0 min-w-full min-h-full object-cover z-[-2]"
        onError={(e) => console.error("Video load error:", e)}
      >
        <source src="/0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-[-1] transition-opacity duration-500 ${isDarkMode ? "bg-black/60" : "bg-white/40"}`}
      ></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-20 animate-pulse"
            style={{
              width: `${50 + i * 20}px`,
              height: `${50 + i * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              filter: "blur(20px)",
            }}
          />
        ))}
      </div>

      {/* Theme Toggle Button */}
     
      <button
        onClick={toggleTheme}
        className={`fixed top-1/2 -translate-y-1/2 right-6 p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-500 ease-in-out z-50
    ${isDarkMode ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"}
    relative flex items-center justify-center`} // Added relative and flex for positioning
        aria-label="Toggle theme"
      >
        <Sun className="absolute w-6 h-6 transition-all duration-700 ease-in-out rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
        <Moon className="absolute w-6 h-6 transition-all duration-700 ease-in-out rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </button>

      {/* Main Content Container */}
      <div className="container relative z-10 flex flex-col items-center justify-start px-5 py-16 overflow-y-auto h-full max-w-4xl mx-auto">
        <div
          className={`card w-full rounded-3xl p-8 md:p-12 text-center shadow-2xl transition-all duration-500 ease-in-out
          ${isDarkMode ? "bg-white/5 border border-white/10 text-white" : "bg-black/5 border border-black/10 text-black"}`}
        >
          <img
            src="/profile.png" // Updated to use your profile.png
            alt="ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ"
            className={`profile-pic mx-auto mb-6 w-36 h-36 rounded-full object-cover border-4 transition-all duration-500 ease-in-out
              ${isDarkMode ? "border-white" : "border-black"}`}
          />
          <h1
            className={`text-5xl md:text-6xl font-extrabold mb-4 leading-tight transition-all duration-500 ease-in-out
            ${isDarkMode ? "bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text" : "text-black"}`}
          >
            ꜱᴧʜɪʟᴠᴇꝛᴍᴧ
          </h1>
          <p
            className={`text-lg md:text-xl mb-8 leading-relaxed transition-all duration-500 ease-in-out
            ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
          >
            Hi! I'm ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ — a creative tech lover building bots, websites, and Telegram tools.
          </p>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div
              className={`info-box text-left p-6 rounded-xl backdrop-blur-sm transition-all duration-500 ease-in-out
              ${isDarkMode ? "bg-white/5 border border-white/10 text-white" : "bg-black/5 border border-black/10 text-black"}`}
            >
              <h2
                className={`text-2xl font-bold mb-4 pb-2 border-b transition-all duration-500 ease-in-out
                ${isDarkMode ? "border-white/30" : "border-black/30"}`}
              >
                About Me
              </h2>
              <ul
                className={`list-none p-0 text-lg transition-all duration-500 ease-in-out
                ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
              >
                <li>
                  <span className="text-blue-400">›</span> <strong>Country:</strong> India
                </li>
                <li>
                  <span className="text-blue-400">›</span> <strong>Age:</strong> 23
                </li>
                <li>
                  <span className="text-blue-400">›</span> <strong>Hobbies:</strong> Coding, Designing
                </li>
              </ul>
            </div>

            <div
              className={`info-box text-left p-6 rounded-xl backdrop-blur-sm transition-all duration-500 ease-in-out
              ${isDarkMode ? "bg-white/5 border border-white/10 text-white" : "bg-black/5 border border-black/10 text-black"}`}
            >
              <h2
                className={`text-2xl font-bold mb-4 pb-2 border-b transition-all duration-500 ease-in-out
                ${isDarkMode ? "border-white/30" : "border-black/30"}`}
              >
                Skills
              </h2>
              <ul
                className={`list-none p-0 text-lg transition-all duration-500 ease-in-out
                ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
              >
                <li>
                  <span className="text-blue-400">›</span> PHP & Python Bots
                </li>
                <li>
                  <span className="text-blue-400">›</span> HTML, CSS, JS
                </li>
                <li>
                  <span className="text-blue-400">›</span> Telegram Bot Development
                </li>
                <li>
                  <span className="text-blue-400">›</span> Web UI/UX Design
                </li>
                <li>
                  <span className="text-blue-400">›</span> Automation Systems
                </li>
              </ul>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative w-20 h-20 flex items-center justify-center rounded-full overflow-hidden group transition-all duration-300 ease-in-out
                  ${isDarkMode ? "shadow-lg shadow-white/10" : "shadow-md shadow-black/10"}
                  ${hoveredButton === link.name ? `scale-110 rotate-3 ${link.hoverColor} shadow-2xl` : ""}`}
                onMouseEnter={() => setHoveredButton(link.name)}
                onMouseLeave={() => setHoveredButton(null)}
                aria-label={link.name}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${link.color} transition-all duration-300 ease-in-out group-hover:scale-125`}
                ></div>

                {/* Icon */}
                <link.icon className="relative z-10 w-10 h-10 text-white transition-all duration-300 ease-in-out group-hover:scale-110" />

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-[2.5] transition-all duration-500 ease-out"></div>

                {/* Tooltip */}
                <span
                  className={`absolute -bottom-8 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out
                  ${isDarkMode ? "bg-white/20 text-white" : "bg-black/20 text-black"}
                  ${hoveredButton === link.name ? "opacity-100 -translate-y-12" : "opacity-0 translate-y-0"}`}
                >
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer
          className={`mt-12 text-lg transition-colors duration-500 ease-in-out
          ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          © 2025 ꜱᴧʜɪʟ. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
