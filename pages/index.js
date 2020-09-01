import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'

const Home = () => (
  <>
    <Head>
      <title>Starboard Developer Cooperative</title>
    </Head>
    <Header/>
    <main className="sm:max-w-full md:w-1/2 lg:w-2/5 sm:mx-3 md:mx-auto lg:mx-auto">
      <Section>
        <img className="w-12 rounded-full" src="/logo.png" alt="Starboard" />
        <h1 className="text-gray-dark text-6xl">Starboard Co-op</h1>
        <h2 className="text-gray-light text-xl">Your friendly neighborhood software development studio, owned by the people who do the work.</h2>
        <p className="mt-4">
          <a className="text-primary" href="https://riceo.org/learn">Learn</a> about the worker cooperative movement in Rhode Island.
        </p>
      </Section>
      <Section>
        <p>Highly competitive rates for Rhode Island businesses...</p>
      </Section>  
      <Section>
        <p>We are a worker-owned cooperative, meaning everyone doing the work owns the business...</p>
      </Section>
    </main>
  </>
)

export default Home