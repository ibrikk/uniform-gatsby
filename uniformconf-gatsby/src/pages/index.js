import { CanvasClient } from "@uniformdev/canvas"
import { Composition } from "@uniformdev/canvas-react"
import React from "react"
import resolveRenderer from "../lib/uniform/resolveRenderer"
import { Link } from "gatsby"
import doEnhance from "../lib/enhancer"
import content from "../content/content.json"

import LayoutCanvas from "../components/LayoutCanvas"

async function getComposition(slug) {
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
  })
  const { composition } = await client.getCompositionBySlug({
    slug,
  })
  return composition
}

export async function getStaticProps() {
  const slug = "/"
  const topic = content.find(e => e.url == slug)

  const composition = await getComposition(slug)

  await doEnhance(composition)

  //
  //Return props for the home page that
  //include the composition and content
  //required by the page components.
  return {
    props: {
      composition,
      fields: topic.fields,
    },
  }
}

export default function Home({ composition, fields }) {
  return (
    <>
      <Composition data={composition} resolveRenderer={resolveRenderer}>
        <h1 className="text-xxl">No other place like home.</h1>
        <p>
          Index route is not supported yet. Please open{" "}
          <Link to="/home" className="underline">
            this Home page
          </Link>{" "}
          instead.
        </p>
        <LayoutCanvas composition={composition} fields={fields} />
      </Composition>
    </>
  )
}
