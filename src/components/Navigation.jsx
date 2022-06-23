import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Nicole Hatfield</Link>
      <Link to="/about">About</Link>
      <Link to="/poetry">Poetry</Link>
      <Link to="/literature-reviews">Literature Reviews</Link>
      <Link to="/visual-art">Visual Art</Link>
    </nav>
  );
}
