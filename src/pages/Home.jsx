import UserResults from '../components/users/UserResults'
import { useEffect } from 'react'

function Home() {
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      method: 'GET',
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <UserResults />
    </div>
  )
}

export default Home
