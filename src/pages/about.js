import React from 'react';
import { Link } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <PageTransition>
                <Head title="About" />
                <h1>About Me</h1>
                <p>I currently work for a start-up.</p>
                <p>This site is currently a work in progress, forgive the sparseness of it.</p>
                <p><Link to="/contact">Want to work with me? Please reach out.</Link></p>
            </PageTransition>
        </Layout>
    )
}

export default AboutPage;