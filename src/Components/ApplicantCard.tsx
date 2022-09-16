import React from "react";

type Props = {
  name: string;
  skills: string;
  email: string;
};

const ApplicantCard = (props: Props) => {
  return (
    <div className=" shadow p-3 rounded-lg border border-gray-400 bg-white cursor-pointer hover:shadow-sm">
      <div className="flex gap-2">
        <img
          src="https://picsum.photos/40/40"
          className="rounded-full h-10 w-10"
        />
        <div className="">
          <h3 className="text-xl font-semibold">{props?.name}</h3>
          <p>{props?.email}</p>
        </div>
      </div>
      <div className="px-3">
        <p className="font-semibold py-2 mt-3 ">Skills</p>
        <p>{props?.skills}</p>
      </div>
    </div>
  );
};

export default ApplicantCard;
