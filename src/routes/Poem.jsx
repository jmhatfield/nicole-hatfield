import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

export default function Poem() {
  return (
    <PageTemplate>
      <Link to="/poetry">back</Link>
      <p>poem1</p>
    </PageTemplate>
  );
}
