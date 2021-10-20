import React from 'react'
import styled from 'styled-components'
function login1() {
    return (
        <Container>
            <ContentBox>
            </ContentBox>
            <TextArea>
                <Wrapper>
                    <span>Login with your email</span> 
                    <form>
                        <input aria-label="Email" display = "inline" id = "Txt_Email" placeholder="email" type="email"/>
                        <p />
                        <input type="submit" value="CONTINUE"  id = "Btn_Submit"/>
                    </form>
                </Wrapper>
            </TextArea>
        </Container>
    )
}

export default login1

const Container = styled.div`
min-height: calc(100vh - 70px);
position: relative;
justify-content: center;
display: flex;
background-color: rgb(26, 29, 41);    
    &:after {
        background-position: top;
        background-size: cover;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    
    }
`
const ContentBox = styled.div`
    background: url("/images/logo.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-position: top ;
    max-width: 400px;
    max-height: 30px;
    padding: 200px 80px;
    width: 11%;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
`
const TextArea = styled.div`
    position: absolute;
    min-height: 50vh;
    display:flex;
    align-items: center;
    margin-top: 200px;
    width: 100%;
    

`
const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 350px;
    max-width: 374px;
    padding-left: 30px;
    align-items: top;
    margin-top: 0px;
    overflow-x: visible;
    overflow-y: visible;
    width: 100%;
    
    cursor: pointer;
    span{
        align-items: top;
        justify-content: left;
        margin-top: 0px;
        margin-bottom: 18px;
        display: flex;
        padding-bottom: 0px;
        font-size: 22px;
        font-family: cursive ;
        font-display: initial;
        font-weight: bold;
        color: whitesmoke;
    }
    form{
        max-height: 350px;
        max-width: 350px;
        align-items: top;
        cursor: pointer;
        
        input{
            
            background-color: rgb(49, 52, 62);
            border: 1px solid transparent;
            color: #fff;
            font-size: 15px;
            font-stretch:normal;
            font-weight: normal;
            height: 48px;
            letter-spacing: 10;
            transition: all 0.1s ease 0s;
            width: 100%;
            border-radius: 10px;
            align-items: top;
            padding-top: 0px;
            padding-right: 24px;
            padding-bottom: 0px;
            padding-left: 24px;
            border-width:2px;
            cursor: horizontal-text;
            
            &:hover {
                
                transition: all 0.1s ease 0s;
            }
            
        }
        #Btn_Submit{
            color: #fff;
            background-color: rgb(0, 114, 210);
            border-radius: 10px;
            text-align: center;
            font-size: 15px;
            text-transform: uppercase;
            -webkit-box-align:center;
            
            display:flex ;
            font-family: Arial, sans-serif;
            font-stretch: normal;
            height: 48px;
            justify-content: center;
            letter-spacing: 1.5;
            line-height: 1.5;
            overflow: hidden;
            transition: all 0.2 ease-in-out 0s;
            width: 100%;
            opacity: 1;
            visibility: visible;
            &:hover {
                cursor: pointer;
                background-color: rgb(0, 100, 210);
                transition: all 0.1s ease 0s;
            }
        }

        }
          
    }
`