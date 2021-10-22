import React from 'react'

const RepositoryItem = ({ name, linkToRepo, fullRepoName }) => {
  return (
    <div>
      <h2> { name } </h2>
      <h4>Full Repo Name:</h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">{ fullRepoName }</a>
    </div>
  )
}

export default RepositoryItem
