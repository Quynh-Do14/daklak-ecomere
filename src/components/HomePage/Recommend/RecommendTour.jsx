import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import "../../../asset/css/components/HomePage.css"
import { displayPrice } from '../../../common/Helper';

const dataTour = [
    {
        id: 1,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1800000
    },
    {
        id: 2,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        id: 3,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        id: 4,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        id: 5,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        id: 6,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        id: 7,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        id: 8,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
    {
        id: 9,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
        location: "Los Angelese",
        name: "Two Hour Walking Tour of Manhattan",
        price: 1500000
    },
];
const RecommendTour = () => {
    return (
        <>
            <Row className='row-list' gutter={[30, 30]} justify={"start"} wrap={true}>
                {dataTour.map((item, index) => (
                    <Col span={6} className="col-list" key={index}>
                        <div className="border-tour">
                            <img className='img-tour' src={item.img} />
                            <div className="info-tour">
                                <a href={`DetailTour`}>
                                    <div className="name-tour">
                                        {item.name}
                                    </div>
                                </a>
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
}

export default RecommendTour