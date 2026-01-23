"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Phone, Mail, Linkedin, ArrowRight, CheckCircle2, Globe2, Users2, Briefcase, Award } from "lucide-react"
import Image from "next/image"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const stagger = {
  transition: { staggerChildren: 0.1 }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#1A1A1A]">
      {/* Hero Section - The "Editorial" Look */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <span className="inline-block text-[#5B7AB7] font-bold tracking-[0.2em] text-xs uppercase mb-6">
                  Established 2024 — ISO 26262 Experts
                </span>
                <h1 className="text-5xl md:text-8xl font-serif italic leading-[1.1] mb-8 text-[#2C3E50]">
                  The Future of <span className="font-sans font-black not-italic tracking-tighter uppercase text-[#5B7AB7]">Safety</span> is Here
                </h1>
                <p className="text-lg md:text-xl text-[#4A4A4A] mb-10 leading-relaxed max-w-lg font-medium">
                  Discover the safest self-driving experience with Drivvize. We elevate functional safety to an art form.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-none px-10 h-14 font-bold tracking-widest uppercase text-xs transition-all duration-300">
                    Explore Services
                  </Button>
                  <Button variant="outline" size="lg" className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white rounded-none px-10 h-14 font-bold tracking-widest uppercase text-xs transition-all duration-300">
                    Our Story
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-3/4 w-full max-w-md mx-auto"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop"
                  alt="High-end automotive interior"
                  fill
                  className="object-cover grayscale-[0.2] transition-all duration-700 hover:scale-105"
                  priority
                />
                {/* Asymmetric decorative element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#5B7AB7]/10 -z-10" />
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden lg:block">
                  <span className="rotate-90 block text-[0.6rem] tracking-[0.5em] font-bold text-[#AFAFAF] uppercase whitespace-nowrap">
                    DRIVE • VISION • REALIZE
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Subtle background text */}
        <div className="absolute bottom-10 right-10 text-[12vw] font-black text-black/5 pointer-events-none select-none -z-10 tracking-tighter">
          2026
        </div>
      </section>

      {/* Narrative Section - "About but Editorial" */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-24">
              <h2 className="text-sm font-bold tracking-[0.3em] text-[#5B7AB7] uppercase mb-8">What We Do</h2>
              <p className="text-2xl md:text-4xl font-serif text-[#1A1A1A] leading-relaxed">
                "We are an Automotive Functional Safety Consultancy who provide high-quality services to meet the <span className="italic text-[#5B7AB7]">ISO 26262</span> needs of your organization. We use a holistic view to develop products that are not just safe, but revolutionary."
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeIn} className="order-2 md:order-1 px-4">
                <h3 className="text-4xl font-serif italic mb-6">Our Vision</h3>
                <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
                  At Drivvize, we believe the future of mobility lies in the seamless integration 
                  of cutting-edge technology with the highest levels of safety and security.
                </p>
                <div className="space-y-6">
                  {[
                    "Uncompromising safety standards",
                    "Future-ready mobility solutions",
                    "Strategic client partnerships"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5B7AB7] group-hover:scale-150 transition-transform" />
                      <span className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div {...fadeIn} className="order-1 md:order-2">
                <div className="relative aspect-square bg-[#FAF9F6]">
                  <Image 
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop"
                    alt="Detail view"
                    fill
                    className="object-cover grayscale-[0.4]"
                  />
                  <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#5B7AB7]/30" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services as a "Collection" */}
      <section className="py-32 bg-[#FAF9F6] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">Curated <span className="italic">Excellence</span></h2>
              <p className="text-[#4A4A4A] text-lg">Our boutique approach ensures that every project receives the specialized attention it deserves.</p>
            </div>
            <Link href="/services" className="text-sm font-bold tracking-widest uppercase border-b-2 border-[#1A1A1A] pb-1 hover:text-[#5B7AB7] hover:border-[#5B7AB7] transition-all">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Briefcase,
                title: "Concept to Reality",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
                text: "Hands-on experience in delivering Functional Safety Products from Concept to Manufacturing."
              },
              {
                icon: Award,
                title: "Global Expertise",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
                text: "Experience with European, US and Asian OEMs, navigating practical implementation challenges."
              },
              {
                icon: CheckCircle2,
                title: "Specialized Knowledge",
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
                text: "Leveraging deep understanding of the latest technologies in automotive safety and cybersecurity."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/5 mb-8 overflow-hidden">
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all" />
                </div>
                <h3 className="text-2xl font-serif mb-3 italic">{feature.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-6 font-medium line-clamp-2">{feature.text}</p>
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
                  <span>Learn More</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Elegant & Large */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "5+", label: "Consultants" },
              { val: "40+", label: "Years Exp" },
              { val: "40+", label: "Projects" },
              { val: "7+", label: "Countries" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-6xl md:text-8xl font-serif text-[#1A1A1A]">{stat.val}</span>
                <span className="text-[0.6rem] uppercase font-bold text-[#AFAFAF] tracking-[0.3em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Consulting Section */}
      <section className="py-40 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-7xl font-serif italic mb-12 leading-tight">Expertise that <br/> speaks for <span className="not-italic text-[#5B7AB7]">itself</span></h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8 font-medium">
                When we say functional safety consulting and training, we mean cutting-edge, hands-on training and practical solutions designed just for your product. 
              </p>
              <div className="space-y-12">
                <div className="p-8 border-l border-white/10 hover:border-[#5B7AB7] transition-all bg-white/5">
                  <h4 className="text-xl font-serif mb-4 italic">Real-World Mastery</h4>
                  <p className="text-white/50 text-sm leading-relaxed font-medium">
                    In Drivvize, you get more than just theory. 
                    We show you how to use each topic in the real world so your team can confidently deal with problems.
                  </p>
                </div>
                <Button size="lg" className="bg-[#5B7AB7] hover:bg-[#4A69A6] text-white rounded-none px-12 h-16 font-bold tracking-widest uppercase text-xs">
                  Discover the difference
                </Button>
              </div>
            </motion.div>
            
            <div className="relative aspect-square">
              <Image 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000&auto=format&fit=crop"
                alt="Expertise"
                fill
                className="object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 border-20 border-[#1A1A1A]/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <span className="text-4xl font-serif italic text-[#5B7AB7] mb-8 block font-black">"</span>
            <p className="text-3xl md:text-5xl font-serif leading-tight text-[#1A1A1A] mb-12 italic">
              Are you ready to raise the level of skill of your team? We should all work together to make cars safer and better!
            </p>
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-[#AFAFAF]">Drivvize Founders</span>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-[#FAF9F6]" id="contact">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-12">Get in <span className="italic">Touch</span></h2>
              <div className="space-y-12">
                {[
                  { label: "Call Us", val: "+91 96770 19689", icon: Phone },
                  { label: "Email Us", val: "consult@drivvize.com", icon: Mail },
                  { label: "LinkedIn", val: "Drivvize", icon: Linkedin }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <item.icon className="h-5 w-5 text-[#5B7AB7] mt-1" />
                    <div>
                      <p className="text-[0.6rem] uppercase font-bold text-[#AFAFAF] tracking-[0.3em] mb-2">{item.label}</p>
                      <p className="text-xl font-medium text-[#1A1A1A]">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-12 shadow-2xl shadow-black/5">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 border-b border-[#CCC] pb-2">
                    <Label htmlFor="first-name" className="text-[0.6rem] uppercase font-bold tracking-widest text-[#AFAFAF]">First Name</Label>
                    <input id="first-name" placeholder="John" className="w-full bg-transparent focus:outline-none py-2 text-[#1A1A1A] font-medium" />
                  </div>
                  <div className="space-y-2 border-b border-[#CCC] pb-2">
                    <Label htmlFor="last-name" className="text-[0.6rem] uppercase font-bold tracking-widest text-[#AFAFAF]">Last Name</Label>
                    <input id="last-name" placeholder="Doe" className="w-full bg-transparent focus:outline-none py-2 text-[#1A1A1A] font-medium" />
                  </div>
                </div>
                <div className="space-y-2 border-b border-[#CCC] pb-2">
                  <Label htmlFor="email" className="text-[0.6rem] uppercase font-bold tracking-widest text-[#AFAFAF]">Email Address</Label>
                  <input id="email" type="email" placeholder="john@example.com" className="w-full bg-transparent focus:outline-none py-2 text-[#1A1A1A] font-medium" required />
                </div>
                <div className="space-y-2 border-b border-[#CCC] pb-2">
                  <Label htmlFor="message" className="text-[0.6rem] uppercase font-bold tracking-widest text-[#AFAFAF]">Message</Label>
                  <textarea id="message" placeholder="How can we help you?" className="w-full bg-transparent focus:outline-none py-2 text-[#1A1A1A] font-medium min-h-25 resize-none" />
                </div>
                <Button className="w-full h-14 bg-[#1A1A1A] hover:bg-[#333] text-white rounded-none font-bold tracking-widest uppercase text-xs transition-all">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-white py-20 border-t border-[#EEE]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <Image 
              src="/drivvize_logo.avif" 
              alt="Drivvize" 
              width={140} 
              height={40} 
              className="object-contain grayscale"
            />
            <div className="flex gap-12">
              {["About", "Services", "Careers", "Contact"].map((item) => (
                <Link key={item} href="#" className="text-xs font-bold tracking-widest text-[#AFAFAF] hover:text-[#1A1A1A] uppercase transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[0.6rem] font-bold text-[#CCC] tracking-[0.2em] uppercase">
            <p>© {new Date().getFullYear()} DRIVVIZE. ALL RIGHTS RESERVED.</p>
            <p>Designed for excellence • Built for Safety</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
