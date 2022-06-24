import Users from '../data/user.json'
import { NameCard } from './NameCard'

export const Main = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 flex-1">
      {Users.map((user) => {
        return <NameCard user={user} key={user.name} />
      })}
    </div>
  )
}
