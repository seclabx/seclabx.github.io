"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-black dark:text-white">SEC</span>
              <span className="text-green-600 dark:text-green-400">LABX</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("why-seclabx")}
              className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Why SECLABX
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("engagement")}
              className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Engagement
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("what-we-do")}
                className="block px-3 py-2 text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                What We Do
              </button>
              <button
                onClick={() => scrollToSection("why-seclabx")}
                className="block px-3 py-2 text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Why SECLABX
              </button>
              <button
                onClick={() => scrollToSection("expertise")}
                className="block px-3 py-2 text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("engagement")}
                className="block px-3 py-2 text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Engagement
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
