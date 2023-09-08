import { Button, Col, Row } from 'antd'
import React from 'react'
import { UserOutlined, DeleteOutlined } from '@ant-design/icons';
import '../../asset/css/components/Header.css';
import { useHistory } from 'react-router-dom';
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
        linkTo: '/f',
    },
    {
        id: 5,
        name: "Thông tin",
        linkTo: '',
    },
]
const Header = () => {
    const router = useHistory();
    return (
        <>
            <Row className='header' justify={"space-between"} align={'middle'}>
                <Col style={{ cursor: "pointer" }}>
                    <img src='https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/hotel-1.png' />
                </Col>
                <Col>
                    <ul className='menu-list'>
                        {menuList.map((item, index) => (
                            <a href={item.linkTo}>
                                <li
                                    className={`${item.linkTo === router.location.pathname ? "menu-select" : "menu-option"}`}
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
        </>
    )
}

export default Header