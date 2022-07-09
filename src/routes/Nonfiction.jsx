import { Outlet } from "react-router";
import PageTemplate from "../components/PageTemplate";
import ListOfLinks from "../components/ListOfLinks";
import nonfiction from "../data/nonfiction.json";

export default function Nonfiction() {
  return (
    <PageTemplate>
      <ListOfLinks items={nonfiction} />
      <Outlet />
    </PageTemplate>
  );
}
