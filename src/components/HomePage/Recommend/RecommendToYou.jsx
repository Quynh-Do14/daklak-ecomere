import { Col, Row } from 'antd'
import React from 'react'
import "../../../asset/css/components/HomePage.css"

const dataPost = [
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg",
        title: "Lorem ipsum dolor sit."
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg",
        title: "Lorem ipsum dolor sit."
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg",
        title: "Lorem ipsum dolor sit."
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg",
        title: "Lorem ipsum dolor sit."
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg",
        title: "Lorem ipsum dolor sit."
    },
    {
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg",
        title: "Lorem ipsum dolor sit."
    },
];

const RecommendToYou = () => {
    return (
        <>
            <div className="posts">
                <Row className='row-title' justify={"center"} wrap={false}>
                    <div className='title'>
                        <span className='first-word'> Địa điểm</span>
                        <span className='second-word'> Nổi bật</span>
                    </div>
                </Row>
                <Row className='row-list' gutter={[30, 30]} justify={"center"} wrap={true}>
                    {dataPost.map((item, index) => (
                        <Col span={8} className="col-list" key={index}>
                            <div>
                                <img className='img-post' src={item.img} />
                                <div className='des-post'>
                                    <div className='title-post'>{item.title}</div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
            {/* ////////////////// */}
        </>
    )
}

export default RecommendToYou