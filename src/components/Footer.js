import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    padding: 10px 0;
    text-align: center;
    background: #000;
    color: #fff;
`;

export default function Footer() {
    var today = new Date();   
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    return (
    <FooterWrapper>
        <p>Wangdu Duntak</p>
        <p>{date}</p>
    </FooterWrapper>
    );
}