import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/schema/JsonLd";
import { faqSchema } from "@/lib/schema";
import { routes } from "@/lib/routes";

export function FAQ({
  items,
  heading = "Frequently asked questions",
  description,
  eyebrow = "FAQs",
  withSchema = true,
  withCta = true,
}: {
  items: { q: string; a: string }[];
  heading?: string;
  description?: string;
  eyebrow?: string;
  withSchema?: boolean;
  withCta?: boolean;
}) {
  return (
    <Container>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={heading}
            description={description}
            className="mb-0"
          />
          {withCta ? (
            <div className="mt-8">
              <Button href={routes.contact} arrow>
                Ask us anything
              </Button>
            </div>
          ) : null}
        </div>
        <div>
          <Accordion items={items.map((i) => ({ q: i.q, a: i.a }))} />
        </div>
      </div>
      {withSchema ? <JsonLd schema={faqSchema(items)} /> : null}
    </Container>
  );
}
