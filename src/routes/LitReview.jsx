import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

export default function LitReview() {
  return (
    <PageTemplate>
      <Link to="/literature-reviews">back</Link>
      <p>litReview1</p>
    </PageTemplate>
  );
}
