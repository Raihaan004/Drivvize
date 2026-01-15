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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
         <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2600&auto=format&fit=crop"
              alt="Automotive technology"
              fill
              className="object-cover opacity-60 grayscale-[0.3] brightness-[0.5]"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 to-slate-950/80" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent" />
         </motion.div>
         
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-600/10 border border-blue-500/20"
            >
              <span className="text-blue-400 font-bold tracking-wider text-xs uppercase">ISO 26262 EXPERTS</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight"
            >
              THE FUTURE OF <span className="text-blue-500">SAFETY</span> IS HERE
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100/80 mb-8 font-medium max-w-2xl mx-auto"
            >
              Discover the safest self-driving experience with Drivvize
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              We are an Automotive Functional Safety Consultancy who provide very high-quality 
              services to meet the ISO 26262 needs of your organization. We have a holistic view 
              about safety and we use that to help Companies to develop very safe products.
            </motion.p>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Vision & Strategy Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-block p-3 rounded-2xl bg-slate-50 mb-6">
                <Globe2 className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">OUR VISION</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                At Drivvize, we believe the future of mobility lies in the seamless integration 
                of cutting-edge technology with the highest levels of safety and security.
              </p>
              <div className="space-y-4">
                {[
                  "Uncompromising safety standards",
                  "Future-ready mobility solutions",
                  "Strategic client partnerships"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-800 font-bold">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg text-slate-500 italic border-l-4 border-blue-600 pl-6 py-2">
                Our solutions are designed to enable our clients to achieve this vision and stay ahead of the curve.
              </p>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-100 rounded-[3rem] overflow-hidden group shadow-2xl shadow-blue-900/10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop"
                alt="Automotive Safety Vision"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-transparent z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">WHY CHOOSE US?</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Concept to Reality",
                text: "Hands-on experience in delivering Functional Safety Products from Concept to Manufacturing."
              },
              {
                icon: Award,
                title: "Global Expertise",
                text: "Experience with European, US and Asian OEMs, navigating practical implementation challenges."
              },
              {
                icon: CheckCircle2,
                title: "Specialized Knowledge",
                text: "Leveraging deep understanding of the latest technologies in automotive safety and cybersecurity."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeIn} className="mt-16 p-8 bg-blue-600 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xl font-bold leading-relaxed">
                Our team of Experts have a proven track record of delivering exceptional results to our clients.
              </p>
            </div>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full font-black px-8 h-14 shrink-0 transition-transform hover:scale-105">
              Work With Experts
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Drivvize In Numbers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div {...fadeIn}>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-8">DRIVVIZE IN NUMBERS</h2>
               <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                 {[
                   { val: "5+", label: "Experienced Consultants", icon: Users2 },
                   { val: "40+", label: "Years of Experience", icon: Award },
                   { val: "40+", label: "Projects Completed", icon: Briefcase },
                   { val: "7+", label: "Countries Served", icon: Globe2 }
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col gap-2">
                     <span className="text-4xl md:text-5xl font-black text-blue-600">{stat.val}</span>
                     <Separator className="w-12 h-1 bg-slate-200" />
                     <span className="text-sm uppercase font-bold text-slate-500 tracking-wider">{stat.label}</span>
                   </div>
                 ))}
               </div>
             </motion.div>
             <motion.div {...fadeIn} className="relative">
                <div className="aspect-4/5 rounded-[3rem] bg-slate-900 p-12 overflow-hidden relative group">
                   <Image 
                    src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=2000&auto=format&fit=crop"
                    alt="Autonomous Driving"
                    fill
                    className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  />
                   <div className="absolute inset-0 bg-linear-to-b from-blue-600/20 to-transparent" />
                   <div className="relative z-10 flex flex-col h-full justify-between">
                     <div className="text-white space-y-4">
                       <h3 className="text-3xl font-bold">Trusted by global automotive leaders.</h3>
                       <p className="text-blue-100/70">Our safety-first approach has helped dozens of organizations reach compliance and move safer products to market.</p>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 bg-white/5 rounded-2xl border border-white/10" />
                        <div className="h-20 bg-white/5 rounded-2xl border border-white/10" />
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Consulting & Training Detailed Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight">Advanced Functional Safety Consulting and Training</h2>
            <div className="w-20 h-2 bg-blue-600 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-blue-100/90 font-medium">You are in the right place.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
            <motion.div {...fadeIn} className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                When we say functional safety consulting and training in India, we mean cutting-edge, hands-on training and practical solutions designed just for your product. 
                Depending on whether you need top-notch software safety training or expert automotive functional safety consulting in India, we can help your team stay ahead in a field that is changing quickly.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                All of our trainings are made to meet the specific needs of people who work in the automotive industry, from engineers to project managers. 
                In today&apos;s rapidly changing automotive world, we make sure that your team - be it whether it has developers, test engineers, Architects or Project managers, 
                have the skills and confidence to deal with the complicated issues of practical safety.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 opacity-20">
                  <Image 
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000&auto=format&fit=crop"
                    alt="Engineering"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 relative z-10">
                   <h4 className="text-2xl font-bold mb-6 text-blue-400">Real-World Mastery</h4>
                   <p className="text-slate-300 leading-relaxed mb-6 font-medium">
                    In Drivvize, you get more than just theory. 
                    We show you how to use each topic in the real world so your team can confidently deal with problems that come up throughout the ISO 26262 standard lifecycle.
                   </p>
                   <ul className="space-y-3">
                     {["Hands-on practical solutions", "ISO 26262 standard expertise", "Engineered to your product needs"].map((li, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-blue-100">
                         <div className="w-2 h-2 rounded-full bg-blue-500" />
                         {li}
                       </li>
                     ))}
                   </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div {...fadeIn} className="text-center bg-white/5 p-12 rounded-[3.5rem] border border-white/10">
            <p className="text-2xl font-bold mb-10 max-w-3xl mx-auto italic leading-relaxed text-blue-100">
              &ldquo;Are you ready to raise the level of skill of your team? Get in touch with us right away to see the difference in our functional safety training and advice. We should all work together to make cars safer and better!&rdquo;
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-black px-12 h-16 text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/40">
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Contact us</h2>
              <p className="text-xl text-slate-600 mb-12 font-medium">Reach out for professional safety consulting and world-class automotive training.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-bold text-sm tracking-wider uppercase mb-1">Call Us</p>
                    <p className="text-xl font-black text-slate-900 tracking-tight">+91 96770 19689</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-bold text-sm tracking-wider uppercase mb-1">Email Us</p>
                    <p className="text-xl font-black text-slate-900 tracking-tight">consult@drivvize.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Linkedin className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-bold text-sm tracking-wider uppercase mb-1">Follow Us</p>
                    <Link href="#" className="text-xl font-black text-slate-900 tracking-tight hover:text-blue-600 transition-colors">LinkedIn Profile</Link>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} className="bg-slate-50 p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="font-bold text-slate-700">First Name</Label>
                    <Input id="first-name" placeholder="John" className="h-12 bg-white rounded-xl border-slate-200 focus:ring-blue-600 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="font-bold text-slate-700">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" className="h-12 bg-white rounded-xl border-slate-200 focus:ring-blue-600 transition-all font-medium" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold text-slate-700">Email *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-white rounded-xl border-slate-200 focus:ring-blue-600 transition-all font-medium" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-bold text-slate-700">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-37.5 bg-white rounded-xl border-slate-200 focus:ring-blue-600 transition-all font-medium" />
                </div>
                
                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-900/20">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <Image 
              src="/drivvize_logo.avif" 
              alt="Drivvize" 
              width={160} 
              height={50} 
              className="brightness-0 invert object-contain"
            />
            <div className="flex gap-8">
              <Link href="#" className="font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-xs">Privacy Policy</Link>
              <Link href="#" className="font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-xs">Terms of Service</Link>
              <Link href="#" className="font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-xs">Cookie Settings</Link>
            </div>
          </div>
          <Separator className="bg-white/5 mb-12" />
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 font-bold text-sm tracking-wide">
            <p>© {new Date().getFullYear()} DRIVVIZE. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
               <span>DESIGNED FOR SAFETY</span>
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
               <span>BUILT FOR EXCELLENCE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
