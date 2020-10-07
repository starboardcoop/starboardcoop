import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'
import Blurb from '../components/Blurb'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

const Home = () => {
  const motto = "Rhode Island's friendly neighborhood software development studio, owned by the people who do the work."

  return (
  <>
    <Head>
      <title>Starboard Developer Co-op | Web Design + Custom Software</title>
      <meta name="description" content={motto} />
      <meta name="keywords" content="Web design, Software development, Rhode Island, Cooperative, Small business, Local"></meta>
      <meta property="og:site_name" content="Starboard Developer Co-op" />
      <meta property="og:title" content="Web Design + Custom Software" />
      <meta property="og:description" content={motto} />
      <meta property="og:url" content="https://starboard.coop" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/brewery-logo.jpg" />
      <meta property="og:image:alt" content="A local brewery" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://starboard.coop/brewery-logo.jpg" />
      <meta name="twitter:site" content="@starboardcoop" />
      <meta name="twitter:title" content="Starboard: Web Design + Custom Software" />
      <link rel="canonical" href="https://starboard.coop/"></link>
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
        <div className="p-4">
          <div>
            <Blurb 
              title="Web Design"
              caption="Single- and multi-page websites"
            />
            <Blurb
              title="Custom Software"
              caption="Full-stack development of cross-platform apps"
            />
            <Blurb
              title="Good Vibes"
              caption="Included free of charge"
            />
          </div>
        </div>
      </Section>
      <Section id="three" className="h-70 text-white bg-brewery flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl">We believe in small local businesses.</h2>
        <p className="mt-4 text-xl">A great website has a fighting chance against the Walmarts and Amazons.</p>
      </Section>
      <Section className="bg-primary-dark text-white">
        <h2 className="text-2xl">The global Covid-19 pandemic has uncovered the need for small businesses to offer great online experiences.</h2>
      </Section>
      <Section id="crew" grow={true} className="bg-gray-light">
        <h2 className="text-3xl">Meet the crew.</h2>
        <div className="flex flex-col md:flex-row justify-evenly content-between mt-4">
          <Profile 
            name="Dillon Fagan"
            title="Member + Co-founder"
            image="/mugshots/dillon.jpg"
          />
          <Profile 
            name="Mike D'Antuono"
            title="Member + Co-founder"
            image="/mugshots/mike.jpg"
          />
          <Profile 
            name="Chris Milkaitis"
            title="Member + Co-founder"
            image="/mugshots/chris.jpg"
          />
        </div>
      </Section>
      <div id="four" className="bg-gray-light text-gray-dark text-center py-8">
        <h2 className="text-xl">Tell us about your project.</h2>
        <a href = "mailto: hello@starboard.coop">hello@starboard.coop</a>
      </div>
    </main>
    <Footer />
  </>
  )
}

export default Home