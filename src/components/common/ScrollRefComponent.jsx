import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import "../../asset/css/components/HomePage.css"
import { useSnapCarousel } from 'react-snap-carousel';
import { LeftOutlined } from '@ant-design/icons';
import { RightOutlined } from '@ant-design/icons/lib/icons';
import { displayPrice } from '../../common/Helper';

const ScrollRefComponent = (props) => {
    const { data, linkTo } = props
    const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();
    return (
        <>
            <Row className='' gutter={[30, 30]} justify={"center"} wrap={false}>
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
                        {data.map((item, index) => (
                            // <li className="li-list" key={index}>
                            <Col span={6} className="col-list li-list" key={index}>
                                <div className="border-tour">
                                    <img className='img-tour' src={item.img} />
                                    <div className="info-tour">
                                        <a href={`${linkTo}`}>
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
        </>
    )
}
export default ScrollRefComponent;