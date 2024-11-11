"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useRouter as useRouterNext } from "next/router";
import { BiSolidComponent } from "react-icons/bi";
import { IoMdInformationCircle } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { Modal, Button, NavItem, Dropdown, Divider } from "@/app/components";
import Image from "next/image";
import Navbar from "@/app/components/NavBar/NavBar";
import { motion } from "framer-motion";
import { FiHome, FiMail, FiMoon, FiSettings, FiSun } from "react-icons/fi";
import { cn } from "@/app/components/utils/cn";
import { Locale } from "@/i18n/config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";

const components = [
  { ...Modal, name: "Modal", description: "A modal dialog component" },
  { ...Button, name: "Button", description: "A button component" },
];

export default function DocLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { dictionary } = getDictionaryUseClient(params.locale);
  const NavbarDictionary = dictionary.NavBar;

  const itemClasses = cn(
    "relative px-3 py-2 flex items-center gap-2 rounded-full text-gray-600 dark:text-gray-300 hover:scale-105 duration-700",
    "transition-colors hover:scale-105 hover:bg-opacity-90"
  );

  const router = useRouter();
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      id: "intro",
      label: NavbarDictionary.items.intro,
      icon: IoMdInformationCircle,
    },
    {
      id: "components",
      label: NavbarDictionary.items.components,
      icon: BiSolidComponent,
      subItems: [
        { id: "components/button", label: "- Button" },
        { id: "components/input", label: "- Input" },
        { id: "components/modal", label: "- Modal" },
      ],
    },
    { id: "pro", label: "Pro", icon: FaProductHunt },
    { id: "contact", label: NavbarDictionary.items.contact, icon: GrContact },
  ];

  const handleItemClick = (id: string | number) => {
    const item = navItems.find((item) => item.id === id);
    if (item) {
      router.push(`/${params.locale}/doc/${item.id}`);
    } else {
      // Check if id matches any sub-item
      const foundSubItem = navItems
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
    const newPathname = `/${language}${pathname.replace(/^\/[a-zA-Z-]+/, "")}`;
    router.push(newPathname);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex min-h-screen bg-light-background dark:bg-dark-background">
      <Navbar.Root variant="aside" showLabels onItemClick={handleItemClick}>
        <Navbar.Header>
          <Image
            src={isDarkMode ? "/logo-dark.svg" : "/logo-light.svg"}
            alt="logo"
            width={90}
            height={90}
          />
          <Divider
            borderColor={isDarkMode ? "bg-black" : "bg-black"}
            thickness="2"
          />
        </Navbar.Header>
        <Navbar.Content>
          {navItems.map((item) => (
            <>
              <Navbar.Item
                key={item.id}
                itemKey={item.id}
                icon={item.icon}
                label={item.label}
              >
              {item.subItems &&
                item.subItems.map((subItem) => (
                  <Navbar.Item
                    key={subItem.id}
                    itemKey={subItem.id}
                    label={subItem.label}
                  />
                ))}
              </Navbar.Item>
            </>
          ))}
        </Navbar.Content>
        <Navbar.Footer className="flex flex-col pl-4 pb-4 gap-4">
          <Dropdown
            size="sm"
            placeholder={params.locale}
            direction="up"
            options={[
              { label: "🇧🇷", value: "pt" },
              { label: "🇺🇸", value: "en" },
              { label: "🇪🇸", value: "es" },
            ]}
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
            <span className="text-sm font-medium">
              {NavbarDictionary.theme}
            </span>
          </motion.button>
        </Navbar.Footer>
      </Navbar.Root>

      {/* Main content */}
      <div className="flex-1 max-h-screen overflow-y-auto">
        <div className="min-h-screen flex">{children}</div>
      </div>
    </div>
  );
}
