import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  overflow?: "inside" | "outside"; // Controle de overflow
}

const sizeClasses = {
  sm: "max-w-[90%] min-w-[20rem] max-h-[50vh] min-h-[10rem]",
  md: "max-w-[80%] min-w-[30rem] max-h-[60vh] min-h-[15rem]",
  lg: "max-w-[70%] min-w-[40rem] max-h-[70vh] min-h-[20rem]",
  xl: "max-w-[60%] min-w-[50rem] max-h-[80vh] min-h-[25rem]",
  full: "w-full h-screen",
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  headerContent,
  footerContent,
  size = "md",
  overflow = "inside", // Valor padrão para o overflow
}: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Impede rolagem no body
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset"; // Restaura rolagem no body
    };
  }, [isOpen, handleEscape]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className={`fixed z-50 flex items-center justify-center overflow-x-hidden outline-none focus:outline-none ${overflow === 'outside' ? 'overflow-y-auto inset-4' : 'inset-0'}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 bg-black bg-opacity-50`}
            aria-hidden="true"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative mx-auto ${sizeClasses[size]} ${size === 'full' ? '' : 'my-6'}`}
          >
            <div className={`relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none mb-4 ${size === 'full' && "h-screen"}`}>
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                {headerContent || (
                  <h3 className="text-2xl font-semibold">{title}</h3>
                )}
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={onClose}
                >
                  <IoMdClose className="w-6 h-6" />
                </button>
              </div>
              <div className={`relative p-6 flex-auto ${overflow === 'inside' ? 'overflow-y-auto' : ''} ${overflow === 'outside' ? 'overflow-hidden' : ''}`}>
                {children}
              </div>
              {footerContent && (
                <div className="p-5 border-t border-solid border-gray-300">
                  {footerContent}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (isBrowser) {
    return createPortal(modalContent, document.body);
  } else {
    return null;
  }
}
