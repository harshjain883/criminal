"use client"

import { useState } from "react"
import { MessageCircle, Instagram, Github, Mail, Sun, Moon } from "lucide-react"

export default function Portfolio() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const socialLinks = [
    {
      id: "telegram",
      href: "https://t.me/CRIMINAL_B0Y",
      icon: MessageCircle,
      label: "Telegram",
      color: "from-blue-400 to-blue-600",
      hoverColor: "from-blue-500 to-blue-700",
    },
    {
      id: "instagram",
      href: "https://instagram.com/love",
      icon: Instagram,
      label: "Instagram",
      color: "from-pink-400 via-purple-500 to-orange-500",
      hoverColor: "from-pink-500 via-purple-600 to-orange-600",
    },
    {
      id: "github",
      href: "https://github.com",
      icon: Github,
      label: "GitHub",
      color: isDarkMode ? "from-gray-600 to-gray-800" : "from-gray-700 to-gray-900",
      hoverColor: isDarkMode ? "from-gray-700 to-gray-900" : "from-gray-800 to-black",
    },
    {
      id: "email",
      href: "mailto:sahil@example.com",
      icon: Mail,
      label: "Email",
      color: "from-green-400 to-green-600",
      hoverColor: "from-green-500 to-green-700",
    },
  ]

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${isDarkMode ? "text-white" : "text-gray-900"}`}
    >
      {/* Background Video - Using a fallback background if video fails */}
      <div className="fixed top-0 left-0 w-full h-full -z-30 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            // Hide video if it fails to load
            e.currentTarget.style.display = "none"
          }}
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dynamic Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full -z-10 transition-all duration-500 ${isDarkMode ? "bg-black/60" : "bg-white/40"}`}
      />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 w-14 h-14 rounded-full backdrop-blur-lg border transition-all duration-300 hover:scale-110 ${
          isDarkMode ? "bg-white/10 border-white/20 hover:bg-white/20" : "bg-black/10 border-black/20 hover:bg-black/20"
        }`}
        aria-label="Toggle theme"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Sun
            size={20}
            className={`absolute transition-all duration-300 ${
              isDarkMode ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
            } ${isDarkMode ? "text-white" : "text-yellow-600"}`}
          />
          <Moon
            size={20}
            className={`absolute transition-all duration-300 ${
              isDarkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
            } ${isDarkMode ? "text-blue-300" : "text-gray-900"}`}
          />
        </div>
      </button>

      {/* Content */}
      <div className="flex flex-col items-center justify-start px-5 py-16 min-h-screen overflow-y-auto">
        <div
          className={`backdrop-blur-lg border rounded-3xl p-8 md:p-12 text-center max-w-4xl w-full transition-all duration-500 ${
            isDarkMode ? "bg-white/10 border-white/20" : "bg-white/30 border-white/40 shadow-2xl"
          }`}
        >
          {/* Profile Picture */}
          <div className="relative mb-6">
            <div
              className={`w-36 h-36 rounded-full mx-auto shadow-2xl transition-all duration-300 overflow-hidden ${
                isDarkMode ? "border-4 border-white" : "border-4 border-gray-800"
              }`}
            >
              <img
                src="/placeholder.svg?height=140&width=140"
                alt="ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a colored div if image fails
                  e.currentTarget.style.display = "none"
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    parent.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center text-white text-2xl font-bold">SV</div>'
                  }
                }}
              />
            </div>
            <div
              className={`absolute inset-0 rounded-full animate-pulse transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-tr from-blue-400/20 to-purple-600/20"
                  : "bg-gradient-to-tr from-blue-500/30 to-purple-700/30"
              }`}
            />
          </div>

          {/* Name and Description */}
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent transition-all duration-300 ${
              isDarkMode ? "bg-gradient-to-r from-white to-gray-300" : "bg-gradient-to-r from-gray-900 to-gray-700"
            }`}
          >
            ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ
          </h1>
          <p
            className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-300 ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Hi! I'm ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ — a creative tech lover building bots, websites, and Telegram tools.
          </p>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="text-left">
              <h2
                className={`text-2xl font-semibold mb-4 pb-2 transition-all duration-300 ${
                  isDarkMode ? "border-b border-white/30 text-white" : "border-b border-gray-700/30 text-gray-900"
                }`}
              >
                About Me
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span className={`transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    <strong>Country:</strong> India
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span className={`transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    <strong>Age:</strong> 23
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span className={`transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    <strong>Hobbies:</strong> Coding, Designing
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h2
                className={`text-2xl font-semibold mb-4 pb-2 transition-all duration-300 ${
                  isDarkMode ? "border-b border-white/30 text-white" : "border-b border-gray-700/30 text-gray-900"
                }`}
              >
                Skills
              </h2>
              <ul className="space-y-2">
                {[
                  "PHP & Python Bots",
                  "HTML, CSS, JS",
                  "Telegram Bot Development",
                  "Web UI/UX Design",
                  "Automation Systems",
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-cyan-400 mr-2">›</span>
                    <span
                      className={`transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced Social Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              const isHovered = hoveredButton === social.id

              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  onMouseEnter={() => setHoveredButton(social.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  {/* Button Background with Gradient */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${isHovered ? social.hoverColor : social.color} transform transition-all duration-300 ease-out ${
                      isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
                    } shadow-lg hover:shadow-2xl before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:opacity-0 before:transition-opacity before:duration-300 ${
                      isHovered ? "before:opacity-100" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        size={24}
                        className={`text-white transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
                      />
                    </div>

                    {/* Animated Border */}
                    <div
                      className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                        isHovered ? "border-white/60 animate-pulse" : "border-white/30"
                      }`}
                    />

                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 blur-xl transition-opacity duration-300 ${
                        isHovered ? "opacity-50" : ""
                      }`}
                    />
                  </div>

                  {/* Tooltip */}
                  <div
                    className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm transition-all duration-300 pointer-events-none ${
                      isDarkMode ? "bg-black/80 text-white" : "bg-white/90 text-gray-900 shadow-lg"
                    } ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    {social.label}
                    <div
                      className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
                        isDarkMode ? "bg-black/80" : "bg-white/90"
                      }`}
                    />
                  </div>

                  {/* Ripple Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-white/20 transition-all duration-500 pointer-events-none ${
                      isHovered ? "animate-ping" : ""
                    }`}
                  />
                </a>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <footer
          className={`mt-10 text-sm transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          © 2025 ꜱᴧʜɪʟ. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
