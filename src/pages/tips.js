import React from 'react';
import Layout from '../components/Layout';
import TipStyles from '../components/styles/tip.module.scss';
import { graphql, Link } from 'gatsby';

export default function TipsPage({ data }) {
    const tips = data.allMdx.nodes;
    return (
      <Layout>
        <h2>Tips!</h2>
        <ul>
          {tips.map(tip => (
            <li key={tip.id}>
              <Link to={`/tip/${tip.frontmatter.slug}`}>
                {tip.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;