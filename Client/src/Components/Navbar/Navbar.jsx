import React, { useState, useContext, useEffect } from 'react'
import { IoTrophySharp, IoCompassSharp } from 'react-icons/io5'
import { FaChessKing } from 'react-icons/fa'
import { IconContext } from "react-icons";
import useLocalStorageState from 'use-local-storage-state'

import { Theme } from '../../globalStyles'
import {
    NavbarWrapper,
    TabWrapper,
    NavLink
} from './Navbar.elements'


export default function TopNavBar({activeTab}) {
    function Tab({ icon, name }) {
        return <IconContext.Provider value={{ color: Theme.darkPurple, size: '36' }}>
            <NavLink href={'/' + /*name*/ ""} active={activeTab  ? activeTab == name : false}>
                {icon}
            </NavLink>
        </IconContext.Provider>
    }



    return <NavbarWrapper>
        <TabWrapper>
            <Tab icon={<IoTrophySharp />} name='idk'/>
            <Tab icon={<FaChessKing />} name='home' />
            <Tab icon={<IoCompassSharp />} name='idk2'/>
        </TabWrapper>
    </NavbarWrapper>
}

