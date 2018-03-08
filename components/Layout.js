import Header from './Header'
import Footer from './Footer'

import "../assets/css/app.css";

const Layout = (props) => (
    <div className="app">
        <Header />
        <section>
            {props.children}
        </section>
        <Footer />
    </div>
)

export default Layout