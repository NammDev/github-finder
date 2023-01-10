import { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
  const { users, loading } = useContext(GithubContext)

  return (
    <>
      {!loading ? (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((u) => (
            <UserItem key={u.id} user={u} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default UserResults
