import React from 'react';
import Layout from '../components/Layout';
import dog from '../images/dog.jpg';
import Img from '../components/Img';

export default function Homepage(props) {
    return (
        <Layout>
            <Img src="dog.jpg" alt='A cute dog' />
            <h2>This is the Homepage!</h2>
            <p>What's next?</p>
        </Layout>
    );
}