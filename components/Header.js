import Link from 'next/link'

const Header = () => (
    <header>
        <div>Logo</div>
        <div>
            <Link href="/"><a>NavOne</a></Link>
            <Link href="/"><a>NavTwo</a></Link>
            <Link href="/"><a>NavThree</a></Link>
        </div>
        <div>socials</div>
    </header>
)

export default Header