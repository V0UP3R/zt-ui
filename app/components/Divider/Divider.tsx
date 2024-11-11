import React from 'react';

export type DividerProps = {
  text?: string;
  textColor?: string;
  borderColor?: string;
  thickness?: string;
  marginY?: string;
  orientation?: 'horizontal' | 'vertical'; // Nova propriedade para orientação
}

const Divider = ({
  text,
  textColor = 'text-gray-500',
  borderColor = 'border-gray-300',
  thickness = 'border-t',
  marginY = 'my-4',
  orientation = 'horizontal', // Valor padrão é 'horizontal'
}: DividerProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={`flex items-center ${marginY} ${isHorizontal ? 'flex-row' : 'flex-col'}`}>
      {isHorizontal ? (
        <>
          <div className={`flex-grow ${thickness} ${borderColor}`}></div>
          {text && (
            <span className={`mx-2 font-semibold ${textColor}`}>{text}</span>
          )}
          <div className={`flex-grow ${thickness} ${borderColor}`}></div>
        </>
      ) : (
        <>
          <div className={`flex-grow ${thickness} ${borderColor}`}></div>
          {text && (
            <span className={`font-semibold ${textColor}`}>{text}</span>
          )}
          <div className={`flex-grow ${thickness} ${borderColor}`}></div>
        </>
      )}
    </div>
  );
};

export default Divider;