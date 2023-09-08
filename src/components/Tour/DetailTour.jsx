import { StarFilled } from '@ant-design/icons'
import { Carousel, Col, Divider, Image, Row } from 'antd'
import React, { useState } from 'react'
import '../../asset/css/components/Tour/DetailTour.css'
import ScrollRefComponent from '../common/ScrollRefComponent'
const data = {
    id: 1,
    name: "Two Hour Walking Tour of Manhattan",
    mainImg: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/banner-search-form-min.png",
    img: [
        {
            id: 1,
            img: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_55990430.jpg',
        },
        {
            id: 2,
            img: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/51480_2333eb37.jpg',
        },
        {
            id: 3,
            img: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/51480_490031d3.jpg',
        },
        {
            id: 4,
            img: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_55990430.jpg',
        },
        {
            id: 5,
            img: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/51480_490031d3.jpg',
        },
    ],
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    star: 5,
    review: 3,
    location: "Los Angelese",
    duration: 2,
    type: "Tây Bắc",

}

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
const DetailTour = () => {
    const [imgChange, setImgChange] = useState(data.img[0].img)
    const changImgSlide = (item) => {
        setImgChange(item.img)
    }
    return (
        <>
            <Row className='banner-detail'>
                <img className='img-main' src={data.mainImg} />
                <div className='name-tour-detail'>
                    <h1>{data.name}</h1>
                </div>
            </Row>
            <Row justify={"start"} className="img-slide">
                <Col span={12}>
                    <Image width={'100%'} height={"400px"} style={{ padding: "0 10px" }} className='img-thumbnail' src={imgChange} />
                </Col>
                <Col span={12}>
                    <Row justify={"end"} wrap={true}>
                        {data.img.map((item, index) => (
                            <img key={index} onClick={() => changImgSlide(item)} className='img-slide-wrap' src={item.img} />
                        ))}
                    </Row>
                    <Row justify={"end"} wrap={true}>
                        <Col span={21} className="des-tour">
                            {data.description}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='info' justify={"center"} >
                <Col span={20} className='info-tour-des'>
                    <div>
                        <Col>
                            <div className='name-tour-info'>{data.name} </div>
                        </Col>
                        <Col>
                            <div>
                                <span className='star-color'><StarFilled /></span>
                                <span className='star-vote'>{data.star}</span>
                                <span className='review'> ({data.review} review)</span>
                                <span>.</span>
                                <span className='review'>{data.location} </span>
                            </div>
                        </Col>
                    </div>
                    <div>
                        <Row>
                            <Col span={16}>
                                <Divider />
                                <div className='title-option'>Mô tả</div>
                                <div className="des-tour">{data.description} </div>
                            </Col>
                            <Col span={8}>

                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span={20} className='relation-tour' >
                    <div className='title-option'>Địa điểm tương tự</div>
                    <ScrollRefComponent
                        data={dataTour}
                        linkTo={'/DetailTour'}
                    />
                </Col>
            </Row>
        </>
    )
}

export default DetailTour