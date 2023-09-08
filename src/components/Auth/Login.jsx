import React, { useState } from 'react'
import '../../asset/css/components/Auth/Login.css'
const Login = () => {
    const [changeState, setChangeState] = useState(false);

    return (
        <div className='login'>
            <div className={changeState ? "container right-panel-active" : "container"} id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Tạo tài khoản mới?</h1>
                        <input type="text" placeholder="Nhập tên người dùng" />
                        <input type="email" placeholder="Nhập Email" />
                        <input type="password" placeholder="Nhập mật khẩu" />
                        <button>Đăng ký</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Đăng nhập</h1>
                        <input type="email" placeholder="Nhập Email" />
                        <input type="password" placeholder="Nhập mật khẩu" />
                        <a href="#">Quên mật khẩu?</a>
                        <button>Đăng nhập</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            {/* <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p> */}
                            <button className="ghost" id="signIn" onClick={() => setChangeState(false)}>Đăng nhập</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            {/* <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p> */}
                            <button className="ghost" id="signUp" onClick={() => setChangeState(true)}>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login