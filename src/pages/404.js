import GatsbyImage from 'gatsby-image';
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const NotFound = () => {
    return (
        <Layout>
            <h1>Page not found</h1>
            <p><Link to="/">Go back home.</Link></p>
        </Layout>
    )
}

export default NotFound;