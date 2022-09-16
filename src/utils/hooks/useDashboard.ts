import { toast } from "react-toastify";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { getJobById, getJobList } from "../Apis/Api";
import { TypeCandidate, TypeJobResponse } from "../types";

const useDashboard = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [allJobs, setAllJobs] = useState<TypeJobResponse[]>([]);
  const [jobsMeta, setJobsMeta] = useState<{ count: number; limit: number }>();
  const [jobsLoading, setJobsLoading] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<string | undefined>();
  const [candidatesByJob, setCandidatesByJob] = useState<TypeCandidate[]>([]);
  const [isCandidateLoading, setIsCandidateLoading] = useState<boolean>(false);

  const totalPages = useMemo(() => {
    if (jobsMeta) {
      return Math.floor(jobsMeta?.count / jobsMeta?.limit);
    }
    return 0;
  }, [jobsMeta]);
  const [activePage, setActivePage] = useState<number>(0);
  const getAllJobs = async (page?: number) => {
    try {
      setJobsLoading(true);
      const res = await getJobList(page);
      if (res?.data?.data) {
        const data = res?.data?.data?.data;
        setAllJobs(data);
        setJobsMeta(res?.data?.data?.metadata);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      console.error("Error getting job list", error);
    }
    setJobsLoading(false);
  };
  const getCandidatesByJob = async () => {
    try {
      setIsCandidateLoading(true);
      if (selectedJob) {
        const res = await getJobById(selectedJob);
        if (res?.data?.data) {
          setCandidatesByJob(res?.data?.data);
        }
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      console.error("Error getting job detail", error);
    }
    setIsCandidateLoading(false);
  };
  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else {
      getAllJobs(activePage !== 0 ? activePage + 1 : undefined);
    }
  }, [isFirstLoad, activePage]);

  useEffect(() => {
    if (selectedJob !== undefined) {
      getCandidatesByJob();
    }
  }, [selectedJob]);

  return {
    allJobs,
    jobsMeta,
    jobsLoading,
    selectedJob,
    setSelectedJob,
    isCandidateLoading,
    candidatesByJob,
    totalPages,
    activePage,
    setActivePage,
  };
};

export default useDashboard;
