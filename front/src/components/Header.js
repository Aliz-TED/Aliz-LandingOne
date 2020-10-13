import React from 'react'
import logo from '../images/Typo.png'
export default function Header() {
    return (
        <div className="header-view">
            <nav className="container-fluid fixed-top">
                <a className="" href="/">
                    <img className="logo-header" src={logo} alt="Logo Aliz" />
                </a>
            </nav>
        </div>
    )
}
