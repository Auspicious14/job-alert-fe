export interface IJob {
  id: string;
  title: string;
  description: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  salaryRange: string;
  company: string;
  postedAt: Date;
  applicants?: string[];
}

export interface IJobFilters {
  searchQuery?: string;
  location?: string;
  minSalary?: number;
  jobType?: string;
}

export interface IJobPayload {
  title: string;
  description: string;
  location: string;
  type: string | "full-time" | "part-time" | "contract";
  salaryRange: string;
  company: string;
}
