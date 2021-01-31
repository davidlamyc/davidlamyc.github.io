import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout';
import Head from '../components/head';

import blogStyles from './blog.module.scss';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            description
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <PageTransition>
                <h1>Blog</h1>
                <Head title="Blog" />
                <ol className={blogStyles.posts}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.fields.slug}`} className={blogStyles.blogItem}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.description}</p>
                                    <p>{edge.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </PageTransition>
        </Layout>
    )
}

export default BlogPage;