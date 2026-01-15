"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter"
          >
            DRIVE. <span className="text-blue-600">VISION.</span> REALIZE.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium"
          >
            Drivvize is your partner in automotive excellence, providing cutting-edge solutions for drivers and businesses alike.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="rounded-full px-10 py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105">
              Our Services
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-lg font-bold transition-all hover:scale-105 hover:bg-slate-50">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { id: '01', title: 'Expert Analytics', desc: 'Advanced monitoring systems to keep your fleet at peak performance.' },
              { id: '02', title: 'Vision Focused', desc: 'Clear insights and strategic planning for the future of transportation.' },
              { id: '03', title: 'Realized Goals', desc: 'Turning your automotive aspirations into reality with our expert team.' }
            ].map((feature, idx) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white font-black text-2xl rotate-3 hover:rotate-0 transition-transform">
                  {feature.id}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to transform your drive?</h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-12">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-slate-50">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Drivvize. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
