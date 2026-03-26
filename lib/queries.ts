import { gql } from "@apollo/client";

export const GET_ALL_SERVICES = gql`
  query GetAllServices {
    services {
      nodes {
        title
        slug
        serviceFields {
          shortDescription
          price
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_SERVICE_BY_SLUG = gql`
  query GetServiceBySlug($slug: ID!) {
    service(id: $slug, idType: SLUG) {
      title
      slug
      serviceFields {
        shortDescription
        price
        image {
          sourceUrl
        }
      }
    }
  }
`;

export const GET_ALL_SERVICE_SLUGS = gql`
  query GetAllServiceSlugs {
    services {
      nodes {
        slug
      }
    }
  }
`;
