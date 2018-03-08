import Link from 'next/link'



const Header = () => (
    <nav className="navbar navbar-light bg-light">
        <Link href="/">
            <a className="navbar-brand" href="/">Remote Job Lists</a>
        </Link>
    </nav>
)

export default Header