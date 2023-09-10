import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import "../../../asset/css/components/HomePage.css"
import { displayPrice } from '../../../common/Helper';
import { useSnapCarousel } from 'react-snap-carousel';
import { LeftOutlined } from '@ant-design/icons';
import { RightOutlined } from '@ant-design/icons/lib/icons';

const dataTour = [
    {
        id: 1,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type: "Du Lịch",
        title: "The Best Kept Secrets About Travel, In My Best Journey",
        subTitle: "PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect",
    },
    {
        id: 2,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type: "Du Lịch",
        title: "The Best Kept Secrets About Travel, In My Best Journey",
        subTitle: "PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect",
    },
    {
        id: 3,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type: "Du Lịch",
        title: "The Best Kept Secrets About Travel, In My Best Journey",
        subTitle: "PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect",
    },
    {
        id: 4,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type: "Du Lịch",
        title: "The Best Kept Secrets About Travel, In My Best Journey",
        subTitle: "PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect",
    },
    {
        id: 5,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type: "Du Lịch",
        title: "The Best Kept Secrets About Travel, In My Best Journey",
        subTitle: "PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect",
    },
    {
        id: 6,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type: "Du Lịch",
        title: "The Best Kept Secrets About Travel, In My Best Journey",
        subTitle: "PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect",
    },
    {
        id: 7,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type: "Du Lịch",
        title: "The Best Kept Secrets About Travel, In My Best Journey",
        subTitle: "PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect",
    },
    {
        id: 8,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type: "Du Lịch",
        title: "The Best Kept Secrets About Travel, In My Best Journey",
        subTitle: "PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect",
    },
    {
        id: 9,
        img: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type: "Du Lịch",
        title: "The Best Kept Secrets About Travel, In My Best Journey",
        subTitle: "PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect PENNSYLVANIA, USA — The difference between a tourist and a delivery good and perpect",
    },
];
const RecommendPost = () => {
    const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();
    return (
        <>
            <Row className='row-list' gutter={[30, 30]} justify={"center"} wrap={false}>
                <Col>
                    <Row gutter={[10, 10]} justify={"end"} align={"middle"}>
                        <Col>
                            <div className='btn-scroll' onClick={() => prev()}><LeftOutlined /></div>
                        </Col>
                        {/* <Col className='page'>
                            {activePageIndex + 1} / {pages.length}
                        </Col> */}
                        <Col>
                            <div className='btn-scroll' onClick={() => next()}><RightOutlined /></div>
                        </Col>
                    </Row>
                    <Row ref={scrollRef} gutter={[30, 30]} className="ul-list" justify={"start"} wrap={false}>
                        {/* <ul ref={scrollRef} className="ul-list"  > */}
                        {dataTour.map((item, index) => (
                            // <li className="li-list" key={index}>
                            <Col sm={24} md={12} lg={8} xl={6} className="col-list li-list" key={index}>

                                <div className="border-tour">
                                    <img className='img-tour' src={item.img} />
                                    <div className="info-tour">
                                        <div className='type-post'>
                                            <div className='type-post-text'>
                                                {item.type}
                                            </div>
                                        </div>
                                        <div>
                                            <a href={`DetailTour`}>
                                                <div className="name-tour">
                                                    {item.title}
                                                </div>
                                            </a>
                                        </div>
                                        <div className="post-subTitle">
                                            {item.subTitle}
                                        </div>
                                    </div>

                                </div>
                                {/* </li> */}
                            </Col>
                        ))}
                        {/* </ul> */}
                    </Row>
                    <Row gutter={[10, 10]} justify={"center"} align={"middle"}>
                        {pages.map((_, i) => (
                            <Col key={i}>
                                <div
                                    className='page-dot'
                                    style={i === activePageIndex ? { opacity: 0.5, background: "#3b71fe" } : {}}
                                    onCColck={() => goTo(i)}
                                >
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            {/* <Row className='row-list' gutter={[30, 30]} justify={"center"} wrap={true}>
                {dataTour.map((item, index) => (
                    <Col className="col-list" key={index}>
                        <div className="border-tour">
                            <img className='img-tour' src={item.img} />
                            <div className="info-tour">
                                <div className='type-post'>
                                    <div className='type-post-text'>
                                        {item.type}
                                    </div>
                                </div>
                                <div>
                                    <a href={`DetailTour`}>
                                        <div className="name-tour">
                                            {item.title}
                                        </div>
                                    </a>
                                </div>
                                <div className="post-subTitle">
                                    {item.subTitle}
                                </div>
                            </div>

                        </div>
                    </Col>
                ))}
            </Row> */}
        </>
    )
}

export default RecommendPost