const Heading = ({title, subtitle}) => {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl lg:text-4xl text-black font-bold mb-5">{title}</h1>
      <p className="text-base font-normal">{subtitle}</p>
    </div>
  );
};

export default Heading;