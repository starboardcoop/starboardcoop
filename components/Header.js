import Link from 'next/link'

const headerStyle = "w-full bg-primary"
const navStyle = "flex bg-gray-dark text-white text-xl p-4"

const Header = () => (
    <header className={headerStyle}>
        <div className="sm:w-full md:w-40">
            <img src="/masthead-white.png" alt="Starboard" />
        </div>
        <nav className={navStyle}>
            <div>
                <Link href="/"><a className="mr-4">NavOne</a></Link>
                <Link href="/"><a className="mr-4">NavTwo</a></Link>
                <Link href="/"><a className="mr-4">NavThree</a></Link>
            </div>
            <div className="flex">
                <a className="mr-4" href="/#twitter"><img width="20px" src="/twitter.svg" /></a>
                <a className="mr-4" href="/#github"><img width="20px" src="/github.svg" /></a>
            </div>
        </nav>
    </header>
)

export default Header