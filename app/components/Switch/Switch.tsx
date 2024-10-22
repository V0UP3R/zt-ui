import React, { useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const switchVariants = cva(
  'relative rounded-full transition-colors duration-300',
  {
    variants: {
      size: {
        sm: 'w-[1.8rem] h-[1rem]',
        md: 'w-12 h-6',
        lg: 'w-[3.7rem] h-9',
      },
      state: {
        on: '',
        off: '',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'off',
    },
  }
);

const knobVariants = cva(
  'absolute top-1 left-1 bg-white rounded-full transform transition-transform duration-300',
  {
    variants: {
      size: {
        sm: 'w-3 h-3 top-[0.15rem] left-1',
        md: 'w-4 h-4',
        lg: 'w-7 h-7',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

interface SwitchProps extends VariantProps<typeof switchVariants> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onColor?: string;
  offColor?: string;
  className?: string;
  knobClassName?: string;
  labels?: { on: string; off: string };
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  size,
  onColor = 'bg-green-500',
  offColor = 'bg-gray-300',
  className,
  knobClassName,
  labels,
}) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) onChange(newState);
  };

  return (
    <div className="flex items-center space-x-2">
      {labels && <span>{isOn ? labels.on : labels.off}</span>}
      <button
        type="button"
        onClick={toggleSwitch}
        className={cn(
          switchVariants({ size, state: isOn ? 'on' : 'off' }),
          isOn ? onColor : offColor,
          className
        )}
      >
        <span
          className={cn(
            knobVariants({ size }),
            isOn ? `${size === 'lg' ? 'translate-x-6' : size === 'md' ? 'translate-x-6' : 'translate-x-3'}` : '',
            knobClassName
          )}
        />
      </button>
    </div>
  );
};

export default Switch;
