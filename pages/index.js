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
    <main>
      <Section className="md:h-70" backgroundImage="cashier" textColor="white">
        <h1 className="text-white text-3xl md:text-4xl">Your friendly neighborhood software development studio, owned by the people who do the work.</h1>
        <p className="mt-4 text-xl">
          <a className="text-primary-light" href="https://riceo.org/learn">Learn</a> about the worker cooperative movement in Rhode Island.
        </p>
      </Section>
      <Section color="gray-dark" textColor="white">
        <h2 className="text-2xl">We bring Rhode Island small businesses online so they can better serve their customers and gain new ones.</h2>
      </Section>  
      <Section color="primary-dark" textColor="white">
        <h2 className="text-2xl">The global Covid-19 pandemic has uncovered the need for small businesses to offer great online experiences, if they are to compete with large corporations.</h2>
      </Section>
      <Section color="gray-dark" textColor="white">
        <h2 className="text-2xl">We believe a small, local store with a great website has a fighting chance against Walmart and Amazon.</h2>
      </Section>
    </main>
    <Footer />
  </>
)

export default Home