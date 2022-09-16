import React, { useMemo, useState } from "react";
import home from "../Assets/home.svg";
import Button from "../Components/Button";
import JobCard from "../Components/JobCard";
import useDashboard from "../utils/hooks/useDashboard";
import emptyIcon from "../Assets/empty.svg";
import Modal from "../Components/Modal";
import ApplicantCard from "../Components/ApplicantCard";
import Empty from "../Components/Empty";
import caretNext from "../Assets/caret-next.svg";
import caretPrev from "../Assets/caret-prev.svg";

type Props = {};

const Dashboard = (props: Props) => {
  const {
    jobsLoading,
    allJobs,
    jobsMeta,
    setSelectedJob,
    selectedJob,
    candidatesByJob,
    totalPages,
    setActivePage,
    activePage,
  } = useDashboard();
  return (
    <>
      <div className="flex gap-2 mt-3">
        <img src={home} alt="home" />
        <span className="text-white text-xs">Home</span>
      </div>
      <h3 className="text-2xl text-white py-6">Jobs posted by you</h3>

      <div className="flex gap-4 flex-wrap w-full">
        {allJobs?.length === 0 ? (
          <div className="h-[60vh] flex justify-center w-full">
            <div
              className={` h-full flex flex-col gap-10 items-center justify-center`}
            >
              <img src={emptyIcon} />
              <h2 className="text-xl text-light-dark">
                {"Your posted jobs will show here!"}
              </h2>
              <Button label="Post a Job" />
            </div>
          </div>
        ) : (
          allJobs?.map((job) => (
            <JobCard
              key={job?.id}
              title={job?.title}
              subtitle={job?.description}
              location={job?.location}
              onSelect={() => {
                setSelectedJob(job?.id);
              }}
            />
          ))
        )}
      </div>
      <div className="flex gap-3 mt-6 items-center">
        <img
          src={caretPrev}
          onClick={() => {
            if (activePage !== 0) {
              setActivePage((prev) => prev - 1);
            }
          }}
          className="cursor-pointer"
        />
        {Array(totalPages)
          .fill("")
          .map((_, i) => (
            <p
              onClick={() => {
                setActivePage(i);
              }}
              className={`${
                i === activePage ? "bg-light rounded" : ""
              } px-2 cursor-pointer`}
            >
              {i + 1}
            </p>
          ))}
        <img
          src={caretNext}
          onClick={() => {
            if (activePage < totalPages - 1) {
              setActivePage((prev) => prev + 1);
            }
          }}
          className="cursor-pointer"
        />
      </div>
      <Modal
        isOpen={!!selectedJob}
        onClose={() => {
          setSelectedJob(undefined);
        }}
        position="top"
        body={
          <div className=" px-4 py-2">
            <p className="text-lg pb-2">
              Total {candidatesByJob?.length} applicants
            </p>
            {candidatesByJob?.length === 0 ? (
              <div className="h-[60vh] sm:w-[35vw]">
                <Empty label="No applicants available!" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8 bg-light2 p-2">
                {candidatesByJob?.map((candidate, index) => (
                  <ApplicantCard
                    key={candidate?.id}
                    name={candidate?.name}
                    email={candidate?.email}
                    skills={candidate?.skills}
                  />
                ))}
              </div>
            )}
          </div>
        }
        title="Applicants for this job"
      />
    </>
  );
};

export default Dashboard;
