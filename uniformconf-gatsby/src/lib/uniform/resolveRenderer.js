import Body from "../../components/Navbar.jsx"
import React from "react"

function UnknownComponent(component) {
  return <div>[unknown component: {component.type}]</div>
}

export default function resolveRenderer({ type }) {
  if (type == "defaultBody") {
    return Body
  }
  return UnknownComponent
}
