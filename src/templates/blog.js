import React from 'react';
import { graphql } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout';
import Head from '../components/head';
import blogStyles from './blog.module.scss';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                description
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <PageTransition>
                <Head title={props.data.markdownRemark.frontmatter.title} />
                <div className={blogStyles.title}>
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    <p>{props.data.markdownRemark.frontmatter.description}</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
            </PageTransition>
        </Layout>
    )
}

export default Blog;