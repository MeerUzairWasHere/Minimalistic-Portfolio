'use client'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ny } from '../lib/utils'
import { Card, CardHeader } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface ResumeCardProps {
   logoUrl: string
   altText: string
   title: string
   subtitle?: string
   href?: string
   badges?: readonly string[]
   period: string
   description?: string
}
export function ResumeCard({
   logoUrl,
   altText,
   title,
   subtitle,
   href,
   badges,
   period,
   description,
}: ResumeCardProps) {
   const [isExpanded, setIsExpanded] = React.useState(false)

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (description) {
         e.preventDefault()
         setIsExpanded(!isExpanded)
      }
   }

   return (
      <Link
         href={href || '#'}
         className="block cursor-pointer"
         onClick={handleClick}
      >
         <Card className="flex">
            <div className="flex-none">
               <Avatar className="bg-muted-background m-auto size-12 border dark:bg-foreground">
                  <AvatarImage
                     src={logoUrl}
                     alt={altText}
                     className="object-contain"
                  />
                  <AvatarFallback>{altText[0]}</AvatarFallback>
               </Avatar>
            </div>
            <div className="group ml-4 grow flex-col items-center">
               <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                     <h3 className="inline-flex items-center justify-center text-xs font-semibold leading-none">
                        {title}
                        <ChevronRightIcon
                           className={ny(
                              'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                              isExpanded ? 'rotate-90' : 'rotate-0',
                           )}
                        />
                     </h3>
                     <div className="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
                        {period}
                     </div>
                  </div>
                  {subtitle && <div className="font-sans text-xs">{subtitle} {badges && (
                           <span>
                              {badges.map((badge, index) => (
                                 <span key={index}>| {badge}</span>
                              ))}
                           </span>
                        )}</div>} 
                   
               </CardHeader>
               {description && (
                  <motion.div
                     initial={{ opacity: 0, height: 0 }}
                     animate={{
                        opacity: isExpanded ? 1 : 0,

                        height: isExpanded ? 'auto' : 0,
                     }}
                     transition={{
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                     }}
                     className="mt-2 text-xs sm:text-sm"
                  >
                     {description}
                  </motion.div>
               )}
            </div>
         </Card>
      </Link>
   )
}
