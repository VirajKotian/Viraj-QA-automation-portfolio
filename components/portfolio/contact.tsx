"use client"

import React, { useState, FormEvent } from "react"
import { Mail, MapPin, Linkedin, Github, Send, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type FormState = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    console.log("Form submitted with data:", formData)
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all fields.")
      setFormState("error")
      console.log("Validation failed: missing fields")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.")
      setFormState("error")
      console.log("Validation failed: invalid email")
      return
    }

    setFormState("submitting")
    setErrorMessage("")
    console.log("Sending form data to API...")

    try {
      console.log("Fetching /api/contact with:", JSON.stringify(formData))
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      console.log("API response status:", response.status)
      
      const result = await response.json()
      console.log("API response:", result)

      if (result.success) {
        setFormState("success")
        setFormData({ name: "", email: "", message: "" })
        console.log("Form submitted successfully!")
        setTimeout(() => setFormState("idle"), 5000)
      } else {
        setErrorMessage(result.message || "Something went wrong.")
        setFormState("error")
        console.log("Form submission failed:", result.message)
      }
    } catch (error) {
      console.error("Network error during form submission:", error)
      setErrorMessage("Network error. Please try again later.")
      setFormState("error")
    }
  }

  return (
    <section id="contact" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 section-title">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4 animate-pulse-glow" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hi, I'm Viraj Kotian. I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about QA and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="glass-warm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center icon-glow">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Contact Information
                </h3>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:virajkotian01@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">
                      virajkotian01@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-foreground">Mumbai, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.linkedin.com/in/viraj-kotian-0310b0247" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-warm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://github.com/VirajKotian" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-warm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-warm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center icon-glow">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Send a Message
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                  disabled={formState === "submitting"}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  disabled={formState === "submitting"}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                  disabled={formState === "submitting"}
                  required
                />
              </div>

              {/* Status Messages */}
              {formState === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {formState === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full glow-btn"
                disabled={formState === "submitting"}
              >
                {formState === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}