import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-opacity duration-200',
  {
    variants: {
      variant: {
        default: 'bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text hover:bg-light-primary/90 dark:hover:bg-dark-primary/90',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-light-primary text-light-text dark:border-dark-primary dark:text-dark-text bg-light-background dark:bg-dark-background hover:bg-light-secondary dark:hover:bg-dark-secondary',
        secondary: 'bg-light-secondary text-light-text dark:bg-dark-secondary dark:text-dark-text hover:bg-light-secondary/80 dark:hover:bg-dark-secondary/80',
        ghost: 'hover:bg-light-secondary hover:text-light-accent dark:hover:bg-dark-secondary dark:hover:text-dark-accent',
        link: 'text-light-accent dark:text-dark-accent underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          'hover:opacity-50 duration-700'
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

