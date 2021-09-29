import React, { useState, useEffect } from 'react'
import { Avatar, Button, Typography, Menu } from 'antd'
import { FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                {/* <Button className="menu-control-container"></Button> */}
            </div>
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                </Menu>
                <Menu theme="dark">
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                </Menu>
                <Menu theme="dark">
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                </Menu>
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
        </div>
    )
}

export default Navbar
