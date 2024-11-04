'use client'
import { useState, ReactNode } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'

interface PlaygroundProps {
  component: string
}

export function Playground({ component }: PlaygroundProps) {
  const [props, setProps] = useState<{ [key: string]: any }>({})

  const handleChange = (prop: string, value: any) => {
    setProps((prevProps) => ({ ...prevProps, [prop]: value }))
  }

  const renderComponent = () => {
    switch (component) {
      case 'Button':
        return <Button {...props}>Example Button</Button>
      case 'Input':
        return <Input {...props} placeholder="Example Input" />
      // Add cases for other components here
      default:
        return <p>Component not found</p>
    }
  }

  const renderPropsControls = () => {
    // Define control inputs for different props
    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Text</label>
          <input
            type="text"
            value={props.children || ''}
            onChange={(e) => handleChange('children', e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            placeholder="Button text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Disabled</label>
          <input
            type="checkbox"
            checked={props.disabled || false}
            onChange={(e) => handleChange('disabled', e.target.checked)}
            className="mt-1 p-2 block"
          />
        </div>
        {/* Add more controls as needed */}
      </div>
    )
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Playground</h2>
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">Component Preview</h3>
        <div className="border rounded p-4 bg-white">{renderComponent()}</div>
      </div>
      <div>
        <h3 className="text-md font-medium mb-2">Props Controls</h3>
        {renderPropsControls()}
      </div>
    </div>
  )
}
