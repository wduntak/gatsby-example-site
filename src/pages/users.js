import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

export default function UsersPage({ data }) {
    const users = data.allUser.nodes;
    return (
      <Layout>
        <h2>Users</h2>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                <Link to={`/user/${user.username}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
      </Layout>
    );
}

export const query = graphql`
    {
        allUser {
            nodes {
                name
                id
                username
            }
        }
  }
`;