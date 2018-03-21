import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charset="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.typekit.net/pox4jyh.css"
                    />

                    {/* <link href="https://fonts.googleapis.com/css?family=Hind:300,400,500,700|Trocchi" rel="stylesheet" /> */}
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
