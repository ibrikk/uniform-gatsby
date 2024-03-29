import { Slot } from "@uniformdev/canvas-react"
import React from "react"

import Footer from "./Footer"

export default function LayoutCanvas({ title }) {
  return (
    <div className="container">
      <div>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </div>
      <Slot name="body" />
      <Footer />
    </div>
  )
}
