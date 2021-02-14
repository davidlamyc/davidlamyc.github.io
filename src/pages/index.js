import React from 'react';
import { Link } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <PageTransition>
        <Head title="Home"/>
        {/* <h1>Hello.</h1> */}
        <h2>Hello, I'm a full-stack developer | data analyst from Singapore.</h2>
        <p>I've written Javascript and Golang code for web and mobile applications (monoliths and microservices), and worked on devops pipelines and test automation frameworks across different professional positions, within both enterprise and start-up environments.</p>
        <p>I'm a data enthusiast too (with a complex professional relationship with data, ask me more).</p>
        <p>I believe that a ton of curiousity and intent with just a little talent, goes a long way further than a ton of talent with no curiousity and intent.</p>
        <p><b>javascript</b>  react | express | sequelize | graphql | gatsbyJS | nextJS | jest | webdriverIO</p>
        <p><b>golang</b> | gin | echo | gorm</p>
        <p><b>devops</b> | AWS | jenkins | terraform | gitlab CI | github actions</p>
        <p><b>data</b> business analytics | descriptive stats | inferential stats | excel | python | r | tableau</p>
        <p>Need a developer or data analyst? <Link to="/contact">Contact me.</Link></p>
      </PageTransition>
    </Layout>
  )
}

export default IndexPage;
