import { createContext, useContext, useEffect, useState } from "react";
import { IJob, IJobPayload, IJobFilters } from "./model";
import { AxiosClient } from "@/components";
import toast from "react-hot-toast";
import { saveSubscription, sendNotification } from "@/lib/webPush";

type IJobState = {
  jobs: IJob[];
  loading: boolean;
  fetchJobs: (filters?: IJobFilters) => Promise<void>;
  createJob: (jobData: IJobPayload) => Promise<void>;
  currentJob: IJob | null;
  setCurrentJob: React.Dispatch<React.SetStateAction<IJob | null>>;
};

const JobContext = createContext<IJobState | undefined>(undefined);

export const useJobState = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }
  return context;
};

export const JobContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentJob, setCurrentJob] = useState<IJob | null>(null);

  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register("/sw.js");
          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
          });
          await saveSubscription(subscription.toJSON());
        } catch (error) {
          console.error("Service Worker registration failed:", error);
        }
      }
    };

    const requestNotificationPermission = async () => {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        registerServiceWorker();
      }
    };

    fetchJobs();
    requestNotificationPermission();
  }, []);

  const fetchJobs = async (filters?: IJobFilters) => {
    setLoading(true);
    try {
      const response = await AxiosClient.get("/api/jobs", { params: filters });
      const data = await response.data?.data;
      if (data) {
        setJobs(data);
      }
    } catch (error: unknown) {
      console.error({ error });
      toast.error("Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  const pushSubscriptions = async (title: string) => {
    const response = await AxiosClient.get("/subscribe");
    const subscriptions = response?.data?.data;
    if (subscriptions) {
      sendNotification(
        subscriptions,
        JSON.stringify({
          title: "New Job Alert",
          body: `New job posted: ${title}`,
        })
      );
    }
  };

  const createJob = async (jobData: IJobPayload) => {
    await pushSubscriptions(jobData?.title);
    try {
      const response = await AxiosClient.post("/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });
      const data = await response.data.data;
      if (data) {
        setJobs((prev) => [...prev, data]);
      }
    } catch (err) {
      console.error(err);

      toast.error("Failed to create job");
    }
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        fetchJobs,
        createJob,
        currentJob,
        setCurrentJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
