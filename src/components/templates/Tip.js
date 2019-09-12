import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const TipTitle = styled.h2`
    text-align: center;
`;

const TipWrapper = styled.div`
    padding: 20px;
`;

const TipNext = styled(Link)`
    float: right;
`;

const TipPrev = styled(Link)`
    float: left;
`;

export default function Tip({ data, pageContext }) {
    return (
        <Layout>
            <Helmet title={data.mdx.frontmatter.title}></Helmet>
            <TipWrapper>
                <TipTitle>{data.mdx.frontmatter.title}</TipTitle>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
                <div>
                    {pageContext.prev && (
                        <TipPrev to={`/tip/${pageContext.prev}`}>← {pageContext.prev}</TipPrev>
                    )}

                    {pageContext.next && (
                        <TipNext to={`/tip/${pageContext.next}`}>{pageContext.next} →</TipNext>
                    )}
                </div>
            </TipWrapper>
        </Layout>
    );
}

export const query = graphql`
    query($id: String!) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                slug
                title
            }
        }
    }
`;