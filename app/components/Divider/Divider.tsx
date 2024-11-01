import React from 'react';

export type DividerProps = {
  text?: string;
  textColor?: string;
  borderColor?: string;
  thickness?: string;
  marginY?: string;
}

const Divider: React.FC<DividerProps> = ({
  text,
  textColor = 'text-gray-500',
  borderColor = 'border-gray-300',
  thickness = 'border-t-2',
  marginY = 'my-4',
}) => {
  return (
    <div className={`flex items-center ${marginY}`}>
      <div className={`flex-grow ${thickness} ${borderColor}`}></div>
      {text && (
        <span className={`mx-2 font-semibold ${textColor}`}>{text}</span>
      )}
      <div className={`flex-grow ${thickness} ${borderColor}`}></div>
    </div>
  );
};

export default Divider;
