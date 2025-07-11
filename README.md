def generate_readme_content():
    project_name = "ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ's Interactive Portfolio"
    author_name = "ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ"
    github_repo = "harshjain883/criminal" # User's GitHub repo

    # Dynamic features/highlights
    features = [
        "Dynamic Dark & Light Mode Theme Toggle 🌓",
        "Sleek Glassmorphism UI Design with Animated Backgrounds ✨",
        "Interactive Social Media Buttons with Hover Effects & Tooltips 🚀",
        "Clean, Responsive Layout for All Devices (Mobile-First) 📱",
        "Optimized for Seamless Vercel Deployment ⚡",
        "Uses System Fonts for Universal Compatibility & Performance ✍️",
    ]

    # ASCII Art Header
    ascii_art = f"""
███████╗███████╗██╗  ██╗██╗   ██╗███████╗██████╗
██╔════╝██╔════╝██║  ██║██║   ██║██╔════╝██╔══██╗
███████╗█████╗  ███████║██║   ██║█████╗  ██████╔╝
╚════██║██╔══╝  ██╔══██║██║   ██║██╔══╝  ██╔══██╗
███████║███████╗██║  ██║╚██████╔╝███████╗██║  ██║
╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
    """

    readme_content = f"""# {ascii_art}

<p align="center">
  Welcome to {project_name}!
  <br>
  A modern, interactive portfolio crafted with Next.js, React, and Tailwind CSS.
</p>

---

## 🌟 Project Highlights

-   **{features[0]}**: Switch between elegant dark and crisp light themes with a single click.
-   **{features[1]}**: Experience a visually stunning user interface with blurred glass-like elements and subtle background animations.
-   **{features[2]}**: Engage with beautifully designed social icons that react dynamically to your cursor.
-   **{features[3]}**: Your portfolio looks fantastic and performs flawlessly on any device, from desktops to smartphones.
-   **{features[4]}**: Built for production, ensuring smooth and reliable hosting on Vercel.
-   **{features[5]}**: Fast loading times and consistent typography across different operating systems.

---

## 🚀 Get Started

Ready to explore or set up your own version? Here’s how!

### Prerequisites

Make sure you have Node.js (v18 or higher) and npm (or Yarn) installed on your machine.

### Installation

1.  **Clone this amazing repository:**

    ```bash
    git clone https://github.com/{github_repo}.git
    cd criminal
