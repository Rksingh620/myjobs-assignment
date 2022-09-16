import React from "react";
import emptyIcon from "../Assets/empty.svg";

type Props = {
  label: string;
  className?: string;
};

const Empty = ({ label }: Props) => {
  return (
    <div
      className={`bg-light2 h-full flex flex-col gap-10 items-center justify-center`}
    >
      <img src={emptyIcon} />
      <h2 className="text-xl text-light-dark">{label}</h2>
    </div>
  );
};

export default Empty;
