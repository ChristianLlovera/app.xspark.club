import React from 'react'
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'

if (process.env.WEBPACK) { require('./_style.scss') }

const Layout = props => {

    return (
        <div className="content">
            <Menu />
            <Header />
            <div className="body scroll">
                <div className="props-children">
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}


export default Layout
