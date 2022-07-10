import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

export default function VisualArtDetail() {
  return (
    <PageTemplate>
      <Link to="/visual-art">back</Link>
      <p>art1</p>
    </PageTemplate>
  );
}
