import { gql } from '@apollo/client';

export const GET_CURRENCIES = gql`
  query currency {
    currency
  }
`;

export const GET_PRODUCTS = gql`
  query products($currency: Currency) {
    products {
      id
      price(currency: $currency)
      title
      image_url
    }
  }
`;
