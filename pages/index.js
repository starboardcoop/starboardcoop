import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'

const Home = () => (
  <>
    <Head>
      <title>Starboard Developer Cooperative</title>
    </Head>
    <Header />
    <main className="sm:max-w-full md:w-1/2 lg:w-2/5 sm:mx-3 md:mx-auto lg:mx-auto">
      <Section>
        <h2 className="text-gray-light text-xl">Your friendly neighborhood software development studio, owned by the people who do the work.</h2>
        <p className="mt-4">
          <a className="text-primary-light" href="https://riceo.org/learn">Learn</a> about the worker cooperative movement in Rhode Island.
        </p>
      </Section>
      <Section color="primary-dark" textColor="white">
        <p>We bring Rhode Island small businesses online so they can better serve their customers and gain new ones.</p>
      </Section>  
      <Section>
        <p>The global Covid-19 pandemic has uncovered the need for small businesses have a great online experience, if they are to compete with large corporations</p>
      </Section>
      <Section color="primary-dark" textColor="white">
        <p>We believe a small, local store with a great website has a fighting chance against Walmart and Amazon.</p>
      </Section>
    </main>
    <Footer />
  </>
)

export default Home