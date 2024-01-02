import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const [menu,setMenu] = useState("shop");
  // usestate used along with ONCLICK to select each component/pages
  // setMenu declared to assign values/names of each page

  return (
    <div className='pst'>

    <div className='navbar'>
      <div className='nav-log'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to = '/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                                                    {/*The LINK tag is used to link with the APP component if setMenu = shop the </hr> is to be presented otherwise an empty tag */}
          <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to = '/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                                                    {/* if setMenu = mens the </hr> which is underline or horizontal rule is to be presented otherwise an empty tag */}                                                    
          <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to = '/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                                                    {/* if setMenu = wommens the </hr> which is underline or horizontal rule is to be presented otherwise an empty tag */}                                                    
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to = '/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                                                    {/* if setMenu = kids the </hr> which is underline or horizontal rule is to be presented otherwise an empty tag */}                                                    

        </ul>
        <div className='nav-login-cart'>
          <Link to = '/login'><button>Login</button></Link>
          <Link to = '/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">0</div>
        </div>

    </div>
    </div>

  )
}

export default NavBar