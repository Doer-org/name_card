import Users from '../data/user.json'
import { NameCard } from './NameCard'

export const Main = () => {
  return (
    <div>
      {Users.map((user) => {
        return <NameCard user={user} />
      })}
    </div>
  )
}
