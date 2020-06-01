import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Heading from '../components/format/heading'
import Link from '../components/format/link'
import SocialItems from '../components/format/social'

const Container = styled.div`
  max-width: 40%;
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 1.6rem;
  }
`

const P = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading>Hi, I'm Nikhil.</Heading>
      <P style={{ marginTop: '1rem' }}>
        A 21 year old designer and developer from India.
      </P>
      <P>
        I love creating things that people want.
      </P>
      <P>
        I’m also into security, pentesting and Linux administration. I enjoy making bots for the discord community.
      </P>
      <SocialItems />
    </Container>
  </Layout>
)

export default IndexPage
