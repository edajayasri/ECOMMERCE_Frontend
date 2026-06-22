import { Link } from "react-router-dom";
function Header({setsearch}) {

  let togglemode=()=>{
  document.body.classList.toggle("change")
  }

  return (
    <>
     <header style={{display:"flex",justifyContent:"space-evenly"}}   >
    <img
  className="logo"
  src="https://zerodha.com/static/images/logo.svg"
  alt="logo"
/>

    <nav style={{display:"flex",gap:"20px",alignItems:"center"}}>
      <input
  onChange={(e) => setsearch(e.target.value)}
  placeholder="Search products..."
/>
    <Link to={'/register'}>Signup</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/login'}>SignIn</Link>
    <Link to={'/products'}>Products</Link>
    <button id="btnSmall" onClick={togglemode}>dark/light</button>
    </nav>

    </header>
    </>
  )
}

export default Header