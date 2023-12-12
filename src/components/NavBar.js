import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import notes from './notesPic.png';

function NavBar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <img
                src={notes}
                class="img-fluid rounded-top"
                alt="notes" width={200}
            />
            
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/Notes">Notes</a>
				<a href="/Contact">Contact Us</a>
				<a href="/About">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default NavBar;