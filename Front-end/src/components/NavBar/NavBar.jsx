import logo from '@/assets/logo.png'
import logoRight from '@/assets/logo-right.png'
import './NavBar.css'
export const NavBar = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div>
          <div className='navbar-logo_right'>
            <div className='logo-title'>
              <p>Handicrafted by</p>
              <b style={{ textAlign: 'right' }}>Jim HLS</b>
            </div>
            <div>
              <img src={logoRight} alt='logo right' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
