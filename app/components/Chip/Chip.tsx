import React from 'react';

export type ChipProps = {
  text: string;
  color: string;
}

const Chip = ({ text, color } : ChipProps) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-green-950 text-sm font-normal ${color}`}
    >
      {text}
    </span>
  );
};

export default Chip;