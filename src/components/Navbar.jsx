import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
	<nav className="navbar">
	  <button onClick={() => setOpen(!open)} className="hamburger">
		☰
	  </button>
	  <ul className={`nav-links ${open ? "open" : ""}`}>
		<li>
		  <Link to="/">Inicio</Link>
		</li>
		<li>
		  <Link to="/breadcrumbs">Breadcrumb</Link>
		</li>
	  </ul>
	</nav>
  );
}