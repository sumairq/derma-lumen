import { Container } from "@/components/ui/Container";

const stats = [
  { value: "10+", label: "Years serving Austin" },
  { value: "12k+", label: "Patients cared for" },
  { value: "98%", label: "Patient satisfaction" },
  { value: "100%", label: "Board-certified MDs" },
];

export function TrustBar() {
  return (
    <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-surface)] py-10">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-display text-4xl font-medium leading-none tracking-tight text-[color:var(--color-ink)] sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
