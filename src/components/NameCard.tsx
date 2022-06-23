import { User } from '../type/types'
import { FC } from 'react'
export const NameCard: FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.description}</p>
    </div>
  )
}
