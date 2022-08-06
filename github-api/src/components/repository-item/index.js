import React from "react";
import useGithub from "../../hooks/github-hooks"
function RepositoryItem({name, linkToRepo, fullName}) {

    return (
        <div>
            <h2>{name}</h2>
            <h4>full name:</h4>
            <a href={linkToRepo} target="_blank" rel="noreferrer">{fullName}</a>
        </div>

    )




}

export default RepositoryItem;