import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="w-11/12 lg:w-5/6 mx-auto tabs tabs-lifted">
      {categories.map((categorie) => (
        <NavLink
          key={categorie.category}
          to={`/category/${categorie.category}`}
          role="tab"
          className={({ isActive }) => `tab ${isActive ? "tab-active" : ""}`}
        >
          {categorie.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
