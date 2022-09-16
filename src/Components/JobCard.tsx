import React from "react";

import location from "../Assets/location.svg";

type Props = {
  title: string;
  subtitle: string;
  location: string;
  onSelect: () => void;
};
const JobCard = (props: Props) => {
  return (
    <div className=" shadow-sm p-3 rounded-lg border border-gray-300 bg-white md:w-[300px] w-full flex flex-col">
      <h3 className="text-xl font-semibold break-words">{props.title}</h3>
      <p className="break-words">{props.subtitle}</p>
      <div className="flex items-center gap-4 justify-between mt-auto">
        <div className="flex items-center  gap-2">
          <img src={location} alt={props.location} />
          <p className="font-semibold">
            {props.location.slice(0, 7)}
            {props.location?.length > 7 ? ".." : ""}
          </p>
        </div>
        <button
          className="bg-light text-light-dark font-semibold h-10 min-h-max p-2 rounded"
          onClick={props.onSelect}
        >
          View Applications
        </button>
      </div>
    </div>
  );
};

export default JobCard;
