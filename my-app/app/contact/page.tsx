"use client";

import RootLayout from "@/components/layouts/RootLayout";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <RootLayout>
      <Toaster richColors />
      {/* Hero Section */}
      <section className="bg-[#112250] text-[#F5F0E9] py-24 text-center relative overflow-hidden border-b border-[#E0C58F]/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E0C58F] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#3C507D] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-6" style={{fontFamily: 'Playfair Display, serif'}}>Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#E0C58F] font-medium" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            We’d love to hear from you! Whether you have questions about our services, need help choosing the right treatment, or want to schedule an appointment, we’re here to help.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#112250]" style={{fontFamily: 'Playfair Display, serif'}}>Contact Information</h2>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#E0C58F] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-[#112250] mb-1">Phone/Text</h3>
                <p className="text-[#3C507D] font-medium">(416) 577-6409</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#E0C58F] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-[#112250] mb-1">Email</h3>
                <p className="text-[#3C507D] font-medium">marcia@youthfulglowstudio.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#E0C58F] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-[#112250] mb-1">Location</h3>
                <p className="text-[#3C507D] font-medium">1425A Block Line Road<br />Kitchener, Ontario</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#E0C58F] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-[#112250] mb-1">Response Time</h3>
                <p className="text-[#3C507D] font-medium">
                  Expect a friendly response within 24–48 hours. If you reach out during business hours, we’ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-[#E0C58F]/10">
            <p className="text-[#3C507D] mb-6 font-medium">
              Use the form below to send us a message. We'll follow up with all the information you need to get glowing!
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-[#112250] mb-2 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#D9CBC2] focus:outline-none focus:ring-2 focus:ring-[#112250] bg-[#F5F0E9]/30 text-[#112250] font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#112250] mb-2 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#D9CBC2] focus:outline-none focus:ring-2 focus:ring-[#112250] bg-[#F5F0E9]/30 text-[#112250] font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#112250] mb-2 uppercase tracking-wide">Phone (Optional)</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(416) 577-6409" 
                  className="w-full px-4 py-3 rounded-lg border border-[#D9CBC2] focus:outline-none focus:ring-2 focus:ring-[#112250] bg-[#F5F0E9]/30 text-[#112250] font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#112250] mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..." 
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#D9CBC2] focus:outline-none focus:ring-2 focus:ring-[#112250] bg-[#F5F0E9]/30 text-[#112250] font-medium"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#112250] hover:bg-[#3C507D] text-[#F5F0E9] font-bold py-4 rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 border border-[#E0C58F]/30"
              >
                <Send className="w-5 h-5 text-[#E0C58F]" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#112250] py-20 text-center border-t border-[#E0C58F]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <div className="absolute top-0 left-0 w-64 h-64 bg-[#E0C58F] rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-[#E0C58F]" style={{fontFamily: 'Playfair Display, serif'}}>Prefer to book directly?</h2>
          <p className="text-[#F5F0E9]/80 mb-8 font-medium">Visit our services page to schedule your appointment.</p>
          <Link
            href="/services"
            className="bg-[#E0C58F] text-[#112250] px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all inline-block hover:scale-105 transform"
          >
            Book Now
          </Link>
        </div>
      </section>
    </RootLayout>
    </>
  );
}
