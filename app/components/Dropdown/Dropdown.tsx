'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiCheck } from 'react-icons/fi'

export type DropdownOption = {
  value: string
  label: string
}

export type DropdownProps = {
  options: DropdownOption[]
  onSelect: (option: DropdownOption) => void
  placeholder?: string
  direction?: 'up' | 'down'
  className?: string
  buttonClassName?: string
  optionClassName?: string
  selectedOptionClassName?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-40 px-3 py-1.5 text-sm',
  md: 'w-64 px-4 py-2 text-md',
  lg: 'w-80 px-5 py-3 text-lg'
}

const iconSizeClasses = {
  sm: 'inset-x-32',
  md: 'inset-x-56',
  lg: 'inset-x-72'
}

const Dropdown = ({
  options,
  onSelect,
  placeholder = 'Selecione uma opção',
  direction = 'down',
  className = '',
  buttonClassName = '',
  optionClassName = '',
  selectedOptionClassName = 'bg-blue-100 text-blue-900',
  size = 'md'
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option)
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        className={`${sizeClasses[size]} ${buttonClassName} text-left bg-white border border-gray-300 dark:bg-dark-button dark:text-dark-butttonText_HeadLine rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={`absolute ${iconSizeClasses[size]} inset-y-1 right-0 flex items-center pr-2 pointer-events-none`}>
          <FiChevronDown
            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </span>
      </button>

      {isOpen && (
        <div
          className={`absolute ${sizeClasses[size]} z-10 bg-white dark:bg-dark-button dark:text-dark-butttonText_HeadLine rounded-md shadow-lg max-h-60 overflow-auto ${direction === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'}`}
        >
          <ul className={`py-1`}>
            {options.map((option) => (
              <li
                key={option.value}
                className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50 transition-colors duration-200 ${
                  selectedOption?.value === option.value ? selectedOptionClassName : optionClassName
                }`}
                onClick={() => handleSelect(option)}
              >
                <span className="block truncate">{option.label}</span>
                {selectedOption?.value === option.value && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                    <FiCheck className="h-5 w-5" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
