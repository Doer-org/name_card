import logo from '../../assets/img/logo.svg'
import qr from '../../assets/img/name_card.png'
export const Header = () => {
  return (
    <div className="doer p-4">
      <div className="flex justify-between">
        <a className="inline-block h-14 hover:opacity-50 transition" href="https://doer.vercel.app/">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full"
          />
        </a>
        <div className="h-14">
          <img className="w-full h-full" src={qr} alt="QRコード"/>
        </div>
      </div>
    </div>
  )
}
