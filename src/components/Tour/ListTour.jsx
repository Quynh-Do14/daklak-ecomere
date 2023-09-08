import React from 'react'
import Header from '../Header'
import { Button, Col, DatePicker, Input, Row } from 'antd'
import '../../asset/css/components/Tour/ListTour.css'
import RecommendTour from '../HomePage/Recommend/RecommendTour'
import SearchBar from '../common/SearchBar'

const ListTour = () => {
    return (
        <>
            <Header />
            <Row className='row-img'>
                <img src='https://modmixmap.wpengine.com/wp-content/uploads/2022/06/bannermix-min.png' />
            </Row>
            <SearchBar />
            <Row className='row-title' justify={"center"} wrap={false}>
                <div className='title'>
                    <span className='first-word'> Địa điểm</span>
                    <span className='second-word'> Du lịch</span>
                </div>
            </Row>
            <RecommendTour />
        </>
    )
}

export default ListTour