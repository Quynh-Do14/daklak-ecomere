import React from 'react'
import { Button, Col, DatePicker, Input, Row } from 'antd'
import '../../asset/css/common/SearchBar.css'
import location_icon from "../../asset/img/location_icon.png"
import calendar_icon from "../../asset/img/calendar_icon.png"
const SearchBar = () => {
    return (
        <>
            <div className='container-search'>
                <Row  className='form-search' align={"middle"} justify={"space-between"}>
                    <Col xs={24} sm={24} lg={24} xl={6} className='col-search'>
                        <Row align={"middle"} justify={"start"} wrap={false}>
                            <Col xs={4} sm={4} lg={2} xl={4}>
                                <img className='icon-search' src={location_icon} />
                            </Col>
                            <Col xs={20} sm={20} lg={22} xl={20}>
                                <div>
                                    <div className='label-ipt-search'>Tìm kiếm địa điểm</div>
                                    <Input placeholder='Địa điểm muốn tìm kiếm?' />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} lg={24} xl={6} className='col-search'>
                        <Row align={"middle"} justify={"start"} wrap={false}>
                            <Col xs={4} sm={4} lg={2} xl={4}>
                                <img className='icon-search' src={calendar_icon} />
                            </Col>
                            <Col xs={20} sm={20} lg={22} xl={20}>
                                <div>
                                    <div className='label-ipt-search'>Ngày bắt đầu</div>
                                    <DatePicker
                                        className='w-100'
                                        placeholder='Ngày bắt đầu?'
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} lg={24} xl={6} className='col-search'>
                        <Row align={"middle"} justify={"start"} wrap={false}>
                            <Col xs={4} sm={4} lg={2} xl={4}>
                                <img className='icon-search' src={calendar_icon} />
                            </Col>
                            <Col xs={20} sm={20} lg={22} xl={20}>
                                <div>
                                    <div className='label-ipt-search'>Ngày kết thúc</div>
                                    <DatePicker
                                        className='w-100'
                                        placeholder='Ngày kết thúc?'
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} lg={24} xl={3}>
                        <Button className='btn-search'>Tìm kiếm</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SearchBar