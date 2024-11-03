import React from 'react';

type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type SpinnerProps = {
  size?: SpinnerSize; 
  color?: string; 
};

const sizeMap: Record<SpinnerSize, string> = {
  sm: 'w-6 h-6',   
  md: 'w-8 h-8',   
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
  '2xl': 'w-20 h-20' 
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color = 'border-blue-500' }) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-4 border-solid border-t-transparent ${sizeMap[size]} ${color}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
