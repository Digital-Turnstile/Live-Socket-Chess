import styled from 'styled-components';
import Link from 'next/link'
import { Theme, Button } from '../../globalStyles'

const StyledLink = ({ as, children, className, href }) => (
    <Link href={href} as={as} passHref>
        <a className={className}>{children}</a>
    </Link>
)


export const NavbarWrapper = styled.div`
    background-color: #fff;
    position: fixed;
    top: 0;
    height: 100px;
    width: 100%;
    z-index: 999;
`

export const TabWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 25px;
`




export const NavLink = styled(StyledLink)`
    ${({ active }) => active && `
        border-bottom: 6px solid ${Theme.purple};
        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
    `}

`
