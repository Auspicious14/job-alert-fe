import React from "react";
import { Button, TextInput, SelectInput } from "@/components";
import { Formik } from "formik";
import { useJobState } from "../context";

const jobTypes = [
  { value: "full-time", label: "Full Time" },
  { value: "part-time", label: "Part Time" },
  { value: "contract", label: "Contract" },
];
export const CreateJobPage = () => {
  const { loading, createJob } = useJobState();

  if (loading) return <div>Loading jobs...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Job Management</h1>

      <section className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Post New Job</h2>
        <Formik
          initialValues={{
            title: "",
            description: "",
            location: "",
            type: "",
            salaryRange: "",
            company: "",
          }}
          onSubmit={(values, { resetForm }) => {
            createJob(values);
            resetForm();
          }}
        >
          {({ handleSubmit }) => (
            // Structured form with grid layout and validation
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Post New Position
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <TextInput
                      label="Job Title"
                      name="title"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <SelectInput
                      label="Employment Type"
                      name="type"
                      options={jobTypes}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    <TextInput label="Company Name" name="company" required />
                    <TextInput label="Location" name="location" required />
                  </div>
                </div>

                <TextInput
                  type="textarea"
                  label="Position Description"
                  name="description"
                  rows={4}
                />

                <div className="flex justify-end">
                  <Button type="submit">Publish Position</Button>
                </div>
              </form>
            </section>
          )}
        </Formik>
      </section>
    </div>
  );
};
