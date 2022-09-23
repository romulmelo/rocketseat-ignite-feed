import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import makeServer from "./server"

if (import.meta.env.MODE === "development") {
  makeServer()
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
