// src/pages/Contact.tsx
// Contact page — form + Connect With Us section
// Contact info and social links: src/data/social-links.ts
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Instagram, MessageCircle, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, AnimatedSection, SpiritualCard } from '@/components/shared/elements';
import { socialLinks } from '@/data/social-links';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-[hsl(var(--brand-secondary)/0.5)] border border-[hsl(var(--border))] text-foreground placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-primary))] focus:border-transparent transition-all text-sm';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    const mailto = `mailto:${socialLinks.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
    window.location.href = mailto;
    reset();
  };

  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto">

            <SectionHeading
              title="Get in Touch"
              highlight="Touch"
              subtitle="We welcome you to connect with Satsang OUTR. Reach out for inquiries, events, or to learn more about the teachings."
              centered
              className="mb-14"
            />

            {/* Contact info cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {[
                { icon: <MapPin size={24} />, title: 'Visit Us', text: 'Satsang OUTR, OUTR Campus, Bhubaneswar, Odisha' },
                { icon: <Mail size={24} />, title: 'Email Us', text: socialLinks.email },
                { icon: <Instagram size={24} />, title: 'Instagram', text: '@satsang_outr' },
              ].map((item) => (
                <SpiritualCard key={item.title} variant="dark" className="text-center">
                  <div className="flex justify-center mb-3 text-[hsl(var(--brand-primary))]">{item.icon}</div>
                  <h3 className="font-heading text-base font-bold mb-1 text-foreground">{item.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-xs">{item.text}</p>
                </SpiritualCard>
              ))}
            </div>

            <GoldDivider className="mb-12" />

            {/* Contact form */}
            <AnimatedSection delay={0.1}>
              <SpiritualCard variant="dark" className="rounded-xl">
                <h2 className="font-heading text-2xl font-bold mb-6 text-foreground">Send a Message</h2>
                {isSubmitSuccessful ? (
                  <div className="py-8 text-center">
                    <p className="text-[hsl(var(--brand-primary))] font-heading text-xl font-bold mb-2">Message Sent!</p>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm">Your email client should have opened. We will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input {...register('name')} type="text" placeholder="Your Name" className={inputClass} aria-label="Your name" />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <input {...register('email')} type="email" placeholder="Your Email" className={inputClass} aria-label="Your email" />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div>
                      <input {...register('subject')} type="text" placeholder="Subject" className={inputClass} aria-label="Subject" />
                      {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                    <div>
                      <textarea {...register('message')} placeholder="Your Message" rows={5} className={`${inputClass} resize-none`} aria-label="Your message" />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-lg bg-saffron-gradient text-[hsl(var(--brand-secondary-dark))] font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </SpiritualCard>
            </AnimatedSection>

            <GoldDivider className="my-12" />

            {/* ── Connect With Us ── */}
            <AnimatedSection delay={0.15}>
              <SpiritualCard variant="dark" className="rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <Users size={32} className="text-[hsl(var(--brand-primary))]" />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-2 text-foreground">Connect With Us</h2>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mb-8 max-w-md mx-auto">
                  New to our Satsangee Parivar? You're welcome here.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <a
                    href={socialLinks.whatsappNewJoiners}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-5 rounded-xl border border-[hsl(var(--brand-primary)/0.2)] bg-[hsl(var(--brand-secondary)/0.4)] hover:border-[hsl(var(--brand-primary)/0.5)] transition-all"
                  >
                    <MessageCircle size={24} className="text-[hsl(var(--whatsapp-green))]" />
                    <div>
                      <p className="font-heading text-sm font-bold text-foreground">WhatsApp Group</p>
                      <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1">Join our community group</p>
                    </div>
                  </a>

                  <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-[hsl(var(--brand-primary)/0.2)] bg-[hsl(var(--brand-secondary)/0.4)]">
                    <Mail size={24} className="text-[hsl(var(--brand-primary))]" />
                    <div>
                      <p className="font-heading text-sm font-bold text-foreground">For New Joiners</p>
                      <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1">
                        Contact — {socialLinks.newJoinerContact}
                      </p>
                    </div>
                  </div>
                </div>
              </SpiritualCard>
            </AnimatedSection>

          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
