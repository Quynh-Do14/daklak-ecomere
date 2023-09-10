import React from 'react'
import Header from '../Header'
import { Button, Col, DatePicker, Input, Row } from 'antd'
import '../../asset/css/components/Tour/ListTour.css'
import RecommendFestival from '../HomePage/Recommend/RecommendFestival'
import SearchBar from '../common/SearchBar'
import BannerCommon from '../common/Banner'

const ListFestival = () => {
    return (
        <>
            <Header />
            <BannerCommon />
            <SearchBar />
            <Row className='row-title' justify={"center"} wrap={false}>
                <div className='title'>
                    <span className='first-word'> Lễ hội</span>
                    <span className='second-word'> Nổi bật</span>
                </div>
            </Row>
            <RecommendFestival />
        </>
    )
}

export default ListFestival