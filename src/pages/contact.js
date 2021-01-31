import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <Layout>
            <PageTransition>
                <Head title="Contact" />
                <h1>Contact</h1>
                <p>The best way to reach me is via <a href="https://www.linkedin.com/in/david-lam-1810a470/" target="_blank">linkedin</a>.</p>
            </PageTransition>
        </Layout>
    )
}

export default ContactPage;