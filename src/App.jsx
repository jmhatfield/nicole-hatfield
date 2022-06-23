import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Nicole Hatfield</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/poetry">Poetry</Link>
        <Link to="/literature-reviews">Literature Reviews</Link>
        <Link to="/visual-art">Visual Art</Link>
      </nav>
    </div>
  );
}
