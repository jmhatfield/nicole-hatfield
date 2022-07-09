import { Outlet } from "react-router";
import PageTemplate from "../components/PageTemplate";
import ListOfLinks from "../components/ListOfLinks";
import poems from "../data/poems.json";

export default function Poetry() {
  return (
    <PageTemplate>
      <ListOfLinks items={poems} />
      <Outlet />
    </PageTemplate>
  );
}
