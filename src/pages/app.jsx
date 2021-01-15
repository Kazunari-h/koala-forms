import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Login from "../components/Login"
import PostForm from "../components/PostForm"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/post" component={PostForm} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
