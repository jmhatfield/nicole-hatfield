import { Outlet } from "react-router-dom";
import ListOfLinks from "../components/ListOfLinks";
import PageTemplate from "../components/PageTemplate";
import litReviews from "../data/litReviews.json";

export default function LitReviews() {
  return (
    <PageTemplate>
      <ListOfLinks items={litReviews} />
      <Outlet />
    </PageTemplate>
  );
}
