export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-center border border-white/20">
          {/* Profile */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold">
              SV
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            Hi! I'm ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ — a creative tech lover building bots, websites, and Telegram tools.
          </p>

          {/* Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-10 text-left">
            <div className="bg-white/5 p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">About Me</h2>
              <ul className="space-y-2">
                <li>
                  <span className="text-cyan-400">›</span> <strong>Country:</strong> India
                </li>
                <li>
                  <span className="text-cyan-400">›</span> <strong>Age:</strong> 23
                </li>
                <li>
                  <span className="text-cyan-400">›</span> <strong>Hobbies:</strong> Coding, Designing
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Skills</h2>
              <ul className="space-y-2">
                <li>
                  <span className="text-cyan-400">›</span> PHP & Python Bots
                </li>
                <li>
                  <span className="text-cyan-400">›</span> HTML, CSS, JS
                </li>
                <li>
                  <span className="text-cyan-400">›</span> Telegram Bot Development
                </li>
                <li>
                  <span className="text-cyan-400">›</span> Web UI/UX Design
                </li>
                <li>
                  <span className="text-cyan-400">›</span> Automation Systems
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://t.me/CRIMINAL_B0Y"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300"
            >
              📱
            </a>
            <a
              href="https://instagram.com/love"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300"
            >
              📷
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300"
            >
              💻
            </a>
            <a
              href="mailto:sahil@example.com"
              className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300"
            >
              ✉️
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-sm text-gray-400">© 2025 ꜱᴧʜɪʟ. All rights reserved.</footer>
      </div>
    </div>
  )
}
