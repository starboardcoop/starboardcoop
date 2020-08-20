import Head from 'next/head'

export default function Home() {
  return (
    <main className="w-1/2 m-auto">
      <Head>
        <title>Starboard Developer Cooperative</title>
      </Head>
      <div className="flex">
        <h1 className="text-blue-500 text-6xl">Starboard Co-op</h1>
        <h2 className="text-blue-700 text-xl">Your friendly neighborhood software development studio, owned by the people who do the work.</h2>
      </div>
    </main>
  )
}
