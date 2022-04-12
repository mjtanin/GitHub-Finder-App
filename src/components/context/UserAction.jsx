const url = process.env.REACT_APP_GITHUB_URL
const clientSecrets = process.env.REACT_APP_CLIENT_SECRETS


export const searchUsers = async userName => {

    const response = await fetch(`${url}search/users?q=${userName}`,{
      method: 'GET',
      headers: {
        Authorization: clientSecrets
      },
    })
    return await response.json()
}

export const userProfile = async userName => {
  const response = await fetch(`${url}users/${userName}`,{
    method: 'GET',
    headers: {
      Authorization: clientSecrets
    },
  })
  return await response.json()

}

export const userReop = async userName => {
  const response = await fetch(`${url}users/${userName}/repos`,{
    method: 'GET',
    headers: {
      Authorization: clientSecrets
    },
  })
  return await response.json()

}