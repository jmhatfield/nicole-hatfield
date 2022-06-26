import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

export default function VisualArt() {
  return (
    <PageTemplate>
      <Link to="art1">art1</Link>
      <Outlet />
    </PageTemplate>
  );
}
