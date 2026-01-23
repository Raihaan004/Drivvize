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
import { Button } from "@/components/ui/button"

const navItems = [
  { title: "Home", href: "/", active: true },
  { title: "About us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "FAQs", href: "/faqs" },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
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
          ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-[#EEE]" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
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
                  width={140} 
                  height={45} 
                  className={cn(
                    "object-contain transition-all duration-500",
                    isScrolled ? "h-8 w-auto" : "h-10 w-auto"
                  )}
                  priority
                />
              </motion.div>
            </Link>
          </div>
          
          {/* Main Content Area: Menu */}
          <div className="hidden md:flex items-center gap-12 ml-auto">
            <NavigationMenu className="max-w-none">
              <NavigationMenuList className="gap-8">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink 
                        className={cn(
                          "relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-0 py-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-[#5B7AB7] focus:outline-none group",
                          item.active ? "text-[#5B7AB7]" : "text-[#1A1A1A]"
                        )}
                      >
                        {item.title}
                        <span className={cn(
                          "absolute bottom-2 left-0 right-0 h-px bg-[#5B7AB7] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                          item.active && "scale-x-100"
                        )} />
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <button className="p-2 text-[#1A1A1A] hover:text-[#5B7AB7] transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <Button className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-none h-10 px-6 text-[0.6rem] font-bold tracking-widest uppercase transition-all">
                Inquiry
              </Button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button className="p-2">
              <Search className="h-5 w-5 text-[#1A1A1A]" />
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2">
                  <Menu className="h-6 w-6 text-[#1A1A1A]" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-87.5 border-none p-0 bg-white">
                <div className="flex flex-col h-full p-8">
                   <div className="mb-16">
                      <Image src="/drivvize_logo.avif" alt="Logo" width={120} height={35} className="object-contain" />
                   </div>
                   <nav className="flex flex-col gap-8">
                      {navItems.map((item) => (
                        <Link 
                          key={item.title} 
                          href={item.href}
                          className={cn(
                            "text-3xl font-serif italic transition-colors",
                            item.active ? "text-[#5B7AB7]" : "text-[#1A1A1A]"
                          )}
                        >
                          {item.title}
                        </Link>
                      ))}
                   </nav>
                   <div className="mt-auto py-8">
                      <Button className="w-full bg-[#1A1A1A] text-white rounded-none h-14 font-bold tracking-widest uppercase text-xs">
                        Start your journey
                      </Button>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

