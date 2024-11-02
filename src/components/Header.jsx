import { useState } from "react"

export default function Header () {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="logoImg"src="Logotype@2x.png" alt="logotype" width={181} height={27} />
          <div className="search">
            <input type="search" placeholder="Search..." 
            />
            <img className="searchImg"src="searchSearch.png" alt="logotype" />
          </div>
        </div>

          <div className="menu">
            <ul className="navbar-list">
              <li className="navbar-item"><b>Demos⋁</b>
              {openDropdown === 1 && (
            <ul className="dropdown">
              <li><a href="#sub1">Submenu 1</a></li>
              <li><a href="#sub2">Submenu 2</a></li>
              <li><a href="#sub3">Submenu 3</a></li>
            </ul>
          )}
              </li>
              <li className="navbar-item"><b>Post⋁</b></li>
              <li className="navbar-item"><b>Features⋁</b></li>
              <li className="navbar-item"><b>Categories⋁</b></li>
              <li className="navbar-item"><b>Shop⋁</b></li>
              <li className="navbar-item"><b>Buy Now</b></li>
            </ul>
          </div>
      </div> 
    </>
  )
}