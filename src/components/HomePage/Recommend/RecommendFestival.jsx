import { Col, Row } from 'antd'
import React from 'react'
import "../../../asset/css/components/HomePage.css"
import { displayPrice } from '../../../common/Helper';

const dataTour = [
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/salto-paracaidas-newcastle-australia-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1800000
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/salto-paracaidas-newcastle-australia-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/salto-paracaidas-newcastle-australia-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/salto-paracaidas-newcastle-australia-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/salto-paracaidas-newcastle-australia-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/salto-paracaidas-newcastle-australia-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/salto-paracaidas-newcastle-australia-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
];
const RecommendFestival = () => {
    return (
        <>
            <Row className='row-list' gutter={[30, 30]} justify={"start"} wrap={true}>
                {dataTour.map((item, index) => (
                    <Col sm={24} md={12} lg={8} xl={6} className="col-list" key={index}>
                        <div className="border-tour">
                            <img className='img-tour' src={item.img} />
                            <div className="info-tour">
                                <div className="name-tour">
                                    {item.name}
                                </div>
                                <div className="location-tour">
                                    {item.location}
                                </div>
                                <div className="selection-footer">
                                    <div className="price-tour">
                                        Chỉ từ:
                                        <span className="price">{displayPrice(item.price)}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>
                ))}
            </Row>
        </>
    )
};

export default RecommendFestival