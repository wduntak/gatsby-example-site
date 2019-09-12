const path = require('path');

module.exports = {
    siteMetadata: {
        anything: 'I want',
        title: 'Wangdu\'s Blog',
        description: 'This is the best website ever',
        author: 'Wangdu Duntak'
    },
    plugins: [
        'gatsby-plugin-sass',
        // source our images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: path.join(__dirname, `src`, `images`),
            },
        },
        // source our tips
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `tips`,
              path: path.join(__dirname, `src`, `tips`),
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // config the MDX with the remark images
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
              root: __dirname,
              gatsbyRemarkPlugins: [
                {
                  resolve: 'gatsby-remark-images',
                  options: {
                    maxWidth: 500,
                    linkImagesToOriginal: false,
                  },
                },
              ],
            },
        },
        // Duplicate plugin declaration?!
        // THIS IS A BUG FIX
        // https://twitter.com/chrisbiscardi/status/1171139195257012224
        {
            resolve: 'gatsby-remark-images',
            options: {
            maxWidth: 500,
            linkImagesToOriginal: false,
            },
        },
        // END BUG
        // I HOPE THIS IS TEMPORARY
    ],
};