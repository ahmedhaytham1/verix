import type { Dictionary } from '@/data/content';

export function Metrics({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-line/15 bg-surface/40 py-10">
      <div className="container-luxury grid gap-4 md:grid-cols-4">
        {dict.home.metrics.map((metric) => (
          <article key={metric.label} className="counter-card rounded-[1.8rem] border border-line/15 bg-text/5 p-6">
            <p className="text-5xl font-semibold text-gold">
              <span data-count={metric.value}>{metric.value}</span>{metric.suffix}
            </p>
            <p className="mt-4 leading-7 text-muted/80">{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
