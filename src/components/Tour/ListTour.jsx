import React from 'react'
import Header from '../Header'
import { Button, Col, DatePicker, Input, Row } from 'antd'
import '../../asset/css/components/Tour/ListTour.css'
import RecommendTour from '../HomePage/Recommend/RecommendTour'
import SearchBar from '../common/SearchBar'
import BannerCommon from '../common/Banner'

const ListTour = () => {
    return (
        <>
            <Header />
            <BannerCommon />
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