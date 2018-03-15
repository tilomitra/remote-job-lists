import Header from './Header'
import Footer from './Footer'
import Email from './Email';
import { initGA, logPageView } from '../utils/analytics'
import "../assets/css/app.css";

export default class Layout extends React.Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
    }
    render() {
        return (
            <div className="app">
                <section>
                    {this.props.children}
                </section>
                <Email type="footer" />
                <Footer />
            </div>
        )
    }
}

export default Layout