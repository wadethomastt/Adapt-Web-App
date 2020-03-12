import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Background from "../images/home.jpg"

export default ({ data }) => (
  <Layout>
    <div
      className="bg-no-repeat bg-center bg-cover bg-home-img"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div
        className="bg-home-img opacity-70"
        style={{ backgroundColor: "#0071bc" }}
      >
        <div className="container mx-auto px-4 text-center">
          {data.allDatoCmsFeaturesmobile.edges.map(feature => (
            <div key={feature.node.id} className="">
              <p className="text-xs font-bold text-white pt-5">
                {feature.node.title}
              </p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-home-solid-color text-center">
      <p className="text-xs font-bold text-white pt-3">Projects</p>
      <div className="container mx-auto px-4 grid grid-cols-2 gap-4 mt-4">
        <div className=" project_card bg-white"></div>
        <div className=" project_card bg-white"></div>
      </div>
    </div>

    <div className="container mx-auto text-center">
      <p className="text-xs font-bold font-header text-primary pt-10">
        {data.datoCmsServicesmobile.servicetitlemobile}
      </p>
      <ul>
        <li>
          <p className="font-thin text-grey-600 font-body">
            {" "}
            {data.datoCmsServicesmobile.servicemobile1}
          </p>
        </li>
        <li>
          <p className="font-thin text-grey-600 font-body">
            {" "}
            {data.datoCmsServicesmobile.servicemobile2}
          </p>
        </li>
      </ul>
    </div>

    <div className="bg-secondary mt-10 mb-10 py-10 px-4">
      <div className="container mx-auto text-xs text-grey-200 text-center">
        <p className="font-bold font-header text-2xl">
          Hi, its great to see you...
        </p>
        <p className="text-grey-200 font-body">
          Our faith in God keeps us honest, focus and driven to service
          exellence. We love javascript and we're passionate about the web and
          design in all of its form. We'd love to work with, and for you...
        </p>
      </div>
    </div>

    <div className="container mx-auto text-center">
      <p className="font-bold text-2xl font-header">
        We'd love to hear from you
      </p>
      <form className="flex flex-col">
        <input
          className="border border-gray-400 m-4 p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="border border-gray-400 m-4 p-2"
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <textarea
          className="border border-gray-400 m-4 p-2"
          name="comment"
          rows="5"
          placeholder="Message"
        ></textarea>
        <input
          className=" m-4 bg-primary text-white font-body"
          type="submit"
          value="Submit"
        ></input>
      </form>
    </div>
  </Layout>
)
export const pageQuery = graphql`
  query MobileIndexQuery {
    allDatoCmsFeaturesmobile {
      edges {
        node {
          id
          title
        }
      }
    }
    datoCmsServicesmobile {
      servicetitlemobile
      servicemobile1
      servicemobile2
    }
  }
`
