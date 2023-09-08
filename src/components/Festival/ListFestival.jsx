import React from 'react'
import Header from '../Header'
import { Button, Col, DatePicker, Input, Row } from 'antd'
import '../../asset/css/components/Tour/ListTour.css'
import RecommendFestival from '../HomePage/Recommend/RecommendFestival'
import SearchBar from '../common/SearchBar'

const ListFestival = () => {
    return (
        <>
            <Header />
            <Row className='row-img'>
                <img src='https://modmixmap.wpengine.com/wp-content/uploads/2022/06/bannermix-min.png' />
            </Row>
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