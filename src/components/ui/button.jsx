import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const buttonVariants = cva('ui-button', {
  variants: {
    variant: {
      default: 'ui-button--default',
      ghost: 'ui-button--ghost',
      outline: 'ui-button--outline',
    },
    size: {
      sm: 'ui-button--sm',
      md: 'ui-button--md',
      lg: 'ui-button--lg',
      icon: 'ui-button--icon',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
