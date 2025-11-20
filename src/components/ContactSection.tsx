import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f712e564-8ba0-497e-a28e-8a6d17f72202',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast('Message sent successfully! I\'ll get back to you soon.', {
          description: 'Thank you for reaching out.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      toast('Failed to send message', {
        description: 'Please try again later or contact me directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhayatrivedi2005@gmail.com',
      href: 'mailto:abhayatrivedi2005@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white mb-4">
                Let's work together
              </h3>
              <p className="text-slate-300 mb-8">
                I'm open to discussing fun projects or opportunities to build something together. Whether you have a question or just want to say hi, 
                I'll do my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href !== '#' ? "_blank" : undefined}
                  rel={info.href !== '#' ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg">
              <p className="text-slate-300 text-sm">
                💡 <strong className="text-white">Quick Response:</strong> I typically respond within 24 hours during weekdays.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-400"
        >
          <p>© 2025 Abhaya Trivedi. Built with React, Tailwind & Motion.</p>
        </motion.div>
      </div>
    </div>
  );
}
