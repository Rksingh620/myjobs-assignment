import React from "react";

type Props = {
  name: string;
  skills: string;
  email: string;
};

const ApplicantCard = (props: Props) => {
  return (
    <div className="md:w-[300px] w-full shadow p-3 rounded border border-gray-400 bg-white cursor-pointer hover:shadow-sm">
      <div className="flex gap-2 ">
        <img
          src="https://picsum.photos/40/40"
          className="rounded-full h-10 w-10"
        />
        <div className="overflow-hidden">
          <p className=" font-semibold text-15 break-words">{props?.name}</p>
          <p className="text-15 break-words">{props?.email}</p>
        </div>
      </div>
      <div className="px-3">
        <p className="font-semibold py-2 mt-3 text-13">Skills</p>
        <p className="text-15">{props?.skills}</p>
      </div>
    </div>
  );
};

export default ApplicantCard;
