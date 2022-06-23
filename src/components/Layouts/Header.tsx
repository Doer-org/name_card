import logo from '../../assets/img/logo.svg'
export const Header = () => {
  return (
    <div className="bg-yellow-300">
      <div className="py-1 md:py-5">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 md:w-28 md:h-28 mx-auto"
        />
      </div>
    </div>
  )
}
