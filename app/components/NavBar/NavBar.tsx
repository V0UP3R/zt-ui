"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { IconType } from "react-icons"
import { FiHome, FiFileText, FiMail, FiSettings, FiMoon, FiSun, FiLogIn } from "react-icons/fi"
import { cn } from "../utils/cn"
import Button from "../Button/Button"
import Image from "next/image"

export interface NavItem {
  id: string
  label: string
  icon: IconType
  subItems?: NavItem[] // Adiciona a propriedade para subitens
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
  {
    id: "about",
    label: "Sobre",
    icon: FiFileText,
    subItems: [
      { id: "team", label: "Equipe", icon: FiFileText },
      { id: "mission", label: "Missão", icon: FiFileText },
    ],
  },
  { id: "contact", label: "Contato", icon: FiMail },
  { id: "settings", label: "Configurações", icon: FiSettings },
]

const Navbar = ({
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
}: NavbarProps) => {
  const [activeItem, setActiveItem] = React.useState(initialActiveItem)
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null) // Estado para controlar submenu

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    onThemeToggle?.(!isDarkMode)
  }

  const handleItemClick = (id: string, hasSubItems?: boolean) => {
    // Somente abre ou fecha o submenu se o item tiver subitens
    if (hasSubItems) {
      setOpenSubMenu(openSubMenu === id ? null : id)
    } else {
      setActiveItem(id)
      setOpenSubMenu(null) // Fecha o submenu se não houver
      onItemClick?.(id) // Chama a ação se não houver subitens
    }
  }

  const navbarClasses = cn(
    "bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300",
    variant === "aside"
      ? "relative h-screen w-64 flex flex-col" // Flex para coluna em modo "aside"
      : "fixed px-4 py-2 rounded-full flex",
    variant === "top"
      ? "top-4 left-1/2 -translate-x-1/2"
      : variant === "bottom"
      ? "bottom-4 left-1/2 -translate-x-1/2"
      : "left-0 top-0",
    variant !== "aside" && (
      align === "start"
        ? "left-4"
        : align === "end"
        ? "right-4"
        : "left-1/2 -translate-x-1/2"
    ),
    className
  );

  const itemClasses = cn(
    "relative px-3 py-2 flex items-center gap-2 rounded-full text-gray-600 dark:text-gray-300",
    "hover:text-gray-900 dark:hover:text-white transition-colors",
    variant === "aside" && "w-full"
  )

  const subItemClasses = cn(
    "relative px-5 py-2 flex items-center gap-2 rounded-full text-gray-500 dark:text-gray-400",
    "hover:text-gray-900 dark:hover:text-white transition-colors"
  )

  const dropdownClasses = cn(
    "absolute bottom-12 bg-white dark:bg-gray-800 rounded-md overflow-hidden",
    variant !== "aside" ? "w-36" : "w-64",
    "mb-2" // Posiciona o dropdown acima
  )

  return (
    <nav className={navbarClasses}>
      {variant === "aside" && (
        <>
          {/* Topo: Logo ou título */}
          <div className="p-4 flex items-center justify-start">
            {/* <h1 className="text-4xl font-extralight text-light-accent dark:text-dark-text">ZT</h1> */}
            <Image src={isDarkMode ? "/logo-dark.svg" : "/logo-light.svg"} alt="logo" width={90} height={90}/>
          </div>

          {/* Meio: Itens de navegação */}
          <div className="flex-grow overflow-y-auto">
            {items.map((item) => (
              <div key={item.id}>
                <motion.button
                  className={cn(
                    itemClasses,
                    activeItem === item.id && "text-gray-900 dark:text-white"
                  )}
                  onClick={() => handleItemClick(item.id, Boolean(item.subItems))}
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
                {item.subItems && openSubMenu === item.id && (
                  <div className="relative pl-6">
                    <div className="absolute left-5 top-0 h-full w-1 bg-gray-500 dark:bg-gray-600" />
                    {item.subItems.map((subItem) => (
                      <motion.button
                        key={subItem.id}
                        className={subItemClasses}
                        onClick={() => {
                          setActiveItem(subItem.id); // Altera o item ativo para o subitem
                          onItemClick?.(subItem.id); // Chama a ação para o subitem
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <subItem.icon className="w-5 h-5" />
                        {(showLabels || variant === "aside") && (
                          <span className="ml-2 text-sm font-medium">{subItem.label}</span>
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Fundo: Botões de tema e login */}
          <div className="p-4">
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
              <FiLogIn className="w-6 h-6 text-dark-text dark:text-light-accent" />
              {variant === "aside" && <span className="ml-2 text-sm font-medium text-dark-text dark:text-light-accent">Entrar</span>}
            </Button>
          </div>
        </>
      )}
      {/* Para outras variantes, renderize os itens diretamente */}
      {variant !== "aside" && items.map((item) => (
        <div key={item.id}>
          <motion.button
            className={cn(
              itemClasses,
              activeItem === item.id && "text-gray-900 dark:text-white"
            )}
            onClick={() => handleItemClick(item.id, Boolean(item.subItems))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center">
              <item.icon className="w-6 h-6" />
              {(showLabels) && (
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
          {item.subItems && openSubMenu === item.id && (
            <div className={dropdownClasses}>
              {item.subItems.map((subItem) => (
                <motion.button
                  key={subItem.id}
                  className={subItemClasses}
                  onClick={() => {
                    setActiveItem(subItem.id);
                    onItemClick?.(subItem.id);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <subItem.icon className="w-5 h-5" />
                  {(showLabels) && (
                    <span className="ml-2 text-sm font-medium">{subItem.label}</span>
                  )}
                </motion.button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Navbar
