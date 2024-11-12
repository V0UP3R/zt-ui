"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FiChevronDown,
} from "react-icons/fi";
import { cn } from "../utils/cn";
import { createContext, Dispatch, useState } from "react";

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

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  (
    {
      initialActiveItem = "home",
      variant = "bottom",
      align = "center",
      onThemeToggle,
      onItemClick,
      className,
      children,
    },
    ref
  ) => {
    const [activeItem, setActiveItem] = React.useState(initialActiveItem);

    const navbarClasses = cn(
      "bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300 dark:bg-dark-background",
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

    return (
      <nav ref={ref} className={navbarClasses}>
        <NavBarContext.Provider
          value={{ activeItem, setActiveItem, variant, onItemClick }}
        >
          {children}
        </NavBarContext.Provider>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";

const NavbarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(props.className, `p-4 flex items-center justify-center`)}
    >
      {children}
    </div>
  );
});

NavbarHeader.displayName = "NavbarHeader";

const NavBarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(props.className, `flex-grow overflow-y-auto overflow-x-hidden px-2`)}
    >
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
          <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 'calc(100% - 0.5rem)' }}
          transition={{ duration: 1 }}
          className="absolute left-6 w-[2px] h-[calc(100%-0.5rem)] bg-light-secondary mb-2" />
          {children &&
            React.Children.map(children, (child) => (
              <motion.div key={itemKey} className={subItemClasses}>{child}</motion.div>
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
