import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    fontFamily: 'sans-serif',
    lineHeight: 1.6
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

export default Layout