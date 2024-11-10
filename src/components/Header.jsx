import { useState } from "react"
import { Button, Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <span target="_blank">
        1st menu item
      </span>
    ),
  },
  {
    key: '2',
    label: (
      <span target="_blank">
        2nd menu item
      </span>
    ),
  }
]

export default function Header () {
  const [searchOpend, setSearchOpend] = useState(false)

  function handelClick (item) {
    
  }
  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="logoImg"src="Logotype@2x.png" alt="logotype" width={181} height={27} />
          <div className="search">
            <input type="search" placeholder="Search..."  />
            <Button>
              <img className="searchImg"src="searchSearch.png" alt="logotype"  onClick={(e)=>{
                
              }}/>
            </Button>
          </div>
        </div>

          <div className="menu">
            <ul className="navbar-list">
              <li className="navbar-item">
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottomLeft"
                    >
                      <b>Demos⋁</b>
                    </Dropdown>
                  </Space>
                </Space>    
              </li>
              <li className="navbar-item">
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottomLeft"
                    >
                      <b>Demos⋁</b>
                    </Dropdown>
                  </Space>
                </Space>    
              </li>
              <li className="navbar-item">
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottomLeft"
                    >
                      <b>Post⋁</b>
                    </Dropdown>
                  </Space>
                </Space>    
              </li>
              <li className="navbar-item">
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottomLeft"
                    >
                      <b>Features⋁</b>
                    </Dropdown>
                  </Space>
                </Space>    
              </li>
              <li className="navbar-item">
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottomLeft"
                    >
                      <b>Categories⋁</b>
                    </Dropdown>
                  </Space>
                </Space>   
              </li>
              <li className="navbar-item"><b>Buy Now</b></li>
            </ul>
          </div>
      </div> 
    </>
  )
}