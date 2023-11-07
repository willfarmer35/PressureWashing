import React, { useEffect, useState } from 'react'
import './NavBar.css';
import { BiAlignRight, FaBeer } from "react-icons/bi"
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
function NavBar() {
    const navigate = useNavigate()
    const { user } = useAuthContext()
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { logout } = useLogout()
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const handleSubmit = () => {
        logout()
        navigate('/sign-up')
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        
 
    
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Will's Cleaning Services
                        <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        <BiAlignRight /> 
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/services'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/review'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Reviews
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {!user && <button className='button-8' onClick={()=>navigate("/sign-up")}>SIGN UP</button>}
                    {user && <button onClick={handleSubmit} className='button-8'>Log Out</button>}
                </div>
            </nav>
        </>
    );
}
export default NavBar