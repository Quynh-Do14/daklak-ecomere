import React from 'react'
import "../../asset/css/components/HomePage.css"
import { Row } from 'antd'

const BannerCommon = () => {
    return (
        <div>
            <Row className='row-img'>
                <img className='img-banner' src='https://modmixmap.wpengine.com/wp-content/uploads/2022/06/bannermix-min.png' />
            </Row>
        </div>
    )
}

export default BannerCommon