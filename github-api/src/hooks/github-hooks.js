import { useContext } from "react";
import {GithubContext} from "../providers/github-provider"


function useGithub() {
    const {githubState, getUser} = useContext(GithubContext);

    return {githubState, getUser}
}

export default useGithub;