import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const FeatureCard = (props: Props) => {
  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-blue text-2xl w-2/4">{props.title}</h2>
      <p className="">{props.subTitle}</p>
    </div>
  );
};

export default FeatureCard;
