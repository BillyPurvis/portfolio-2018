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
    transition: all .1s ease-out;
    &:hover {
        background: ${Colors.darkerRed}
    }
`
export default Button