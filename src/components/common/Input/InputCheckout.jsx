import { Col, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import "../../../asset/css/common/InputCheckout.css"
const InputCheckout = (props) => {
    const {
        label, attribute, isRequired, setData,
        placeholder, disabled = false, isText, data,
        isPassword, validate, setValidate
    } = props

    const [value, setValue] = useState(null);

    const onChange = (e) => {
        setValue(e.target.value || null);
        setData(e.target.value || null);
    }
    useEffect(() => {
        if (data) {
            setValue(data);
        }
    }, [data]);
    return (
        <>
            <Row justify={"start"} className='label-input'>
                <Col className='label-text'>{label}</Col>
                <Col>
                    {
                        isRequired
                            ?
                            <div className='required-dot'>*</div>
                            :
                            null
                    }
                </Col>
            </Row>
            <Input
                style={{ width: "100%" }}
                disabled={disabled}
                value={value}
                onChange={onChange}
                placeholder={placeholder ? placeholder : `Nhập ${label}`}
            />
        </>
    )
}

export default InputCheckout