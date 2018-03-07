import Link from 'next/link'


const styles = {
    footer: {
        background: `url(data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Q…kiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+) no-repeat`,
        backgroundSize: `cover`,
        height: 500
    }
}

const Footer = () => (
    <div style={styles.footer}>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
    </div>
)

export default Footer