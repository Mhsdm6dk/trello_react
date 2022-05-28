
import React, { useState } from 'react'
import axiosConfig from '../../share/axiosConfig';
import SignupComponent from './component/SignupComponent'

function SignupContainer(props) {
    const [userNameInput, setUserNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [passwordAgainInput, setPasswordAgainInput] = useState('');
    const [telephoneInput, setTelephoneInput] = useState('');
    const handleOTPChange = (data) => {
        console.log(data);
    }
    const signup = () => {
        const regexp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (regexp.test(userNameInput) && passwordInput != '' && passwordInput === passwordAgainInput && telephoneInput != '') {
            axiosConfig.post(`/api/auth/register`, {
                birthDay: "2022-05-10T15:24:39.416Z",
                email: userNameInput,
                name: "string",
                password: passwordInput,
                phoneNumber: telephoneInput,
                userName: userNameInput
            })
                .then(() => {
                    alert('Đăng kí tài khoản thành công, vui lòng đăng nhập để sử dụng');
                    props.setShowSignup(false);
                })
                .catch(() => {
                    alert('Có lỗi xảy ra, vui lòng thử lại sau');
                })
        }
        else {
            alert('Bạn nhập thông tin chưa đúng, vui lòng kiểm tra lại');
        }
    }
    return (
        <SignupComponent signup={signup} telephoneInput={telephoneInput} setTelephoneInput={setTelephoneInput} handleOTPChange={handleOTPChange} userNameInput={userNameInput} setUserNameInput={setUserNameInput} passwordInput={passwordInput} setPasswordInput={setPasswordInput} passwordAgainInput={passwordAgainInput} setPasswordAgainInput={setPasswordAgainInput} setShowSignup={props.setShowSignup} />
    )
}

export default SignupContainer
