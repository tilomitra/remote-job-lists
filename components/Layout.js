import Header from './Header'
import Footer from './Footer'
import Email from './Email';

import "../assets/css/app.css";

const Layout = (props) => (
    <div className="app">
        <section>
            {props.children}
        </section>
        <Email type="footer" />
        <Footer />
    </div>
)

export default Layout