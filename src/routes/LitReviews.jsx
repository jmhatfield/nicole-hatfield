import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

export default function LitReviews() {
  return (
    <PageTemplate>
      <Link to="litReview1">litReview1</Link>
      <Outlet />
    </PageTemplate>
  );
}
