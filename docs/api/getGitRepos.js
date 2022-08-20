export async function getRepos() {
    // Replace with your username to retrieve your repos
    let username = 'imStav'

    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      const repos = await response.json()
      return repos
    } 
    catch (e) { console.log(e) }
}