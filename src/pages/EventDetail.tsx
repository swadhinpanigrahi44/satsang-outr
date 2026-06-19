import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, MapPin, ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, SaffronBadge, AnimatedSection } from '@/components/shared/elements';
import SessionRow from '@/features/events/components/SessionRow';
import { eventBySlug } from '@/features/events/data/event-registry';

const STATUS_BADGE: Record<string, { label: string; pulsing: boolean }> = {
  upcoming: { label: 'Upcoming', pulsing: false },
  ongoing: { label: 'Live Now', pulsing: true },
  completed: { label: 'Completed', pulsing: false },
  archived: { label: 'Archived', pulsing: false },
};

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? eventBySlug[slug] : undefined;

  if (!event) return <Navigate to="/events" replace />;

  const status = STATUS_BADGE[event.status];
  const showRegistration =
    event.registrationUrl && event.registrationStatus !== 'coming-soon' && event.status !== 'archived';

  return (
    <Layout>
      {/* ── Hero ── */}
      <section style={{ background: 'hsl(var(--background))' }} className="pt-10 pb-6">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <Link
              to="/events"
              className="inline-flex items-center gap-1 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--brand-primary))] transition-colors mb-6"
            >
              <ArrowLeft size={14} /> Back to Events
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <SaffronBadge pulsing={status.pulsing} variant="solid">{status.label}</SaffronBadge>
              {event.frequency && (
                <span className="text-[hsl(var(--muted-foreground))] text-sm">{event.frequency}</span>
              )}
              {event.registrationStatus === 'coming-soon' && (
                <SaffronBadge variant="outline">Registration Opening Soon</SaffronBadge>
              )}
            </div>

            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
              {event.title}
            </h1>
            <p className="text-[hsl(var(--muted-foreground))] text-lg leading-relaxed mb-6">
              {event.description}
            </p>

            {(event.nextDate || event.venue) && (
              <div className="flex flex-wrap gap-4 text-sm text-[hsl(var(--muted-foreground))]">
                {event.nextDate && (
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-[hsl(var(--brand-primary))]" />
                    <span>Next: {event.nextDate}</span>
                  </div>
                )}
                {event.venue && (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[hsl(var(--brand-primary))]" />
                    <span>{event.venue}</span>
                  </div>
                )}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Registration CTA ── */}
      {showRegistration && (
        <>
          <div className="container mx-auto px-4 max-w-4xl py-6">
            <AnimatedSection delay={0.05}>
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-4 rounded-xl bg-saffron-gradient text-[hsl(var(--brand-secondary-dark))] font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Join Now <ExternalLink size={16} className="inline ml-1" />
              </a>
            </AnimatedSection>
          </div>
        </>
      )}

      <GoldDivider />

      {/* ── Schedule ── */}
      {event.schedule && event.schedule.length > 0 && (
        <section style={{ background: 'hsl(var(--background))' }} className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <AnimatedSection>
              <SectionHeading title="Schedule" highlight="Schedule" className="mb-8" />
              <div className="space-y-6">
                {event.schedule.map((session, i) => (
                  <SessionRow key={i} session={session} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── Speakers ── */}
      {event.speakers && event.speakers.length > 0 && (
        <>
          <GoldDivider />
          <section style={{ background: 'hsl(var(--background))' }} className="py-16">
            <div className="max-w-4xl mx-auto px-4">
              <AnimatedSection>
                <SectionHeading title="Speakers & Facilitators" highlight="Speakers" className="mb-8" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {event.speakers.map((sp, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl border border-[hsl(var(--brand-primary)/0.15)] bg-[hsl(var(--brand-secondary)/0.4)]"
                    >
                      <p className="font-heading text-sm font-bold text-foreground">{sp.name}</p>
                      <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1">{sp.role}</p>
                      {sp.topic && (
                        <p className="text-[hsl(var(--muted-foreground)/0.8)] text-xs italic mt-2">
                          {sp.topic}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        </>
      )}

      {/* ── Gallery ── */}
      {event.gallery && event.gallery.length > 0 && (
        <>
          <GoldDivider />
          <section style={{ background: 'hsl(var(--background))' }} className="py-16">
            <div className="max-w-4xl mx-auto px-4">
              <AnimatedSection>
                <SectionHeading title="Event Gallery" highlight="Gallery" className="mb-8" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((img, i) => (
                    <div key={i} className="aspect-video overflow-hidden rounded-xl ring-1 ring-[hsl(var(--brand-primary)/0.2)]">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        </>
      )}

      {/* ── Reports ── */}
      {event.reports && event.reports.length > 0 && (
        <>
          <GoldDivider />
          <section style={{ background: 'hsl(var(--background))' }} className="py-16">
            <div className="max-w-4xl mx-auto px-4">
              <AnimatedSection>
                <SectionHeading title="Past Event Reports" highlight="Reports" className="mb-8" />
                <div className="space-y-3">
                  {event.reports.map((report, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl border border-[hsl(var(--brand-primary)/0.15)] bg-[hsl(var(--brand-secondary)/0.4)]"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-heading text-sm font-bold text-foreground">{report.title}</h4>
                          <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1">{report.date}</p>
                        </div>
                        {report.url && (
                          <a
                            href={report.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[hsl(var(--brand-primary))] text-sm font-semibold hover:opacity-80 transition-opacity"
                          >
                            View
                          </a>
                        )}
                      </div>
                      <p className="text-[hsl(var(--muted-foreground))] text-sm mt-2">{report.summary}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        </>
      )}

      {/* ── Bottom CTA ── */}
      <section style={{ background: 'hsl(var(--background))' }} className="pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] font-semibold hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
          >
            <ArrowLeft size={14} /> All Events
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;
