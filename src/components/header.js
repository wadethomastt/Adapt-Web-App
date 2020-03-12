import React from "react"
import { StaticQuery, graphql } from "gatsby"
import logo from "../images/logo.svg"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        datoCmsHeader {
          heading
          maintagline
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div className="container mx-auto px-4 mt-4">
          <div className="flex justify-between">
            <div>
              <img src={logo} alt="Logo" style={{ width: 50, height: 50 }} />
              <p className="hidden">adaptactive</p>
              <p className="hidden">Creating Value Through Design</p>
            </div>
            <div className="flex items-center">
              <p>menu</p>
            </div>
            <nav className="hidden">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>

          <div className="text-center mt-5 mb-3">
            <p className="font-header font-bold text-primary">
              {data.datoCmsHeader.heading}
            </p>

            <p className="text-tiny font-body font-light ">
              {data.datoCmsHeader.maintagline}
            </p>
          </div>
        </div>
      </React.Fragment>
    )}
  />
)
