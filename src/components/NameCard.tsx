import { User } from '../type/types'
import { FC } from 'react'
import '../assets/css/NameCard.css'
import logo from '../assets/img/logo.svg'
import twitter from '../assets/img/twitter.png'
import github from '../assets/img/github.png'
export const NameCard: FC<{ user: User }> = ({ user }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 shadow-2xl bg-white mx-3 my-16">
      <div className="grid grid-cols-1  text-center bg-gradient-to-r from-purple-400 via-pink-300 to-red-500">
        <div className="text-left">
          <img src={logo} alt="logo" className="w-16 h-16 mx-3" />
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/${user.image}`}
          alt={user.image}
          className="round w-20 h-20 shadow-2xl m-auto mt-10"
        />
        <p className="text-white mb-10">{user.name}</p>
        <div className="flex justify-end">
          <a href={user.twitter}>
            <img src={twitter} alt="logo" className="w-8 h-8 mx-3" />
          </a>
          <a href={user.github}>
            <img src={github} alt="logo" className="w-8 h-8 mx-3" />
          </a>
        </div>
      </div>

      <div className="my-10 mx-5 grid grid-cols-1 grid-rows-1">
        <p className=" h-24 text-left">{user.description}</p>
        <p className="mt-10">Favorite Languages!!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 my-2 ">
          {user.favoriteLanguages.map((lang) => {
            return (
              <div
                className="m-1 p-1 flex justify-center items-center border border-slate-500"
                key={lang.lang}
              >
                <img src={lang.link} alt="" className="w-5 h-5 mx-2" />
                <div className="text-center">{lang.lang}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
