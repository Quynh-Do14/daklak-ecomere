import { Row } from 'antd'
import React, { useState } from 'react'
import "../../asset/css/components/HomePage.css"
import RecommendFestival from './Recommend/RecommendFestival'
import RecommendToYou from './Recommend/RecommendToYou'
import RecommendTour from './Recommend/RecommendTour'
import RecommendPost from './Recommend/RecommendPost'
import BannerCommon from '../common/Banner'

const RecommendOption = [
    {
        id: 1,
        name: "Tour"
    },
    {
        id: 2,
        name: "Lễ hội"
    },
    {
        id: 3,
        name: "Hoạt động"
    },
    {
        id: 4,
        name: "Dịch vụ"
    },
    {
        id: 5,
        name: "Điểm đến"
    },
]
const HomePage = () => {
    const [isSelectTab, setIsSelectTab] = useState(1)

    const changeTab = (item) => {
        setIsSelectTab(item.id)
    };
    return (
        <>
            <BannerCommon />
            <RecommendToYou />
            <div className="recommended-tour">
                <Row className='row-title' justify={"center"} wrap={false}>
                    <div className='title'>
                        <span className='first-word'> Đề xuất</span>
                        <span className='second-word'> cho bạn</span>
                    </div>
                </Row>
                <Row justify={"center"}>
                    <div className='tab-list'>
                        {
                            RecommendOption.map((item, index) => (
                                <div onClick={() => changeTab(item)} className={`${item.id === isSelectTab ? "tab-select" : "tab-option"}`} key={index}>
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                </Row>
                {
                    isSelectTab === 1
                        ?
                        <RecommendTour />
                        :
                        <RecommendFestival />

                }
            </div>
            <Row className='row-title' justify={"center"} wrap={false}>
                <div className='title'>
                    <span className='first-word'> Tin tức</span>
                    <span className='second-word'> Hôm nay</span>
                </div>
            </Row>
            <RecommendPost />
        </>
    )
}

export default HomePage