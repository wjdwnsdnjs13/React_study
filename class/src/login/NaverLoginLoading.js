import React, { useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const NaverLoginLoading = () => {
    const navigate = useNavigate();
    let token_data;
    useEffect(async () => { 

        try {
            // 토큰 호출
            const token = window.location.href.split('=')[1].split('&')[0]; // 토큰
            // const loginType = localStorage.getItem('loginType'); // 로그인 형식
            // console.log(loginType);
            console.log(token);

            // 유저 토큰 보내기
            // token_data = setSerLoginApi(token);

            //await 안 쓰면 통신 끝나기 전 넘어갈 수 있음 따라서 await 써줌.
            //await 쓰려면 async 안에서 써야함.
            await axios.post("/start", { access_token: token })
                .then((response) => {
                    console.log(response.data);
                    token_data = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });

            if (token_data != null) {
                if (true) {
                    navigate('/Main'/*, 
                        {state: {userType: ""}}
                    */)
                } else {
                    console.log("이상함.")
                    // 페이지 이동
                    navigate('/'/*, 
                    {state: {userType: ""}}
                */)
                }

            } else { // 데이터 실패

                // 오류 출력
                alert("[실패] 유저 데이터를 받지 못하였습니다.");

                // 페이지 이동
                navigate('/'/*, 
                {state: {
                    userType: ""
                }}
                */)

            }
        } catch (err) {
            console.log("Error >>", err);
        }
    }, []);
    return (
        <div>

        </div>
    )
}

export default NaverLoginLoading
