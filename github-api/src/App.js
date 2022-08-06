import React from "react"
import Layout from "./components/layout";
import Profile from "./components/profile";
import { ResetCSS } from "./global/resetCSS";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";
import GithubProvider from "./providers/github-provider"
function App() {
  return (
    <main>
      <GithubProvider />
      <ResetCSS />
      <Layout>
        <Profile />

        <Repositories />
      </Layout>

    </main>)

}

export default App;
