import React, { useEffect, useState } from 'react'
import InputWithLabel from './login/InputWithLabel'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userId: "",
        userPw: "",
    });

    const handleChange = (prop) => (event) => {
        setUser({ ...user, [prop]: event.target.value });
        console.log(user);
    };

    const handleClickShowPw = () => {
        setUser({ ...user, showPw: !user.showPw });
    };

    const handleMouseDownPw = (event) => {
        event.preventDefault();
    };


    // useEffect(() => {
    //     const naverScript = document.createElement("script");

    //     naverScript.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    //     naverScript.type = "text/javascript";
    //     document.head.appendChild(naverScript);

    //     naverScript.onload = () => {
    //         const naverLogin = new window.naver.LoginWithNaverId({
    //             clientId: 'tO2j2iPpWPQQ1wzlM5MM', // Naver Client ID
    //             callbackUrl: "http://localhost:3000/NaverLoginLoading", //로그인 성공 이후 URL
    //             callbackHandle: true,
    //             isPopup: false, //로그인 팝업 여부
    //             loginButton: {
    //                 color: "green",
    //                 type: 3, //버튼 타입
    //                 height: 75, //배너 및 버튼 높이
    //             }
    //         });
    //         naverLogin.init();
    //         naverLogin.logout(); //네이버 로그인이 계속 유지되는 경우가 있음, 초기화시 로그아웃

    //     }
    // }, [])
    const logIn = async () => {
        localStorage.setItem("userId", user.userId);
        localStorage.setItem("userPw", user.userPw);
        console.log(user);
        await axios.post("/note/login", {
                userId : user.userId,
                userPw : user.userPw
            })
            .then((response) => {
                console.log(response.data);
                const statusCode = response.status;
                if (statusCode === 201) {
                    alert(
                        "로그인이 정상적으로 처리되었습니다. 메인페이지로 이동합니다!"
                    );
                    localStorage.setItem("user", user);
                    navigator("/Main");
                } else if (statusCode === 400) {
                    alert("로그인 실패!!");
                }
            }
            )
            .catch((error) => {
                console.log(error);
            });
    }
    const handleClick = "a";




    return (
        <div className='LoginAndRegisterContainer'>
            <div className='LoginForm'>
                <form>
                    <InputWithLabel
                        label="아이디"
                        name="userId"
                        placeholder="아이디"
                        value={user.userId}
                        onChange={handleChange("userId")} />
                    <InputWithLabel
                        label="비밀번호"
                        name="userPw"
                        placeholder="비밀번호"
                        type="userPw"
                        value={user.userPw}
                        onChange={handleChange("userPw")} />
                    <hr />
                    <input type="submit" value="Login" onClick={logIn} />
                </form>
                <div id="naverIdLogin"></div>
            </div>
        </div>
    )
}

export default Login
