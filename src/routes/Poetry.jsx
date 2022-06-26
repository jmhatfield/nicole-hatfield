import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

export default function Poetry() {
  return (
    <PageTemplate>
      <Link to="poem1">poem1</Link>
      <Outlet replace={true} />
    </PageTemplate>
  );
}
