import styled from 'styled-components'

import Colors from '../../Utils/colors'

const NavItem = styled.li`
    font-size: 30px;
    margin-bottom: 30px;
    & > a {        
        position: relative;
        transition: all .1s ease-out;
        color: ${Colors.primaryText};
        &.active:after {
            left: 0;    
            bottom: -10px;  
            margin-top: 6px;  
            content: ' ';
            width: 22px;
            height: 2px;
            display: block;
            position: absolute;
            background: ${Colors.brandRed};        
        }
    }
    & :hover {
        color: ${Colors.brandRed};
    }
`

export default NavItem