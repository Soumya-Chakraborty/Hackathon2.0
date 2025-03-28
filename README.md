# Kolkata Hackfest 2024 - 12-Hour Coding Sprint 🚀

A modern, responsive website for Kolkata Hackfest 2024, a high-energy 12-hour coding sprint designed to challenge developers and spark innovation.

![Kolkata Hackfest 2024](public/placeholder-logo.png)

## 🌟 Features

- **Modern Design**: Sleek, dark-themed interface with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Sections**:
  - Hero section with countdown timer
  - About section with event details
  - Schedule section
  - Prizes showcase
  - Sponsors display
  - FAQ section
  - Registration form
- **Smooth Animations**: Scroll-based reveal animations and interactive elements
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Custom CSS animations
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Soumya-Chakraborty/Hackathon2.0.git
   cd Hackathon2.0
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
FlashHack2.0/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── public/               # Static assets
├── styles/              # Additional styles
└── lib/                 # Utility functions
```

## 🎨 Customization

### Colors and Theme
The website uses a dark theme with custom gradients. You can modify the colors in:
- `app/globals.css`
- `tailwind.config.js`

### Content
Update the content in the respective section components under `components/sections/`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Soumya Chakraborty** - *Initial work* - [Soumya-Chakraborty](https://github.com/Soumya-Chakraborty)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components 