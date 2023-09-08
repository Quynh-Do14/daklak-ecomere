import React from 'react'
import { Button, Col, DatePicker, Input, Row } from 'antd'
import '../../asset/css/common/SearchBar.css'
import location_icon from "../../asset/img/location_icon.png"
import calendar_icon from "../../asset/img/calendar_icon.png"
const SearchBar = () => {
    return (
        <>
            <div className='container-search'>
                <Row gutter={20} className='form-search' align={"middle"} justify={"center"}>
                    <Col span={7} className='col-search'>
                        <Row align={"middle"} justify={"start"} wrap={false}>
                            <img className='icon-search' src={location_icon} />
                            <div>
                                <div className='label-ipt-search'>Tìm kiếm địa điểm</div>
                                <Input placeholder='Địa điểm muốn tìm kiếm?' />
                            </div>
                        </Row>
                    </Col>
                    <Col span={7} className='col-search'>
                        <Row align={"middle"} justify={"start"} wrap={false}>
                            <img className='icon-search' src={calendar_icon} />
                            <div>
                                <div className='label-ipt-search'>Ngày bắt đầu</div>
                                <DatePicker
                                    style={{ width: "100%" }}
                                    placeholder='Ngày bắt đầu?'
                                />
                            </div>
                        </Row>
                    </Col>
                    <Col span={7} className='col-search'>
                        <Row align={"middle"} justify={"start"} wrap={false}>
                            <img className='icon-search' src={calendar_icon} />
                            <div>
                                <div className='label-ipt-search'>Ngày kết thúc</div>
                                <DatePicker
                                    style={{ width: "100%" }}
                                    placeholder='Ngày kết thúc?'
                                />
                            </div>
                        </Row>
                    </Col>
                    <Col span={3}>
                        <Button className='btn-search'>Tìm kiếm</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SearchBar