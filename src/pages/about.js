import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>I currently work for a start-up.</p>
            <p><Link to="/contact">Want to work with me? Please reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage;