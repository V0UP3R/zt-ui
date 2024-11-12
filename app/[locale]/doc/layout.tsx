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
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { dictionary } = getDictionaryUseClient(params.locale);
  const NavbarDictionary = dictionary.NavBar;

  const languages = {
    pt: {
      label: "Português",
      icon: (
        <Image
          src={"/portugues.png"}
          alt={"portugues"}
          height={16}
          width={16}
        />
      ),
    },
    en: {
      label: "English",
      icon: (
        <Image src={"/english.png"} alt={"english"} height={16} width={16} />
      ),
    },
    es: {
      label: "Español",
      icon: (
        <Image src={"/spanish.png"} alt={"spanish"} height={16} width={16} />
      ),
    },
  };

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
    setTheme(theme === "light" ? "dark" : "light");
  };

  const setLanguage = (language: string) => {
    const newPathname = `/${language}${pathname.replace(/^\/[a-zA-Z-]+/, "")}`;
    router.push(newPathname);
  };

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-light-background dark:bg-dark-background">
      <Navbar.Root variant="aside" showLabels onItemClick={handleItemClick}>
        <Navbar.Header className="pt-4 mb-6 flex flex-col">
          <Image
            src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
            alt="logo"
            width={90}
            height={90}
          />
        </Navbar.Header>
        <Navbar.Content>
          <Divider className="bg-light-accent/30 dark:bg-dark-accent mb-4"/>
          {navItems.map((item) => (
            <>
              <Navbar.Item
                key={item.id}
                itemKey={item.id}
                icon={item.icon}
                label={item.label}
                selectedClassName="text-light-primary dark:text-dark-secondary bg-light-accent dark:bg-dark-accent flex flex-col"
              >
                {item.subItems &&
                  item.subItems.map((subItem) => (
                    <Navbar.Item
                      key={subItem.id}
                      itemKey={subItem.id}
                      label={subItem.label}
                      selectedClassName="text-light-primary dark:text-dark-secondary bg-light-accent dark:bg-dark-accent flex flex-col"
                    />
                  ))}
              </Navbar.Item>
            </>
          ))}
        </Navbar.Content>
        <Navbar.Footer className="flex flex-col pl-4 pb-4 gap-4">
          <Dropdown
            size="sm"
            placeholder={
              <div className="flex gap-2">
                {languages[params.locale as keyof typeof languages].icon}{" "}
                {languages[params.locale as keyof typeof languages].label}
              </div>
            }
            direction="up"
            options={[
              {
                label: (
                  <div className="flex gap-2">
                    {languages.pt.icon} {languages.pt.label}
                  </div>
                ),
                value: "pt",
              },
              {
                label: (
                  <div className="flex gap-2">
                    {languages.en.icon} {languages.en.label}
                  </div>
                ),
                value: "en",
              },
              {
                label: (
                  <div className="flex gap-2">
                    {languages.es.icon} {languages.es.label}
                  </div>
                ),
                value: "es",
              },
            ]}
            onSelect={(option) => setLanguage(option.value)}
          />
          <motion.button
            className={itemClasses}
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === "light" ? (
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
