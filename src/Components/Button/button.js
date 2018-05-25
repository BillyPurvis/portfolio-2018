import styled from 'styled-components'

import Colors from '../../Utils/colors'

const Button = styled.a`
    color: #fff;
    display: inline-block;
    font-size: 14px;
    margin-top: 15px;
    cursor: pointer;
    padding: 12px 18px;
    text-align: center;        
    text-transform: uppercase;
    background: ${Colors.brandRed}
    font-family: 'Lato', sans-serif;    
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    
    &:before {
        z-index: 10;
        padding: 12px 18px;        
        content: 'Email Me!';
        top: 0;
        left: -100%;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;        
        position: absolute;  
        text-align: center;   
        transition: all .4s ease-out;           
        background: ${Colors.primaryText}
    }
    &:hover:before {
        left: 0;
    }
`
export default Button