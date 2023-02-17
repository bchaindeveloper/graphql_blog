import { request, gql } from 'graphql-request';

const graphqlAPI = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cldvx48xc1wps01rt1grvdqjy/master';

export const getPosts = async () => {
  const query = gql`
  query Assets {
    postsConnection {
      edges {
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          exerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
  
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
