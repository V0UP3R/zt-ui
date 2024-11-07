"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useRouter  as useRouterNext } from "next/router";
import { BiSolidComponent } from "react-icons/bi";
import { IoMdInformationCircle } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { Modal, Button, NavItem, Dropdown } from "@/app/components";
import Image from "next/image";
import Navbar from "@/app/components/NavBar/NavBar";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "@/app/components/utils/cn";
import { Locale } from "@/i18n/config";

const components = [
  { ...Modal, name: "Modal", description: "A modal dialog component" },
  { ...Button, name: "Button", description: "A button component" },
];

// const customItems: NavItem[] = [
//   { id: "", label: "Componentes", icon: FiCpu },
//   { id: "apis", label: "APIs", icon: FiDatabase },
// ];

const customItems: NavItem[] = [
  { id: "intro", label: "Introdução", icon: IoMdInformationCircle },
  {
    id: "components/button",
    label: "Componentes",
    icon: BiSolidComponent,
    subItems: [
      { id: "components/button", label: "- Button" },
      { id: "components/input", label: "- Input" },
      { id: "components/modal", label: "- Modal" },
    ],
  },
  { id: "pro", label: "Pro", icon: FaProductHunt },
  { id: "contact", label: "Contato", icon: GrContact },
];

export default function DocLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale }
}>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComponent, setSelectedComponent] = useState<
    (typeof components)[number]
  >(components[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const itemClasses = cn(
    "relative px-3 py-2 flex items-center gap-2 rounded-full text-gray-600 dark:text-gray-300 hover:scale-105 duration-700",
    "transition-colors hover:scale-105 hover:bg-opacity-90"
  );
  
  const router = useRouter();
  const pathname = usePathname();

  const handleItemClick = (id: string) => {
    const item = customItems.find((item) => item.id === id);
    if (item) {
      router.push(`/${params.locale}/doc/${item.id}`);
    } else {
      // Check if id matches any sub-item
      const foundSubItem = customItems
        .flatMap((item) => item.subItems || [])
        .find((subItem) => subItem.id === id);
      if (foundSubItem) {
        router.push(`/${params.locale}/doc/${foundSubItem.id}`);
      }
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // onThemeToggle?.(!isDarkMode)
  };

  const setLanguage = (language: string) => {
    const newPathname = `/${language}${pathname.replace(/^\/[a-zA-Z-]+/, '')}`;
    router.push(newPathname);
  };

  const footer = (
    <>
      <Dropdown
        size="sm"
        placeholder={params.locale}
        direction="up"
        options={[{ label: "🇧🇷", value: "pt" }, { label: "en", value: "en" }, { label: "es", value: "es" }]}
        onSelect={(option) => setLanguage(option.value)}
      />

      <motion.button
        className={itemClasses}
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDarkMode ? (
          <FiSun className="w-6 h-6" />
        ) : (
          <FiMoon className="w-6 h-6" />
        )}
        <span className="text-sm font-medium">Alternar Tema</span>
      </motion.button>
    </>
  );

  const header = <Image src={isDarkMode ? "/logo-dark.svg" : "/logo-light.svg"} alt="logo" width={90} height={90}/>

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex min-h-screen bg-light-background dark:bg-dark-background">
      {/* Sidebar */}
      <Navbar
        items={customItems}
        variant="aside"
        showLabels
        onItemClick={handleItemClick}
        headerContent={header}
        footerContent={footer}
      />
      {/* Main content */}
      <div className="flex-1 max-h-screen overflow-y-auto">
        <div className="min-h-screen flex">{children}</div>
      </div>
    </div>
  );
}
