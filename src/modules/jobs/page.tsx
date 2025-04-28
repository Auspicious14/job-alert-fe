import React, { useEffect } from "react";
import { useJobState } from "./context";

export const JobsPage = () => {
  const { jobs, fetchJobs } = useJobState();

  useEffect(() => {
    fetchJobs();
  }, []);

  // if (loading) return <div>Loading jobs...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Job Management</h1>
      <section className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Open Positions</h2>
          <a
            href="/jobs/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Post New Job
          </a>
        </div>

        {/* Responsive table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  Company
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  Location
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {job.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {job.company}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {job.location}
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                      {job.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
