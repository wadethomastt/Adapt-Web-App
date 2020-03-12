import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        datoCmsFootercopyright {
          copyright
        }
      }
    `}
    render={data => (
      <div className="container mx-auto text-center text-tiny mb-2 font-body">
        <p>{data.datoCmsFootercopyright.copyright}</p>
        <nav>
          <ul>
            <li className="inline-block mx-1">Privacy</li>
            <li className="inline-block mx-1">Terms</li>
            <li className="inline-block mx-1">Disclaimer</li>
          </ul>
        </nav>
      </div>
    )}
  />
)
