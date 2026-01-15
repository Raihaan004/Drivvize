"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "Home", href: "/", active: true },
  { title: "About us", href: "/about" },
  { title: "FAQs", href: "/faqs" },
  { title: "Services", href: "/services" },
  { title: "Blog", href: "/blog" },
  { title: "Downloads", href: "/downloads" },
  { title: "Careers", href: "/careers" },
  { title: "Contact us", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "w-full fixed top-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md py-3 shadow-md border-b border-slate-200" 
          : "bg-white py-6 border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-row items-center justify-between">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image 
                  src="/drivvize_logo.avif" 
                  alt="Drivvize Logo" 
                  width={180} 
                  height={60} 
                  className={cn(
                    "object-contain transition-all duration-500",
                    isScrolled ? "h-10 w-auto" : "h-14 w-auto"
                  )}
                  priority
                />
              </motion.div>
            </Link>
          </div>
          
          {/* Main Content Area: Menu + Search */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-grow justify-end pr-4 lg:pr-8">
            <NavigationMenu className="max-w-none">
              <NavigationMenuList className="gap-1 lg:gap-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink 
                        className={cn(
                          "relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-md lg:text-lg font-bold transition-all duration-300 hover:text-blue-600 focus:outline-none group",
                          item.active ? "text-[#5B7AB7]" : "text-black"
                        )}
                      >
                        {item.title}
                        <span className={cn(
                          "absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                          item.active && "scale-x-100"
                        )} />
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Inline Search Icon */}
            <motion.button 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               className="p-2 text-[#5B7AB7] hover:bg-slate-50 transition-colors rounded-full ml-2"
            >
              <Search className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={2.5} />
              <span className="sr-only">Search</span>
            </motion.button>
          </div>

          {/* Action Icons - Mobile only now */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Search Box - Mobile */}
            <motion.div 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="h-12 w-12 border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer rounded-xl"
            >
              <Search className="h-6 w-6 text-[#5B7AB7]" strokeWidth={2.5} />
              <span className="sr-only">Search</span>
            </motion.div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    className="h-14 w-14 flex items-center justify-center bg-slate-100 rounded-xl"
                  >
                    <Menu className="h-8 w-8 text-black" />
                  </motion.button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] border-none p-0">
                  <div className="flex flex-col h-full bg-white p-8">
                     <div className="mb-12">
                        <Image src="/drivvize_logo.avif" alt="Logo" width={140} height={40} />
                     </div>
                     <nav className="flex flex-col gap-6">
                        {navItems.map((item) => (
                          <Link 
                            key={item.title} 
                            href={item.href}
                            className={cn(
                              "text-2xl font-black transition-colors",
                              item.active ? "text-[#5B7AB7]" : "text-black hover:text-blue-600"
                            )}
                          >
                            {item.title}
                          </Link>
                        ))}
                     </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

