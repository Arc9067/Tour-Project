import Image from "./assets/img.png";

const Tour = ({ id, name, info, image, price, handleClick }) => {
  return (
    <div className="w-full md:w-80 b relative flex flex-col gap-4 shadow-lg">
      <div className="absolute right-0 bg-primary p-1 text-white">{price}</div>
      <img src={image} alt="" className="w-full h-full md:h-44 object-cover " />
      <div className="p-3 flex flex-col gap-4">
        <h3 className="text-center font-bold text-xl tracking-wide mt-4">
          {name}
        </h3>
        <p className="text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          blanditiis aliquam, accusantium explicabo fugit ea odio culpa
          consectetur minima aperiam!
        </p>
        <button
          className="p-1 border capitalize border-primary"
          onClick={() => {
            handleClick(id);
          }}
        >
          not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
