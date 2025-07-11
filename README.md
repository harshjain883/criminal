import json
import os

def get_user_input(prompt, default_value=None):
    """Helper function to get user input with an optional default."""
    if default_value:
        return input(f"{prompt} (default: {default_value}): ") or default_value
    return input(f"{prompt}: ")

def generate_readme_content_unique():
    """Generates README.md content with user interaction."""

    print("\n✨ Let's create a unique README for your portfolio! ✨\n")

    # Try to read project name from package.json
    project_name = "Sahil's Portfolio"
    try:
        with open('package.json', 'r') as f:
            package_data = json.load(f)
            project_name = package_data.get('name', project_name).replace('-', ' ').title()
    except FileNotFoundError:
        print("Warning: package.json not found. Using default project name.")
    except json.JSONDecodeError:
        print("Warning: Could not parse package.json. Using default project name.")

    user_name = get_user_input("What is your full name?", "ꜱᴧʜɪʟ ᴠᴇꝛᴍᴧ")
    github_username = get_user_input("What is your GitHub username?", "harshjain883")
    project_description = get_user_input(
        "Briefly describe your project",
        "A modern, responsive portfolio showcasing my skills in web development and bot creation."
    )

    vibe_choice = get_user_input(
        "Choose a vibe for your README (1: Professional, 2: Creative, 3: Minimalist)",
        "1"
    )

    intro_phrase = ""
    if vibe_choice == "1":
        intro_phrase = "Welcome to my personal portfolio project!"
    elif vibe_choice == "2":
        intro_phrase = "Dive into my digital world! This is where creativity meets code."
    elif vibe_choice == "3":
        intro_phrase = "My portfolio. Clean. Functional."
    else:
        intro_phrase = "Explore my portfolio!"

    readme_content = f"""# {project_name}

👋 {intro_phrase}

{project_description}

## 🚀 Features

-   **Interactive Theme Toggle**: Switch between beautiful dark and light modes.
-   **Responsive Design**: Optimized for seamless viewing across all devices.
-   **Dynamic Social Links**: Engaging buttons with hover effects and tooltips.
-   **Glassmorphism UI**: Modern, frosted glass-like elements.
-   **Animated Background**: Subtle, pulsing background shapes for visual flair.
-   **Clean & Minimal Codebase**: Built with Next.js 14 (App Router) and Tailwind CSS.

## 📂 Project Structure

