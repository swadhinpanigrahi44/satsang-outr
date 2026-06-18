# Task 8: About / Contact / Dharma / EduCare Pages

## Project Context

SatsangOUTR — Vite + React 18 + TypeScript + Tailwind + shadcn/ui.
Four pages exist but are NOT registered in the router and use hardcoded hex + old fonts.
This task redesigns all four pages with the luxury spiritual design system and adds their routes.

Project root: `C:\Users\ASUS\Desktop\SatsangOUTR-main (1)\SatsangOUTR-main`

## Design System

- Background: `hsl(var(--background))` — deep indigo
- Surface: `hsl(var(--brand-secondary))` — elevated card
- Text: `hsl(var(--foreground))` — warm ivory
- Muted: `hsl(var(--muted-foreground))`
- Gold border: `border-[hsl(var(--brand-primary)/0.3)]`
- Heading: `font-heading` (Bodoni Moda SC 800)
- `text-gradient-saffron` for highlighted words
- `bg-saffron-gradient` for CTA buttons
- `GoldDivider`, `SectionHeading`, `AnimatedSection`, `SpiritualCard` from `@/components/shared/elements`

## Files to Rewrite

### 1. `src/pages/About.tsx`

Keep ALL existing content verbatim. Remove `bg-cream` background (replace with dark indigo theme for consistency). Use `SpiritualCard` for biography cards.

```tsx
// src/pages/About.tsx
// About Sree Sree Thakur Anukulchandra — preserves all original biography content
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, AnimatedSection, SpiritualCard } from '@/components/shared/elements';
import statueBlue from '@/assets/statue-blue.jpeg';

const biographyCards = [
  {
    title: 'Biography',
    body: 'Sree Sree Thakur Anukulchandra was born on 14th September 1888 in Himaitpur, a small village in the Pabna district of undivided Bengal (now in Bangladesh). From an early age, he displayed extraordinary spiritual awareness and a deep compassion for all beings. His life was a living example of the ideals he taught — devotion, discipline, and selfless service.',
  },
  {
    title: 'Spiritualism as Science',
    body: 'Sree Sree Thakur viewed spiritualism not as blind faith or superstition, but as a clear understanding of the laws that govern life, growth, and human potential. He taught that every individual can unlock their highest possibilities by aligning themselves with these natural and spiritual laws through devotion to the living Ideal.',
  },
  {
    title: 'Community & Service',
    body: 'He emphasized the importance of community living rooted in love, mutual respect, and shared responsibility. For him, true spiritual progress was inseparable from social responsibility — serving others, nurturing relationships, and contributing to the well-being of the collective.',
  },
  {
    title: 'Educator, Philosopher, Reformer',
    body: 'Beyond his spiritual role, Sree Sree Thakur was an educator who transformed the concept of learning, a philosopher who bridged ancient wisdom with modern thought, and a reformer who worked tirelessly for social justice, agricultural self-sufficiency, and the empowerment of every individual regardless of background.',
  },
];

const About = () => {
  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">

            {/* Page heading */}
            <SectionHeading
              title="About Sree Sree Thakur Anukulchandra"
              highlight="Anukulchandra"
              subtitle="A spiritual guide, reformer, and humanitarian whose teachings continue to inspire millions towards purposeful living."
              centered
              className="mb-14"
            />

            {/* Two-column layout: image + cards */}
            <div className="grid md:grid-cols-5 gap-10 items-start">

              {/* Statue image */}
              <div className="md:col-span-2">
                <div className="rounded-xl overflow-hidden shadow-xl shadow-black/40 ring-1 ring-[hsl(var(--brand-primary)/0.3)]">
                  <img
                    src={statueBlue}
                    alt="Sree Sree Thakur Anukulchandra"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Biography cards */}
              <div className="md:col-span-3 space-y-4">
                {biographyCards.map((card, i) => (
                  <AnimatedSection key={card.title} delay={i * 0.1}>
                    <SpiritualCard title={card.title} variant="dark">
                      <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                        {card.body}
                      </p>
                    </SpiritualCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>

          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
```

### 2. `src/pages/Contact.tsx`

Keep all content. Replace `bg-cream` + broken form with dark theme + react-hook-form with zod validation. `react-hook-form` and `zod` are already in package.json.

```tsx
// src/pages/Contact.tsx
// Contact page — form uses react-hook-form + zod validation
// Contact info: satsangoutr@gmail.com / Instagram: @satsang_outr
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Instagram } from 'lucide-react';
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
  'w-full px-4 py-3 rounded-lg bg-[hsl(var(--brand-secondary-light))] border border-[hsl(var(--border))] text-foreground placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-primary))] focus:border-transparent transition-all text-sm';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    // Opens mail client with pre-filled content
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
              <SpiritualCard variant="dark" className="border-l-0 rounded-xl">
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

          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
```

### 3. `src/pages/Dharma.tsx`

Keep all 8 dharma points verbatim. Import from the data file created in Task 2. Replace `bg-cream` with dark theme. Use `SpiritualCard`.

```tsx
// src/pages/Dharma.tsx
// The Light of Dharma — content read from src/features/dharma/data/dharma.data.ts
// Add or edit dharma points in that file, not here
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, AnimatedSection, SpiritualCard } from '@/components/shared/elements';
import { dharmaPoints } from '@/features/dharma/data/dharma.data';

const Dharma = () => {
  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center mb-16">
            <SectionHeading
              title="The Light of Dharma"
              highlight="Dharma"
              subtitle="Dharma is the eternal principle that sustains, nurtures, and elevates life towards its highest potential."
              centered
            />
          </AnimatedSection>

          <GoldDivider className="mb-12" />

          {/* Dharma points grid — edit src/features/dharma/data/dharma.data.ts to add/change */}
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
            {dharmaPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.07}>
                <SpiritualCard variant="dark" hoverable>
                  <div className="text-3xl mb-3">{point.icon}</div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-foreground">{point.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{point.desc}</p>
                </SpiritualCard>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Dharma;
```

### 4. `src/pages/EduCare.tsx`

Keep all 7 qualities verbatim. Import from the data file. Replace `bg-cream` + `bg-saffron-light` (was blue!) with dark theme.

```tsx
// src/pages/EduCare.tsx
// Edu-Care — Education with Purpose
// Qualities data from src/features/educare/data/educare.data.ts
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, AnimatedSection, SpiritualCard } from '@/components/shared/elements';
import { qualities } from '@/features/educare/data/educare.data';

const purposeText = `Education, in its truest sense, should create individuals who are not only knowledgeable but also compassionate, resilient, and resourceful. It should empower people to face adversity with courage, to serve their communities with dedication, and to live with integrity and purpose. When education nurtures both the mind and the heart, it becomes the most powerful force for positive transformation in the world.`;

const EduCare = () => {
  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center mb-16">
            <SectionHeading
              title="Edu-Care — Education with Purpose"
              highlight="Education"
              subtitle="True education is not merely the accumulation of facts. It is the cultivation of qualities that make a person strong, resourceful, and kind-hearted."
              centered
            />
          </AnimatedSection>

          <GoldDivider className="mb-12" />

          {/* Qualities grid — edit src/features/educare/data/educare.data.ts to add/change */}
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {qualities.map((q, i) => (
              <AnimatedSection key={q.title} delay={i * 0.07}>
                <SpiritualCard variant="dark" hoverable className="text-center">
                  <div className="text-4xl mb-4">{q.icon}</div>
                  <h3 className="font-heading text-lg font-bold mb-2 text-foreground">{q.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{q.desc}</p>
                </SpiritualCard>
              </AnimatedSection>
            ))}
          </div>

          <GoldDivider className="mb-12" />

          {/* Purpose block */}
          <AnimatedSection delay={0.1} className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl border border-[hsl(var(--brand-primary)/0.25)] bg-[hsl(var(--brand-secondary)/0.4)] text-center">
              <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">The Purpose of Education</h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm">{purposeText}</p>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </Layout>
  );
};

export default EduCare;
```

## Update `src/App.tsx` — Add 4 Missing Routes

```tsx
import About from './pages/About';
import Contact from './pages/Contact';
import Dharma from './pages/Dharma';
import EduCare from './pages/EduCare';

// Inside <Routes>:
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/dharma" element={<Dharma />} />
<Route path="/edu-care" element={<EduCare />} />
```

Keep all existing routes intact (`/`, `/events`, `/events/reports`, `*`).

## Important Notes

- Content in ALL four pages must be preserved VERBATIM — only styling changes
- `dharmaPoints` import path: `@/features/dharma/data/dharma.data`
- `qualities` import path: `@/features/educare/data/educare.data`
- `SpiritualCard` from `@/components/shared/elements` (barrel export)
- The `title` prop on `SpiritualCard` renders a `font-heading` h3 — do NOT add a separate h3 when using `title` prop
- For `Dharma.tsx` and `EduCare.tsx`, when using `SpiritualCard` with the `title` prop, put the icon BEFORE the card (as a `icon` prop or before the component) — actually, looking at `SpiritualCard` interface: it accepts `icon?: React.ReactNode`. Pass the emoji as the `icon` prop OR render it as a child before the title. Since `SpiritualCard` renders `icon` then `title` then `children`, pass it as prop.

Wait — `SpiritualCard`'s `icon` prop is `React.ReactNode`. An emoji string is a valid React node. BUT TypeScript may or may not accept a string as `React.ReactNode` — to be safe, wrap the emoji in a `<span>`: `icon={<span>{point.icon}</span>}`.

- Run `npx tsc --noEmit` before committing

## Deliverables Checklist

- [ ] `src/pages/About.tsx` rewritten — dark theme, SpiritualCard, all bio content preserved
- [ ] `src/pages/Contact.tsx` rewritten — react-hook-form + zod, dark theme, form functional
- [ ] `src/pages/Dharma.tsx` rewritten — reads from dharma.data.ts, SpiritualCard, dark theme
- [ ] `src/pages/EduCare.tsx` rewritten — reads from educare.data.ts, SpiritualCard, dark theme
- [ ] `src/App.tsx` — 4 new routes added, existing routes preserved
- [ ] All existing text content preserved verbatim
- [ ] No hardcoded hex colors
- [ ] TypeScript clean
- [ ] Committed

## Report File

`docs/superpowers/briefs/task-8-report.md`

Return: status, commit hash, one-line summary, concerns.
