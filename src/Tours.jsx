import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

const Tours = () => {
  const url = "https://course-api.com/react-tours-project";
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetching() {
      const ft = await fetch(url);
      const resp = await ft.json();
      console.log(resp);
      setData(resp);
    }
    fetching();
  }, []);

  console.log(data);

  function handleClick(id) {
    const newData = data.filter((ele) => ele.id !== id);
    setData(newData);
  }

  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center p-6 md:p-6">
      <div className=" flex flex-col gap-5 max-w-5xl w-full">
        <h1 className="title flex justify-center capitalize text-4xl relative after:content-[''] after:bg-primary  after:w-[80%] after:h-1 after:mx-auto after:absolute after:top-12 after:w-36">
          our tours
        </h1>
        <div className="flex flex-wrap justify-between gap-y-20 mt-6">
          {data &&
            data.map((ele) => {
              const { id, name, info, image, price } = ele;
              return (
                <div key={id}>
                  <Tour {...ele} handleClick={handleClick} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Tours;
