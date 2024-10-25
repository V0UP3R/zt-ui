// Avatar.tsx
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { cn } from '../utils/cn'

export type AvatarProps = {
  src?: string
  name?: string
  rounded?: boolean
  size?: 'sm' | 'md' | 'lg'
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  objectPosition?: string // Ex: 'center', 'top', 'left center'
}

const sizes = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-md',
  lg: 'w-16 h-16 text-lg',
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  rounded = true,
  size = 'md',
  objectFit = 'cover',
  objectPosition = 'center',
}) => {
  const getInitials = (name?: string) =>
    name ? name.split(' ').map(n => n[0]).slice(0, 2).join('') : ''

  return (
    <div
      className={cn(
        'flex items-center justify-center bg-gray-300 text-white font-bold',
        sizes[size],
        rounded ? 'rounded-full' : 'rounded-md'
      )}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className={cn(
            'object-cover w-full h-full',
            rounded ? 'rounded-full' : 'rounded-md'
          )}
          style={{
            objectFit,
            objectPosition,
          }}
        />
      ) : name ? (
        <span>{getInitials(name)}</span>
      ) : (
        <FaUser size="50%" />
      )}
    </div>
  )
}
