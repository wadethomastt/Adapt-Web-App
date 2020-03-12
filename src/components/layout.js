import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/global.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.pageBody}>
      <div key="1" className={layoutStyles.content}>
        <Header />
        <div>{props.children}</div>
      </div>
      <div key="2" className={layoutStyles.base}>
        <Footer />
      </div>
    </div>
  )
}
export default Layout
