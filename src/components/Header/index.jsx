import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import { UserOutlined, DeleteOutlined, MenuOutlined } from '@ant-design/icons';
import '../../asset/css/components/Header.css';
import { useHistory } from 'react-router-dom';
import menuIcon from "../../asset/img/menu.png";
import closeIcon from "../../asset/img/close.png";
const menuList = [
    {
        id: 1,
        name: "Trang chủ",
        linkTo: '/',
    },
    {
        id: 2,
        name: "Lễ hội",
        linkTo: '/Festival',
    },
    {
        id: 3,
        name: "Địa điểm",
        linkTo: '/Tour',
    },
    {
        id: 4,
        name: "Hoạt động",
        linkTo: '/Activity',
    },
    {
        id: 5,
        name: "Thông tin",
        linkTo: '/Info',
    },
]
const Header = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const router = useHistory();
    const pathname = router.location.pathname;

    const onOpenMenuMobile = () => {
        setOpenMenuMobile(true);
    };

    const onCloseMenuMobile = () => {
        setOpenMenuMobile(false);
    };

    return (
        <div className='header'>
            <Row className='header-pc' justify={"space-between"} align={'middle'}>
                <Col style={{ cursor: "pointer" }}>
                    <img src='https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/hotel-1.png' />
                </Col>
                <Col>
                    <ul className='menu-list'>
                        {menuList.map((item, index) => (
                            <a href={item.linkTo}>
                                <li
                                    className={`${pathname.includes(item.linkTo) ? "menu-select" : "menu-option"}`}
                                    key={index}>
                                    {item.name}
                                </li>
                            </a>
                        ))}
                    </ul>
                </Col>
                <Col className='col-user'>
                    <Row justify={"space-between"} align={'middle'}>
                        <div className='user'><UserOutlined /> </div>
                        <div className='user'><DeleteOutlined /> </div>
                        <a href='/Login'> <Button className='logout'>Đăng nhập </Button></a>
                    </Row>
                </Col>
            </Row>
            <Row className='icon-add' justify={"space-between"}>
                <Col onClick={onOpenMenuMobile} className='icon pointer'>
                    <img src={menuIcon} width={30} alt="" />
                </Col>
                <Col>
                    <Row justify={"space-between"} align={'middle'}>
                        <div className='user'><UserOutlined /> </div>
                        <div className='user'><DeleteOutlined /> </div>
                        <a href='/Login'> <Button className='logout'>Đăng nhập </Button></a>
                    </Row>
                </Col>
            </Row>

            {/* Mobile */}
            <div className={`${openMenuMobile ? "header-mobile open" : "header-mobile close"}`}>
                <div onClick={onCloseMenuMobile} className='pointer iconClose' >
                    <img src={closeIcon} width={20} alt="" />
                </div>
                <div>
                    <ul className='menu-list-mobile'>
                        {menuList.map((item, index) => (
                            <a href={item.linkTo}>
                                <li
                                    className={`${pathname.includes(item.linkTo) ? "menu-select" : "menu-option"}`}
                                    key={index}>
                                    {item.name}
                                </li>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
            <div onClick={onCloseMenuMobile} className={`${openMenuMobile ? "block" : "display-none"} page-blank pointer`}></div>
        </div>
    )
}

export default Header;
