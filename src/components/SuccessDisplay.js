import React from "react";

const SuccessDisplay = ({ userData, labels }) => {
  const { firstName, lastName, username, email } = userData;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div
        className="border-b border-orange-500 text-orange-700 px-4 py-3 mb-7"
        role="alert"
      >
        <p className="font-bold">{labels.success}</p>
        <p className="text-md">{labels.successMessage}</p>
      </div>

      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-orange-900">
            {labels.applicantInfo}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-orange-500">
            {labels.applicationDetails}
          </p>
        </div>
        <div className="mt-6 border-t border-orange-100">
          <dl className="divide-y divide-orange-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-orange-900">
                {labels.fullName}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-orange-700 sm:col-span-2 sm:mt-0">
                {firstName} {lastName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-orange-900">
                {labels.username}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-orange-700 sm:col-span-2 sm:mt-0">
                {username}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-orange-900">
                {labels.email}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-orange-700 sm:col-span-2 sm:mt-0">
                {email}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SuccessDisplay;
