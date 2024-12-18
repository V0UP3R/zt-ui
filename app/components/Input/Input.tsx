'use client';
import React, { InputHTMLAttributes, useRef, useState, useEffect } from 'react';
import { cn } from '../utils/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  variant?: 'default' | 'outline' | 'filled' | 'line' | 'floating';
}

const Input = ({
  label,
  containerClassName,
  labelClassName,
  inputClassName,
  variant = 'default',
  id,
  disabled = false,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);
  const [labelWidth, setLabelWidth] = useState(0);

  const handleFocus = () => {
    if (!disabled) setIsFocused(true);
  };

  const handleBlur = () => {
    if (!disabled && inputRef.current?.value === '') {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.offsetWidth);
    }
  }, [label]);

  const variantClasses = {
    default:
      'border bg-primary border-light-secondary dark:border-dark-secondary w-full rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-accent',
    outline:
      'border border-light-primary w-full dark:border-dark-primary bg-transparent rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent',
    filled:
      'bg-light-primary dark:bg-dark-primary w-full border border-light-secondary dark:border-dark-secondary rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent',
    line:
      'border-b-2 border-gray-300 bg-transparent w-full dark:border-dark-secondary p-2 focus:outline-none',
    floating:
      'relative z-30 w-full bg-transparent rounded-md w-full focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent',
  };

  return (
    <div
      className={cn(
        'grid w-full max-w-sm items-center gap-1.5',
        containerClassName,
        { 'opacity-50 cursor-not-allowed': disabled }
      )}
    >
      {variant === 'floating' && (
        <div className={variantClasses.floating}>
          <div className="relative">
            <input
              ref={inputRef}
              id={id}
              disabled={disabled}
              className={cn(
                'peer border border-light-secondary dark:border-dark-secondary bg-transparent focus:outline-none focus:ring-0 w-full p-2',
                inputClassName,
                {
                  'border-t-light-secondary dark:border-t-dark-secondary':
                    !(isFocused || inputRef.current?.value),
                  'border-b-light-secondary dark:border-b-dark-secondary': true,
                }
              )}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...props}
            />
            {label && (
              <label
                ref={labelRef}
                htmlFor={id}
                className={cn(
                  'absolute left-3 transition-all duration-200 ease-in-out z-10 pointer-events-none bg-transparent',
                  {
                    'top-[-10px] text-light-text dark:text-dark-text text-xs':
                      isFocused || inputRef.current?.value,
                    'top-1/2 transform -translate-y-1/2 text-light-text dark:text-dark-text text-sm':
                      !isFocused && !inputRef.current?.value,
                  },
                  labelClassName
                )}
              >
                {label}
              </label>
            )}
            <div
              className={cn(
                'absolute top-[-1px] h-[2px] bg-light-background dark:bg-dark-background',
                {
                  hidden: !(isFocused || inputRef.current?.value),
                }
              )}
              style={{
                width: `${labelWidth - 2}px`,
                left: '8px',
              }}
            />
          </div>
        </div>
      )}

      {variant !== 'floating' && (
        <>
          {label && (
            <label
              htmlFor={id}
              className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                labelClassName
              )}
            >
              {label}
            </label>
          )}

          <div className="relative w-full">
            <input
              id={id}
              ref={inputRef}
              disabled={disabled}
              className={cn(
                variantClasses[variant],
                inputClassName,
                { 'cursor-not-allowed opacity-50': disabled }
              )}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...props}
            />
            {variant === 'line' && (
              <span
                className={cn(
                  'absolute left-1/2 bottom-0 h-[2px] bg-blue-500 transition-all duration-500 ease-out',
                  {
                    'translate-x-[-50%] w-full': isFocused,
                    'translate-x-[-50%] w-0': !isFocused,
                  }
                )}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Input;