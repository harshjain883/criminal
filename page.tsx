"use client"

import { useState } from "react"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const socialLinks = [
    {
      id: "telegram",
      href: "https://t.me/CRIMINAL_B0Y",
      label: "Telegram",
      icon: "📱",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: "instagram",
      href: "https://instagram.com/love",
      label: "Instagram",
      icon: "📷",
      gradient: "from-pink-400 via-purple-500 to-orange-500",
    },
    {
      id: "github",
      href: "https://github.com",
      label: "GitHub",
      icon: "💻",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      id: "email",
      href: "mailto:sahil@example.com",
      label: "Email",
      icon: "✉️",
      gradient: "from-green-400 to-green-600",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900"
      }`}
    >
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-pulse delay-1000 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-300"
          }`}
        ></div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 z-50 w-14 h-14 rounded-full backdrop-blur-lg border transition-all duration-300 hover:scale-110 ${
          isDarkMode ? "bg-white/10 border-white/20 hover:bg-white/20" : "bg-black/10 border-black/20 hover:bg-black/20"
        }`}
        aria-label="Toggle theme"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <span
            className={`absolute text-2xl transition-all duration-300 ${
              isDarkMode ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
            }`}
          >
            ☀️
          </span>
          <span
            className={`absolute text-2xl transition-all duration-300 ${
              isDarkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
            }`}
          >
            🌙
          </span>
        </div>
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div
          className={`max-w-4xl w-full rounded-3xl p-8 md:p-12 text-center backdrop-blur-lg border transition-all duration-500 ${
            isDarkMode ? "bg-white/10 border-white/20 shadow-2xl" : "bg-white/50 border-white/40 shadow-2xl"
          }`}
        >
          {/* Profile Picture */}
          <div className="mb-8 relative">
            <div
              className={`w-36 h-36 mx-auto rounded-full flex items-center justify-center text-4xl font-bold bg-gradient-to-br ${
                isDarkMode ? "from-blue-500 to-purple-600" : "from-blue-400 to-purple-500"
              } shadow-2xl`}
            >
              <span className="text-white">SV</span>
            </div>
            <div
              className={`absolute inset-0 rounded-full animate-ping opacity-20 bg-gradient-to-br ${
                isDarkMode ? "from-blue-500 to-purple-600" : "from-blue-400 to-purple-500"
              }`}
            ></div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ
          </h1>

          {/* Description */}
          <p className={`text-lg md:text-xl mb-10 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            Hi! I'm ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ — a creative tech lover building bots, websites, and Telegram tools.
          </p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div className={`p-6 rounded-2xl backdrop-blur-sm ${isDarkMode ? "bg-white/5" : "bg-white/30"}`}>
              <h2
                className={`text-2xl font-semibold mb-4 pb-2 border-b ${
                  isDarkMode ? "border-white/30 text-blue-300" : "border-gray-300 text-blue-600"
                }`}
              >
                About Me
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3 text-lg">›</span>
                  <span>
                    <strong>Country:</strong> India
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3 text-lg">›</span>
                  <span>
                    <strong>Age:</strong> 23
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3 text-lg">›</span>
                  <span>
                    <strong>Hobbies:</strong> Coding, Designing
                  </span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl backdrop-blur-sm ${isDarkMode ? "bg-white/5" : "bg-white/30"}`}>
              <h2
                className={`text-2xl font-semibold mb-4 pb-2 border-b ${
                  isDarkMode ? "border-white/30 text-purple-300" : "border-gray-300 text-purple-600"
                }`}
              >
                Skills
              </h2>
              <ul className="space-y-3">
                {[
                  "PHP & Python Bots",
                  "HTML, CSS, JS",
                  "Telegram Bot Development",
                  "Web UI/UX Design",
                  "Automation Systems",
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-cyan-400 mr-3 text-lg">›</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((social) => (
              <div key={social.id} className="relative">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-20 h-20 rounded-2xl bg-gradient-to-br ${social.gradient} 
                    flex items-center justify-center text-3xl transition-all duration-300 
                    hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-2xl
                    before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:opacity-0 before:transition-opacity before:duration-300
                    hover:before:opacity-100`}
                  onMouseEnter={() => setHoveredButton(social.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <span className="relative z-10 filter drop-shadow-lg">{social.icon}</span>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.gradient} 
                    opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50`}
                  ></div>
                </a>

                {/* Tooltip */}
                {hoveredButton === social.id && (
                  <div
                    className={`absolute -bottom-14 left-1/2 transform -translate-x-1/2 
                    px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
                      isDarkMode ? "bg-black/80 text-white" : "bg-white/90 text-black shadow-lg"
                    }`}
                  >
                    {social.label}
                    <div
                      className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
                        isDarkMode ? "bg-black/80" : "bg-white/90"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            ))}
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
