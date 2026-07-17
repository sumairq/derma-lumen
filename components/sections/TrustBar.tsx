import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { clinic } from "@/content/clinic";

export function TrustBar() {
  return (
    <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-surface)] py-10">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {clinic.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center sm:text-left">
              <div className="font-display text-4xl font-medium leading-none tracking-tight text-[color:var(--color-ink)] sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="ul"
          delay={200}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-[color:var(--color-line)] pt-7 sm:justify-between sm:gap-x-6"
        >
          {clinic.credentials.map((c, i) => (
            <li
              key={c}
              className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--color-ink-2)] sm:gap-6"
            >
              {i > 0 ? (
                <span
                  aria-hidden
                  className="size-1 rounded-full bg-[color:var(--color-gold)]"
                />
              ) : null}
              {c}
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
