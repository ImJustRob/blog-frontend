import { Link } from "react-router-dom";

export function Header() {
    return (
      <header>
<Link to="/signup">Signup</Link>
<Link to="/login">Login</Link>
        </header>
    )
  }