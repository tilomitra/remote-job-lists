import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';


const Index = (props) => (
    <Layout>
        <div>
            <ul>
                {props.jobs.map((job) => (
                    <li key={job.id}>
                        <Link href={job.link}>
                            <span><a>{job.title}</a>: {job.publishDate}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </Layout>
)


Index.getInitialProps = async function () {
    const res = await fetch('http://localhost:3000/api/jobs')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        jobs: data
    }
}

export default Index