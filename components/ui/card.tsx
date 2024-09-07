import * as React from 'react'

import { ny } from '../../lib/utils'

const Card = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={ny('rounded-lg bg-card text-card-foreground', className)}
      {...props}
   />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div ref={ref} className={ny('flex flex-col', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
   <h3
      ref={ref}
      className={ny(
         'text-2xl font-semibold leading-none tracking-tight',
         className,
      )}
      {...props}
   />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
   <p
      ref={ref}
      className={ny('text-sm text-muted-foreground', className)}
      {...props}
   />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={ny(
         'text-pretty font-sans text-sm text-muted-foreground',
         className,
      )}
      {...props}
   />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={ny('flex items-center pt-2', className)}
      {...props}
   />
))
CardFooter.displayName = 'CardFooter'

export {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
}
