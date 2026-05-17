import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              404
            </p>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl">
              We couldn&apos;t find that page.
            </h1>
            <p className="mt-5 text-lg text-[color:var(--color-ink-2)]">
              The page you&apos;re looking for may have been moved or no longer exists. Here are some helpful places to go next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={routes.home} arrow>
                Back to home
              </Button>
              <Button href={routes.services} variant="secondary">
                Browse services
              </Button>
              <Link
                href={routes.contact}
                className="inline-flex h-11 items-center text-sm font-medium text-[color:var(--color-ink-2)] hover:text-[color:var(--color-accent)]"
              >
                Contact us →
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
