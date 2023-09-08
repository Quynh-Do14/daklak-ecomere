import React, { useState } from 'react'
import BannerCommon from '../common/Banner'
import { Col, Row } from 'antd'
import InputCheckout from '../common/Input/InputCheckout'
import "../../asset/css/components/Checkout/Checkout.css"
import location_icon from "../../asset/img/location_icon.png"

const data = {
  id: 1,
  name: "Two Hour Walking Tour of Manhattan",
  mainImg: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/bridge-over-water-near-city-buildings-during-night-time-110x110.jpg",
  img: [
    {
      id: 1,
      img: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_55990430.jpg',
    },
    {
      id: 2,
      img: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/51480_2333eb37.jpg',
    },
    {
      id: 3,
      img: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/51480_490031d3.jpg',
    },
    {
      id: 4,
      img: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_55990430.jpg',
    },
    {
      id: 5,
      img: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/51480_490031d3.jpg',
    },
  ],
  description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  star: 5,
  review: 3,
  location: "Los Angelese",
  duration: 2,
  type: "Tây Bắc",
  date: "14/02/2023",

}
const CheckoutBookingTour = () => {

  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState({});
  const [dataCheckout, setDataCheckout] = useState({

  })

  return (
    <>
      <BannerCommon />
      <Row gutter={[30, 30]} className='row-checkout'>
        <Col span={16}>
          <div className='checkout-title'>Thủ tục thanh toán</div>
          <Row gutter={[30, 30]} className='row-input'>
            <Col span={12}>
              <InputCheckout
                label={"Họ và tên"}
                attribute={'userName'}
                isRequired={true}
                disabled={false}
                isText={false}
                // data={userName}
                validate={validate}
                setValidate={setValidate}
              />
            </Col>
            <Col span={12}>
              <InputCheckout
                label={"Số điện thoại"}
                attribute={'phoneNumber'}
                isRequired={true}
                disabled={false}
                isText={false}
                // data={userName}
                validate={validate}
                setValidate={setValidate}
              />
            </Col>
          </Row>

          <Row gutter={[30, 30]} className='row-input'>
            <Col span={12}>
              <InputCheckout
                label={"Email"}
                attribute={'email'}
                isRequired={true}
                disabled={false}
                isText={false}
                // data={userName}
                validate={validate}
                setValidate={setValidate}
              />
            </Col>
            <Col span={12}>
              <InputCheckout
                label={"Địa chỉ"}
                attribute={'address'}
                isRequired={true}
                disabled={false}
                isText={false}
                // data={userName}
                validate={validate}
                setValidate={setValidate}
              />
            </Col>
          </Row>

          <Row gutter={[30, 30]} className='row-input'>
            <Col span={12}>
              <InputCheckout
                label={"Email"}
                attribute={'email'}
                isRequired={true}
                disabled={false}
                isText={false}
                // data={userName}
                validate={validate}
                setValidate={setValidate}
              />
            </Col>
            <Col span={12}>
              <InputCheckout
                label={"Địa chỉ"}
                attribute={'address'}
                isRequired={true}
                disabled={false}
                isText={false}
                // data={userName}
                validate={validate}
                setValidate={setValidate}
              />
            </Col>
          </Row>


        </Col>
        <Col span={8}>
          <div className='checkout-title'>Lịch trình đã đặt</div>
          <div className='booking-info'>
            <Row className='row-img-name' justify={"space-between"} wrap={false}>
              <Col>
                <img className='img-checkout' src={data.mainImg} />
              </Col>
              <Col>
                <div className='name-checkout'>{data.name} </div>
                <Row justify={"start"}>
                  <Col>
                    <img className='icon-checkout' src={location_icon} />
                  </Col>
                  <Col className='location-checkout'> {data.location}</Col>
                </Row>
              </Col>
            </Row>

            <Row className='row-info' justify={'space-between'}>
              <Col className='label-info-checkout'>Danh mục Tour</Col>
              <Col className='value-info-checkout'>{data.type} </Col>
            </Row>

            <Row className='row-info' justify={'space-between'}>
              <Col className='label-info-checkout'>Khởi hàng</Col>
              <Col className='value-info-checkout'>{data.date} </Col>
            </Row>

            <Row className='row-info' justify={'space-between'}>
              <Col className='label-info-checkout'>Thời gian</Col>
              <Col className='value-info-checkout'>{data.duration} giờ</Col>
            </Row>

            <Row className='row-info' justify={'space-between'}>
              <Col className='label-info-checkout'>Đánh giá</Col>
              <Col className='value-info-checkout'>{data.star} </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default CheckoutBookingTour