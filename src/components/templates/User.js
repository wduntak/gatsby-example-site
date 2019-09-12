import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../Layout';

import { Helmet } from 'react-helmet';

export default function User({ data }) {
    console.log(data.user.address);
    return (
        <Layout>
            <Helmet>
                <title>{data.user.name} Profile Page</title>
            </Helmet>
            <h2>{data.user.name}</h2>
            <p>Email: {data.user.email}</p>
            <p>Street Address: {data.user.address.street}</p>
        </Layout>
    );
}

export const query = graphql`
    query($id: String!) {
        user(id: { eq: $id }) {
            username
            name
            email
            address{
                street
            }
        }
    }
`;