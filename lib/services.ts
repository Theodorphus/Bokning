import { unstable_cache } from "next/cache";
import { getClient } from "./apollo-client";
import {
  GET_ALL_SERVICES,
  GET_ALL_SERVICE_SLUGS,
  GET_SERVICE_BY_SLUG,
} from "./queries";

export type ServiceImage = {
  sourceUrl: string;
};

export type ServiceFields = {
  shortDescription: string | null;
  price: string | null;
  image: ServiceImage | null;
};

export type Service = {
  title: string;
  slug: string;
  serviceFields: ServiceFields;
};

export const getAllServices = unstable_cache(
  async (): Promise<Service[]> => {
    try {
      const client = getClient();
      const { data } = await client.query<{
        services: { nodes: Service[] };
      }>({ query: GET_ALL_SERVICES });
      return data.services.nodes;
    } catch (err) {
      console.error("getAllServices failed:", err);
      return [];
    }
  },
  ["all-services"],
  { tags: ["services"], revalidate: 3600 }
);

export const getAllServiceSlugs = unstable_cache(
  async (): Promise<string[]> => {
    try {
      const client = getClient();
      const { data } = await client.query<{
        services: { nodes: { slug: string }[] };
      }>({ query: GET_ALL_SERVICE_SLUGS });
      return data.services.nodes.map((n) => n.slug);
    } catch (err) {
      console.error("getAllServiceSlugs failed:", err);
      return [];
    }
  },
  ["all-service-slugs"],
  { tags: ["services"], revalidate: 3600 }
);

export const getServiceBySlug = unstable_cache(
  async (slug: string): Promise<Service | null> => {
    try {
      const client = getClient();
      const { data } = await client.query<{ service: Service | null }>({
        query: GET_SERVICE_BY_SLUG,
        variables: { slug },
      });
      return data.service ?? null;
    } catch (err) {
      console.error(`getServiceBySlug(${slug}) failed:`, err);
      return null;
    }
  },
  ["service-by-slug"],
  { tags: ["services"], revalidate: 3600 }
);
