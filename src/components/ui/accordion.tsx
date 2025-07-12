/**
 * Accordion component for collapsible content sections
 */
import * as React from "react"
import { ChevronDown } from "lucide-react"

const AccordionContext = React.createContext<{
  value: string | undefined
  onValueChange: (value: string | undefined) => void
  type: 'single' | 'multiple'
  collapsible?: boolean
}>({
  value: undefined,
  onValueChange: () => {},
  type: 'single'
})

export interface AccordionProps {
  type: 'single' | 'multiple'
  collapsible?: boolean
  defaultValue?: string
  value?: string
  onValueChange?: (value: string | undefined) => void
  className?: string
  children: React.ReactNode
}

const Accordion = ({ type, collapsible, defaultValue, value, onValueChange, className, children }: AccordionProps) => {
  const [internalValue, setInternalValue] = React.useState<string | undefined>(defaultValue)
  const currentValue = value !== undefined ? value : internalValue
  const handleValueChange = onValueChange || setInternalValue

  return (
    <AccordionContext.Provider value={{ value: currentValue, onValueChange: handleValueChange, type, collapsible }}>
      <div className={className}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export interface AccordionItemProps {
  value: string
  className?: string
  children: React.ReactNode
}

const AccordionItem = ({ value, className, children }: AccordionItemProps) => (
  <div className={`border-b ${className || ''}`} data-value={value}>
    {children}
  </div>
)

export interface AccordionTriggerProps {
  className?: string
  children: React.ReactNode
}

const AccordionTrigger = ({ className, children }: AccordionTriggerProps) => {
  const { value: currentValue, onValueChange, type, collapsible } = React.useContext(AccordionContext)
  const itemValue = React.useContext(React.createContext(''))
  
  // Get the item value from the parent AccordionItem
  const getItemValue = () => {
    const item = document.querySelector(`[data-value]`)
    return item?.getAttribute('data-value') || ''
  }

  const handleClick = () => {
    const itemVal = getItemValue()
    if (type === 'single') {
      if (currentValue === itemVal && collapsible) {
        onValueChange(undefined)
      } else {
        onValueChange(itemVal)
      }
    }
  }

  return (
    <button
      className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline ${className || ''}`}
      onClick={handleClick}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  )
}

export interface AccordionContentProps {
  className?: string
  children: React.ReactNode
}

const AccordionContent = ({ className, children }: AccordionContentProps) => {
  const { value: currentValue } = React.useContext(AccordionContext)
  const [isOpen, setIsOpen] = React.useState(false)
  
  React.useEffect(() => {
    const getItemValue = () => {
      const item = document.querySelector(`[data-value]`)
      return item?.getAttribute('data-value') || ''
    }
    setIsOpen(currentValue === getItemValue())
  }, [currentValue])

  if (!isOpen) return null

  return (
    <div className={`overflow-hidden text-sm transition-all ${className || ''}`}>
      <div className="pb-4 pt-0">
        {children}
      </div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
