import React from 'react'
import styled from 'styled-components';
function Login() {
    return (
        <Container>
            <ContentBox>
                <Logo1 src="/images/cta-logo-one.svg" />
                <SignUp>Get ALL There</SignUp>
                <Description>*Savings compared to 12 months of the monthly subscription price.</Description>
                <Logo2 src="/images/cta-logo-two.png" />
            </ContentBox>
        </Container>
    )
}

export default Login
const Container = styled.div `
    position: relative;
    height: calc(100vh - 70px);
    align-items: top;
    display: flex;
    justify-content: center;
    
    
    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background: url("/images/login-background.jpg") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:-1;
        opacity: 0.7;

    }   
`
const ContentBox = styled.div `
    display: flex;
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    
    flex-direction: column;
    margin-top: 100px;
    align-items: center;

`
const Logo1 = styled.img``
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }
    
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const Logo2 = styled.img`
    width: 90%;
`