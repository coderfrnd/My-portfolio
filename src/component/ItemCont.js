import Item from "./Item";
import { Email, Github, Resume, Codeforces } from "./Menu";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={Email} title="Email" />
      <Item Links={Github} title="Github" />
      <Item Links={Resume} title="Resume" />
      <Item Links={Codeforces} title="Codeforces" />
    </div>
  );
};

export default ItemsContainer;