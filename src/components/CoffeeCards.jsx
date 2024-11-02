import {
  NavLink,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const CoffeeCards = () => {
  const navigate = useNavigate();
  const AllData = useLoaderData();
  // console.log(categories);
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...AllData].filter(
        (data) => data.category === category
      );
      setCoffees(filterByCategory);
    } else {
      setCoffees(AllData.slice(0, 6));
    }
  }, [AllData, category]);
  console.log(coffees);

  return (
    <div className="w-11/12 lg:w-5/6 mx-auto">
      <NavLink
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        justify-items-center gap-6 py-8"
      >
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </NavLink>
      <button onClick={() => navigate("/coffees")} className="btn btn-success">
        View All
      </button>
    </div>
  );
};

export default CoffeeCards;
