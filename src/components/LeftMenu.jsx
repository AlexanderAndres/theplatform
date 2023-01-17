import React, { useState } from 'react'
import DropdownItem from './DropdownItem';
import { FcDownRight } from 'react-icons/fc';
import { motion } from 'framer-motion';

const LeftMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className={`menu-container`}>
            <div className="menu-trigger" onClick={toggleMenu}>
                <div className='left-menu'>Menu</div>
            </div>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <motion.ul>
                    <DropdownItem text={'Filtros'} />
                    <DropdownItem text={'Alertas'} />
                    <DropdownItem text={'Arbol usuarios'} />
                    <DropdownItem text={'Locales'} />


                </motion.ul>
            </div>
        </div>
    );
}

export default LeftMenu;