import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Remote Job Lists: Find your next remote job</title>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Hind:300,400,500,700|Trocchi" rel="stylesheet" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}