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
      <Section id="one" className="md:h-70 text-white bg-cashier flex flex-col justify-center">
        <h1 className="text-white text-3xl my-16">Your friendly neighborhood software development studio, owned by the people who do the work.</h1>
        <p className="mt-4 text-xl">
          Learn about the <a className="text-white bg-primary-light p-1 hover:bg-primary-dark" href="https://riceo.org/learn">worker cooperative</a> movement in Rhode Island.
        </p>
      </Section>
      <Section id="two" className="bg-gray-dark text-white">
        <h2 className="text-2xl mb-2">We bring Rhode Island's small businesses online.</h2>
      </Section>
      <Section id="three" className="h-70 text-white bg-brewery flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl">We believe in small local businesses.</h2>
        <p className="mt-4 text-xl">A great website has a fighting chance against the Walmarts and Amazons.</p>
      </Section>
      <Section id="four" className="bg-primary-dark text-white">
        <h2 className="text-2xl">The global Covid-19 pandemic has uncovered the need for small businesses to offer great online experiences.</h2>
      </Section>
      <div id="five" className="bg-gray-light text-gray-dark text-center py-8">
        <h2>Contact Us!</h2>
        <a href = "mailto: starboardcoop@gmail.com">at Hello@Starboard.coop</a>
      </div>
    </main>
    <Footer />
  </>
)

export default Home