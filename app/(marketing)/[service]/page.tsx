import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service/ServicePage";
import { allServiceSlugs, getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return allServiceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const data = getService(service);
  if (!data) return {};
  return buildMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: routes.service(data.slug),
    keywords: data.keywords,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const data = getService(service);
  if (!data) notFound();
  return <ServicePage service={data} />;
}
