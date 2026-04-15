# Saurabh Pathak — Portfolio (Next.js)

A gaming/cyberpunk-themed portfolio built with Next.js 14, Three.js, and Framer Motion.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
saurabh-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Full design system (CSS vars, components)
├── components/
│   ├── Cursor.tsx          # Custom cursor + trail effect
│   ├── LoadingScreen.tsx   # Boot-sequence loading screen
│   ├── AchievementToast.tsx# Gaming achievement pop-ups
│   ├── Navbar.tsx          # Fixed HUD navigation
│   ├── Hero.tsx            # Three.js scene + typewriter
│   ├── About.tsx           # Profile + stat cards
│   ├── Journey.tsx         # Alternating timeline
│   ├── Skills.tsx          # 3D CSS sphere + XP bars
│   ├── Projects.tsx        # 3D tilt project cards
│   ├── Contact.tsx         # Three.js cube + contact links
│   └── Footer.tsx          # Footer
└── lib/
    └── data.ts             # All portfolio content in one file
```

## ✨ Features Added vs Original HTML

| Feature | Description |
|---|---|
| 🎮 Boot Screen | Gaming-style system boot sequence on load |
| 🏆 Achievements | Toast notifications as you scroll each section |
| ✍️ Typewriter | Animated role cycling in hero |
| 🖱️ Cursor Trail | 8-dot glowing trail follows cursor |
| 🕹️ Drag Sphere | Skill sphere is now draggable |
| 📐 3D Tilt Cards | Project cards tilt on mouse move |
| ⚡ XP Bars | Skill bars with EXPERT/ADV/MID level badges |
| 🧊 Floaters | Random octahedrons + animated grid in hero |
| 🔤 Glitch FX | Name glitches periodically |
| 📡 HUD Panel | Operator Status panel in Contact |
| 📜 Scanlines | CRT scanline overlay on entire page |

## 🔧 Customise

Edit `lib/data.ts` to update all content — projects, skills, timeline, contact links.
