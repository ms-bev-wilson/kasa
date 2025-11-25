import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/LOGO.svg";
import "../styles/header.scss";

export default function Header() {
	return (
		<div className="header">
			<img className="header-logo" alt="Kasa logo" src={Logo} />
			<div className="nav">
				<Link to="/" className="home-link">Home</Link>
				<Link to="/about" className="about-link">About</Link>
			</div>
		</div>
	)
}
