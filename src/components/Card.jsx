const Card = ({ coffee }) => {
  console.log(coffee);
  const { image, name, category, type, origin, rating, popularity } =
    coffee || {};
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl text-gray-800 font-normal ">
      <figure>
        <img className="h-60 w-full" src={image} alt="Coffee" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black font-semibold text-2xl">
          Name: {name}
        </h2>
        <p className="text-base"> Category: {category}</p>
        <p className="text-base"> Type: {type}</p>
        <p className="text-base"> Origin: {origin}</p>
        <p className="text-base"> Rating: {rating}</p>
        <p className="text-base"> Popularity: {popularity}</p>
      </div>
    </div>
  );
};

export default Card;
