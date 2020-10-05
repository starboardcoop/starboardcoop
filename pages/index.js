import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'

const motto = "Rhode Island's friendly neighborhood software development studio, owned by the people who do the work."

const Home = () => (
  <>
    <Head>
      <title>Starboard Developer Co-op | Web Design + Custom Software</title>
      <meta name="description" content={motto} />
      <meta name="keywords" content="Web design, Software development, Rhode Island, Cooperative, Small business, Local"></meta>
      <meta property="og:site_name" content="Starboard Developer Co-op" />
      <meta property="og:title" content="Web Design &amp; Software Development" />
      <meta property="og:description" content={motto} />
      <meta property="og:url" content="https://starboard.coop" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/brewery-logo.jpg" />
      <meta property="og:image:alt" content="A local brewery" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/brewery-logo.jpg" />
      <meta name="twitter:site" content="@starboardcoop" />
    </Head>
    <Header />
    <main>
      <Section id="one" className="md:h-70 text-white bg-cashier flex flex-col justify-center">
        <h1 className="hidden">Web Design + Custom Software Development</h1>
        <h2 className="text-white text-3xl my-16">Your friendly neighborhood software development studio, owned by the people who do the work.</h2>
        <p className="mt-4 text-xl">
          Learn about the <a className="text-white bg-primary-light p-1 hover:bg-primary-dark" href="https://riceo.org/learn" target="_blank">worker cooperative</a> movement in Rhode Island.
        </p>
      </Section>
      <Section id="two" className="bg-gray-dark text-white">
        <h2 className="text-2xl mb-2">We bring Rhode Island's small businesses online.</h2>
      </Section>
      <Section id="three" className="h-70 text-white bg-brewery flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl">We believe in small local businesses.</h2>
        <p className="mt-4 text-xl">A great website has a fighting chance against the Walmarts and Amazons.</p>
      </Section>
      <Section className="bg-primary-dark text-white">
        <h2 className="text-2xl">The global Covid-19 pandemic has uncovered the need for small businesses to offer great online experiences.</h2>
      </Section>
      <div id="four" className="bg-gray-light text-gray-dark text-center py-8">
        <h2 className="text-xl">Tell us about your project.</h2>
        <a href = "mailto: hello@starboard.coop">hello@starboard.coop</a>
      </div>
    </main>
    <Footer />
  </>
)

export default Home