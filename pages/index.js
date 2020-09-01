import Head from 'next/head'
import Header from '../components/Header'

const Home = () => (
  <>
    <Header/>
    <main className="sm:max-w-full md:w-1/2 lg:w-2/5 sm:mx-3 md:mx-auto lg:mx-auto">
      <Head>
        <title>Starboard Developer Cooperative</title>
      </Head>
      <div className="flex flex-col">
        <img className="w-12 rounded-full" src="/logo.png" alt="Starboard" />
        <h1 className="text-gray-dark text-6xl">Starboard Co-op</h1>
        <h2 className="text-gray-light text-xl">Your friendly neighborhood software development studio, owned by the people who do the work.</h2>
        <p className="mt-4">
          <a className="text-primary" href="https://riceo.org/learn">Learn</a> about the worker cooperative movement in Rhode Island.
        </p>
      </div>
    </main>
  </>
)

export default Home