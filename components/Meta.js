import { Component } from 'react';
import Head from 'next/head';

class Meta extends Component {
    render() {
        return (

            // Essential
            <Head>
                <meta property="og:title" content={this.props.title} />
                <meta property="og:description" content={this.props.description} />
                <meta property="og:image" content={this.props.image} />
                <meta property="og:url" content={this.props.url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:site_name" content="Remote Job Lists" />

            </Head>
        )
    }
}

export default Meta;
