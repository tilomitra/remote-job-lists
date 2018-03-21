import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Email from "./Email";
import { initGA, logPageView } from "../utils/analytics";
import "../assets/css/app.css";

class Layout extends Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }
    render() {
        return (
            <div className="app">
                <section>{this.props.children}</section>
                <Email type="footer" />
                <Footer />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(d, w, c) {
                            w.ChatraID = 'ubFGSGcPGz3eRWR7x';
                            var s = d.createElement('script');
                            w[c] = w[c] || function() {
                                (w[c].q = w[c].q || []).push(arguments);
                            };
                            s.async = true;
                            s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
                            + '//call.chatra.io/chatra.js';
                            if (d.head) d.head.appendChild(s);
                        })(document, window, 'Chatra');
                      `
                    }}
                />
            </div>
        );
    }
}

export default Layout;
