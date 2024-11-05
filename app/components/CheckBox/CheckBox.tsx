'use client'
import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { cn } from "../utils/cn";

export interface CheckboxProps {
  label?: string;
  checkedColor?: string;
  uncheckedColor?: string;
  size?: "sm" | "md" | "lg";
  checkedIcon?: React.ReactNode;
  checkedIconColor?: string;
  disabled?: boolean; // Nova propriedade para desabilitar o checkbox
}

const sizeClasses = {
  sm: "w-4 h-4 text-sm",
  md: "w-6 h-6 text-lg",
  lg: "w-8 h-8 text-xl",
};

const Checkbox = ({
  label,
  checkedColor = "bg-green-500",
  uncheckedColor = "border-gray-400",
  size = "md",
  checkedIcon = <MdCheck />,
  checkedIconColor = "text-white",
  disabled = false, // Valor padrão
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    if (!disabled) {
      setChecked(!checked);
    }
  };

  return (
    <label className={`flex items-center gap-2 select-none ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      <div
        className={cn(
          "relative flex items-center justify-center border-2 rounded-lg transition-all duration-300",
          sizeClasses[size],
          checked ? checkedColor : uncheckedColor,
          disabled ? 'border-gray-300 cursor-not-allowed' : '' // Aplicar cor de borda diferente quando desabilitado
        )}
        onClick={toggleChecked}
      >
        {checked && (
          <div className={cn(checkedIconColor)}>
            {checkedIcon}
          </div>
        )}
      </div>
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
};

export default Checkbox