"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { IconType } from "react-icons"
import { FiHome, FiFileText, FiMail, FiSettings, FiMoon, FiSun, FiLogIn } from "react-icons/fi"
import { cn } from "../utils/cn"
import Button from "../Button/Button"
interface NavItem {
  id: string
  label: string
  icon: IconType
}

export interface NavbarProps {
  items?: NavItem[]
  initialActiveItem?: string
  variant?: "bottom" | "top" | "aside"
  align?: "start" | "center" | "end"
  showLabels?: boolean
  showThemeToggle?: boolean
  showLogin?: boolean
  onThemeToggle?: (isDark: boolean) => void
  onItemClick?: (id: string) => void
  onLogin?: () => void
  onLogout?: () => void
  className?: string
  user?: {
    name: string
    email: string
    image?: string
  } | null
}

const defaultItems: NavItem[] = [
  { id: "home", label: "Início", icon: FiHome },
  { id: "about", label: "Sobre", icon: FiFileText },
  { id: "contact", label: "Contato", icon: FiMail },
  { id: "settings", label: "Configurações", icon: FiSettings },
]

const Navbar:React.FC<NavbarProps> = ({
  items = defaultItems,
  initialActiveItem = "home",
  variant = "bottom",
  align = "center",
  showLabels = false,
  showThemeToggle = true,
  showLogin = false,
  onThemeToggle,
  onItemClick,
  onLogin,
  onLogout,
  className,
  user,
}) => {
  const [activeItem, setActiveItem] = React.useState(initialActiveItem)
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    onThemeToggle?.(!isDarkMode)
  }

  const handleItemClick = (id: string) => {
    setActiveItem(id)
    onItemClick?.(id)
  }

  const navbarClasses = cn(
    "fixed bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300",
    variant === "aside" ? "h-screen w-64 flex flex-col" : "px-4 py-2 rounded-full flex",
    variant === "top" ? "top-4" : variant === "bottom" ? "bottom-4" : "left-0 top-0",
    variant !== "aside" && (
      align === "start" ? "left-4" : align === "end" ? "right-4" : "left-1/2 -translate-x-1/2"
    ),
    className
  )

  const itemClasses = cn(
    "relative px-3 py-2 flex items-center gap-2 rounded-full text-gray-600 dark:text-gray-300",
    "hover:text-gray-900 dark:hover:text-white transition-colors",
    variant === "aside" && "w-full"
  )

  return (
    <nav className={navbarClasses}>
      {items.map((item) => (
        <motion.button
          key={item.id}
          className={cn(
            itemClasses,
            activeItem === item.id && "text-gray-900 dark:text-white"
          )}
          onClick={() => handleItemClick(item.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <item.icon className="w-6 h-6" />
            {(showLabels || variant === "aside") && (
              <span className="ml-2 text-sm font-medium">{item.label}</span>
            )}
          </div>
          {activeItem === item.id && (
            <motion.div
              className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full -z-10"
              layoutId="activeBackground"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
      {showThemeToggle && (
        <motion.button
          className={itemClasses}
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDarkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
          {variant === "aside" && <span className="text-sm font-medium">Alternar Tema</span>}
        </motion.button>
      )}
      <Button variant="light" isIconOnly onClick={onLogin} className={cn(itemClasses, "w-full justify-start")}>
        <FiLogIn className="w-6 h-6" />
        {variant === "aside" && <span className="ml-2 text-sm font-medium">Entrar</span>}
      </Button>
    </nav>
  )
}

export default Navbar;