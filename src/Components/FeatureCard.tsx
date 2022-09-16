import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const FeatureCard = (props: Props) => {
  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-blue text-22 w-3/4">{props.title}</h2>
      <p className="text-14 mt-7">{props.subTitle}</p>
    </div>
  );
};

export default FeatureCard;
