"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FiHome,
  FiFileText,
  FiMail,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";
import { cn } from "../utils/cn";
import { createContext, Dispatch, useState } from "react";
import Divider from "../Divider/Divider";

interface NavBarContextProps<T = void> {
  activeItem: string | number;
  setActiveItem: Dispatch<React.SetStateAction<string | number>>;
  onItemClick?: (id: string | number) => T;
  variant: "bottom" | "top" | "aside";
}

const NavBarContext = createContext<NavBarContextProps | undefined>(undefined);
export interface NavItem {
  id: string;
  label: string;
  icon?: IconType;
  subItems?: NavItem[];
}

export interface NavbarProps {
  items?: NavItem[];
  initialActiveItem?: string | number;
  variant?: "bottom" | "top" | "aside";
  align?: "start" | "center" | "end";
  showLabels?: boolean;
  onThemeToggle?: (isDark: boolean) => void;
  onItemClick?: (id: string | number) => void;
  className?: string;
  children: React.ReactNode;
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
];

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  (
    {
      items = defaultItems,
      initialActiveItem = "home",
      variant = "bottom",
      align = "center",
      showLabels = false,
      onThemeToggle,
      onItemClick,
      className,
      children,
    },
    ref
  ) => {
    const [activeItem, setActiveItem] = React.useState(initialActiveItem);
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null); // Estado para controlar submenu

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      onThemeToggle?.(!isDarkMode);
    };

    const handleItemClick = (id: string, hasSubItems?: boolean) => {
      // Somente abre ou fecha o submenu se o item tiver subitens
      if (hasSubItems) {
        setOpenSubMenu(openSubMenu === id ? null : id);
      } else {
        setActiveItem(id);
        setOpenSubMenu(null); // Fecha o submenu se não houver
        onItemClick?.(id); // Chama a ação se não houver subitens
      }
    };

    const navbarClasses = cn(
      "bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300",
      variant === "aside"
        ? "relative h-screen w-72 flex flex-col" // Flex para coluna em modo "aside"
        : "fixed px-4 py-2 rounded-full flex",
      variant === "top"
        ? "top-4 left-1/2 -translate-x-1/2"
        : variant === "bottom"
        ? "bottom-4 left-1/2 -translate-x-1/2"
        : "left-0 top-0",
      variant !== "aside" &&
        (align === "start"
          ? "left-4"
          : align === "end"
          ? "right-4"
          : "left-1/2 -translate-x-1/2"),
      className
    );

    const itemClasses = cn(
      "relative px-3 py-2 flex items-center gap-2 rounded-full text-gray-600 dark:text-gray-300 hover:scale-105 duration-700",
      "transition-colors hover:scale-105 hover:bg-opacity-90",
      variant === "aside" && "w-full"
    );

    const subItemClasses = cn(
      "relative px-4 py-2 flex items-center gap-2 rounded-full text-gray-500 dark:text-gray-400",
      "hover:text-gray-900 dark:hover:text-white transition-colors"
    );

    const dropdownClasses = cn(
      "absolute bottom-12 bg-white dark:bg-gray-800 rounded-md overflow-hidden",
      variant !== "aside" ? "w-36" : "w-64",
      "mb-2" // Posiciona o dropdown acima
    );

    return (
      <nav ref={ref} className={navbarClasses}>
        <NavBarContext.Provider
          value={{ activeItem, setActiveItem, variant, onItemClick }}
        >
          {children}
        </NavBarContext.Provider>
        {/* Para outras variantes, renderize os itens diretamente */}
        {/* {variant !== "aside" && */}
        {/* items.map((item) => (
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
                  {item.icon && <item.icon className="w-6 h-6" />}
                  {showLabels && (
                    <span className="ml-2 text-sm font-medium">
                      {item.label}
                    </span>
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
                      {subItem.icon && <subItem.icon className="w-5 h-5" />}
                      {showLabels && (
                        <span className="ml-2 text-sm font-medium">
                          {subItem.label}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              )}
            </div> */}
        {/* ))} */}
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";

const NavbarHeader = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return (
    <div ref={ref} className="p-4 flex items-center justify-center">
      {children}
    </div>
  );
});

NavbarHeader.displayName = "NavbarHeader";

const NavBarContent = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return (
    <div ref={ref} className="flex-grow overflow-y-auto overflow-x-hidden px-2">
      {children}
    </div>
  );
});

NavBarContent.displayName = "NavBarContent";

const NavBarItem = React.forwardRef<
  HTMLDivElement,
  {
    children?: React.ReactNode;
    icon?: IconType;
    label: string;
    itemKey: string | number;
  }
>(({ children, icon: Icon, label, itemKey }, ref) => {
  const context = React.useContext(NavBarContext);
  const [showSubItems, setShowSubItems] = useState(false);

  if (!context) {
    throw new Error("NavBarItem must be used within a NavBar component");
  }

  const { activeItem, setActiveItem, onItemClick, variant } = context;

  const handleItemClick = (itemKey: string | number) => {
    if (children) {
      setShowSubItems(!showSubItems);
    } else {
      setActiveItem(itemKey);
      onItemClick?.(itemKey);
    }
  };

  const itemClasses = cn(
    "relative px-3 py-2 flex gap-2 rounded-full text-gray-600 dark:text-gray-300 hover:scale-105 duration-700",
    "transition-colors hover:scale-105 hover:bg-opacity-90",
    variant === "aside" && "w-full"
  );

  const subItemClasses = cn(
    "pl-4 py-2 flex items-center justify-start text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
  );

  return (
    <motion.div ref={ref}>
      <motion.button
        key={itemKey}
        className={cn(
          itemClasses,
          activeItem === itemKey &&
            "text-light-primary dark:text-dark-secondary bg-light-accent dark:bg-dark-accent flex flex-col"
        )}
        onClick={() => handleItemClick(itemKey)}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center">
          {Icon && <Icon className="w-6 h-6" />}
          <span className="ml-2 text-sm font-medium">{label}</span>
        </div>
        {children && (
          <span
            className={`absolute inset-y-1 right-0 flex items-center pr-2 pointer-events-none`}
          >
            <FiChevronDown
              className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                showSubItems ? "transform rotate-180" : ""
              }`}
            />
          </span>
        )}
        {activeItem === itemKey && (
          <motion.div
            className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full -z-10"
            layoutId="activeBackground"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        )}
      </motion.button>

      {showSubItems && (
        <div className="pl-4 flex flex-col relative">
          <div className="absolute left-6 w-[2px] h-[calc(100%-0.5rem)] bg-light-secondary mb-2" />
          {children &&
            React.Children.map(children, (child) => (
              <motion.div className={subItemClasses}>{child}</motion.div>
            ))}
        </div>
      )}
    </motion.div>
  );
});

const NavbarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="flex-grow overflow-y-auto overflow-x-hidden px-2"
      {...props}
    >
      {children}
    </div>
  );
});

NavbarFooter.displayName = "NavbarFooter";

export default {
  Root: Navbar,
  Header: NavbarHeader,
  Footer: NavbarFooter,
  Content: NavBarContent,
  Item: NavBarItem,
};
