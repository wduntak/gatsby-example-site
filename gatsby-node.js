const path = require('path');
const axios = require('axios');

async function sourceUsers({ actions, createNodeId, createContentDigest }) {
    // 1. fetch the users
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users');
    // 2. loop over each user
    users.forEach(user => {
        // 3. create an object node for each user
        const node = {
            ...user, //take everything from user,
            // Create custom data fields
            id: createNodeId(`user-${user.id}`),
            parent: null,
            children: [],
            internal: {
                type: `User`,
                mediaType: `application/json`,
                contentDigest: createContentDigest(user),
            }
        }
        // 4. register that with gatsby(Put that data in the GraphQL API!)
        actions.createNode(node);
    });
}

async function createUsersPages({ graphql, actions}) {
    const { data } = await graphql(`
        query {
            allUser {
                nodes {
                    id
                    username
                }
            }
        }
   `);

   const users = data.allUser.nodes;

   users.forEach((user) => {
        actions.createPage({
            path: `user/${user.username}`,
            component: path.resolve(`./src/components/templates/User.js`),
            context: {
                id: user.id,
            }
        })
    }) 
}

async function turnMDXIntoPages({ graphql, actions}) {
    // 1. query all our tips
    const { data } = await graphql(`
        query {
            allMdx(filter: { frontmatter: { type: { eq: "tip" } } }) {
                nodes {
                    id
                    frontmatter {
                        slug
                    }
                }
            }
        }
   `);

   // 2. loop over each tip
   const tips = data.allMdx.nodes;
   tips.forEach((tip, i) => {
       // 3. create a page for each of those tips
       actions.createPage({
           path: `tip/${tip.frontmatter.slug}`,
           component: path.resolve(`./src/components/templates/Tip.js`),
           context: {
               id: tip.id,
               prev: i !== 0 ? tips[i - 1].frontmatter.slug : null,
               next: tips[i + 1] ? tips[i + 1].frontmatter.slug: null,
           }
       })
   }) 
}

exports.createPages = async function({ graphql, actions }) {
   await turnMDXIntoPages({ graphql, actions });
   await createUsersPages({ graphql, actions});
}

exports.sourceNodes = async function({
    actions,
    createNodeId,
    createContentDigest
}) {
    await sourceUsers({ actions, createNodeId, createContentDigest });
};