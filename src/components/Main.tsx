import User from '../data/user.json'
import { NameCard } from './NameCard'
export const Main = () => {
  return (
    <div>
      {User.map((user) => {
        return <NameCard />
      })}
    </div>
  )
}
