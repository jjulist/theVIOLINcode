/**
 * Tabs component for tabbed interfaces
 */
import * as React from "react"

const TabsContext = React.createContext<{
  value: string
  onValueChange: (value: string) => void
}>({
  value: '',
  onValueChange: () => {}
})

export interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

const Tabs = ({ defaultValue, value, onValueChange, className, children }: TabsProps) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || '')
  const currentValue = value || internalValue
  const handleValueChange = onValueChange || setInternalValue

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export interface TabsListProps {
  className?: string
  children: React.ReactNode
}

const TabsList = ({ className, children }: TabsListProps) => (
  <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className || ''}`}>
    {children}
  </div>
)

export interface TabsTriggerProps {
  value: string
  className?: string
  children: React.ReactNode
}

const TabsTrigger = ({ value, className, children }: TabsTriggerProps) => {
  const { value: currentValue, onValueChange } = React.useContext(TabsContext)
  
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        currentValue === value ? 'bg-background text-foreground shadow-sm' : ''
      } ${className || ''}`}
      onClick={() => onValueChange(value)}
    >
      {children}
    </button>
  )
}

export interface TabsContentProps {
  value: string
  className?: string
  children: React.ReactNode
}

const TabsContent = ({ value, className, children }: TabsContentProps) => {
  const { value: currentValue } = React.useContext(TabsContext)
  
  if (currentValue !== value) return null
  
  return (
    <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className || ''}`}>
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
