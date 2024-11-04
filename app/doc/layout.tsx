'use client'
import { FiCpu, FiDatabase, FiFileText, FiHome, FiMail, FiSettings } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Modal, NavItem } from "../components";
import Navbar from "../components/NavBar/NavBar";
import { BiSolidComponent } from "react-icons/bi";
import { IoMdInformationCircle } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

const components = [
  { ...Modal, name: "Modal", description: "A modal dialog component" },
  { ...Button, name: "Button", description: "A button component" },
];

// const customItems: NavItem[] = [
//   { id: "", label: "Componentes", icon: FiCpu },
//   { id: "apis", label: "APIs", icon: FiDatabase },
// ];

const customItems: NavItem[] = [
  { id: "intro", label: "Introdução", icon: IoMdInformationCircle  },
  {
    id: "components/button",
    label: "Componentes",
    icon: BiSolidComponent,
    subItems: [
      { id: "components/button", label: "- Button"},
      { id: "components/input", label: "- Input"},
      { id: "components/modal", label: "- Modal"},
    ],
  },
  { id: "pro", label: "Pro", icon: FaProductHunt  },
  { id: "contact", label: "Contato", icon: GrContact  },
];

export default function DocLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComponent, setSelectedComponent] = useState<
    (typeof components)[number]
  >(components[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const router = useRouter();

  const handleItemClick = (id: string) => {
    const item = customItems.find(item => item.id === id);
    if (item) {
      router.push(`/doc/${item.id}`);
    } else {
      // Check if id matches any sub-item
      const foundSubItem = customItems.flatMap(item => item.subItems || []).find(subItem => subItem.id === id);
      if (foundSubItem) {
        router.push(`/doc/${foundSubItem.id}`);
      }
    }
  };

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
            onThemeToggle={() => setIsDarkMode(!isDarkMode)}
            onItemClick={handleItemClick}
          />
          {/* Main content */}
          <div className="flex-1 max-h-screen overflow-y-auto">
            <div className="min-h-screen flex py-4">
              {children}
            </div>
          </div>
        </div>
  );
}
