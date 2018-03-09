import Link from 'next/link';

const Tag = (props) => (
    <Link href={{
        pathname: '/',
        query: { search: props.name }
    }}>
        <span className="job-tag badge">
            {props.name}
        </span>
    </Link>
)

export default Tag