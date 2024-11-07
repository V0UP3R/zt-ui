"use client";
import React, { useState, useEffect, useCallback, Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const ModalContext = React.createContext<
  | {
      setIsOpen: Dispatch<SetStateAction<boolean>>
      overflow?: "inside" | "outside";
    }
  | undefined
>(undefined);

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  overflow?: "inside" | "outside";
};

const sizeClasses = {
  sm: "max-w-[90%] min-w-[20rem] max-h-[50vh] min-h-[10rem]",
  md: "max-w-[80%] min-w-[30rem] max-h-[60vh] min-h-[15rem]",
  lg: "max-w-[70%] min-w-[40rem] max-h-[70vh] min-h-[20rem]",
  xl: "max-w-[60%] min-w-[50rem] max-h-[80vh] min-h-[25rem]",
  full: "w-full h-screen",
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, children, size = "md", overflow = "inside", setIsOpen }, ref) => {
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
      if(isOpen === false) {
        onClose();
      }
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
          <div
            className={`fixed z-50 flex items-center justify-center overflow-x-hidden outline-none focus:outline-none ${
              overflow === "outside" ? "overflow-y-auto inset-4" : "inset-0"
            }`}
          >
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
              className={`relative mx-auto ${sizeClasses[size]} ${
                size === "full" ? "" : "my-6"
              }`}
            >
              <div
                ref={ref}
                className={`relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none mb-4 ${
                  size === "full" && "h-screen"
                }`}
              >
                <ModalContext.Provider value={{ overflow, setIsOpen }}>
                  {children}
                </ModalContext.Provider>
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
);

Modal.displayName = "Modal";

const ModalTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h3 ref={ref} className={`text-2xl font-semibold ${className}`} {...props}>
      {children}
    </h3>
  );
});

ModalTitle.displayName = "ModalTitle";

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {

  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error("ModalHeader must be used within a Modal component");
  }
  
  const { setIsOpen } = context;

  return (
    <div
      ref={ref}
      className={`flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ${className}`}
      {...props}
    >
      {children}
      <button
        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={() => setIsOpen(false)}
      >
        <IoMdClose className="w-6 h-6" />
      </button>
    </div>
  );
});

ModalHeader.displayName = "ModalHeader";

const ModalContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error("ModalHeader must be used within a Modal component");
  }
  const { overflow } = context;
  return (
    <div ref={ref} className={`relative p-6 flex-auto ${overflow === 'inside' ? 'overflow-y-auto max-h-[60vh]' : ''} ${overflow === 'outside' ? 'overflow-hidden' : ''}`} {...props}>
      {children}
    </div>
  );
});

ModalContent.displayName = "ModalContent";

const ModalFooter = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return(
    <div ref={ref} {...props} className="p-5 border-t border-solid border-gray-300">
      {children}
    </div>
  )
});

export default { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter };
