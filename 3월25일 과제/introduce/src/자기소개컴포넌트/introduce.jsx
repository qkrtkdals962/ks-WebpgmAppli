import React from "react";

function Header() {
    return <h1>나 자신을 소개합니다!</h1>;
}

function Introduce1(props) {
    return <p>저는 {props.school} {props.major} 21학번 {props.name} 입니다.
        현재 3학년이고 react를 배우며 이 자기소개페이지를 제작중입니다.
    </p>;
}

function Introduce2() {
    return <p>저는 C언어, HTML제작에 흥미를 갖고 있고 이후에 웹 개발자, 혹은 게임 개발자가 되고싶습니다.</p>;
}

function Contact() {
    return <p>전화번호 : 010-9953-7122
        이메일 : qkrtkdals268@naver.com
    </p>;
}

function Footer() {
    return <p>&copy;본 페이지는 react component를 사용하여 제작하였습니다.</p>;
}

export{ Header, Introduce1, Introduce2, Contact, Footer};