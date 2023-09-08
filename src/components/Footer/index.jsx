import React from 'react'
import "../../asset/css/components/Footer.css"
import { Col, Row } from 'antd'
import fb_icon from "../../asset/img/fb_icon.svg"
import insta_icon from "../../asset/img/insta_icon.svg"
import yt_icon from "../../asset/img/yt_icon.svg"
const Footer = () => {
    return (
        <div className='footer'>
            <Row gutter={[30, 30]} justify={"center"}>
                <Col span={8} className="col-footer">
                    <div>
                        <div className='title-footer'>Thông tin liên hệ</div>
                    </div>
                </Col>
                <Col span={8} className="col-footer">
                    <div>

                    </div>
                </Col>
                <Col span={8} className="col-footer">
                    <div>
                        <div className='title-footer'>Mạng xã hội</div>
                        <ul>
                            <li className='li-img'><img className='img-footer' src={fb_icon} /> </li>
                            <li className='li-img'><img className='img-footer' src={insta_icon} /> </li>
                            <li className='li-img'><img className='img-footer' src={yt_icon} /> </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer