import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LanguagePicker from "./LanguagePicker";
import SuccessDisplay from "./SuccessDisplay";
import { languageLabels } from "../translate";
import monkey1 from "../resources/monkey1.png";
import monkey2 from "../resources/monkey2.png";
import monkey3 from "../resources/monkey3.png";
import monkey4 from "../resources/monkey4.png";
import "../css/monkeyAnimations.css";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState("english");
  const [allStepsCompleted, setAllStepsCompleted] = useState(false);

  const labels = languageLabels[language];

  const onNextStep = async () => {
    if (step === 1) {
      await handleSubmit((data) => {
        setStep(step + 1);
      })();
    } else if (step === 2) {
      console.log("second step");
      await handleSubmit((data) => {
        console.log(data);
        setStep(step + 1);
        if (step === 2 && Object.keys(errors).length === 0) {
          setAllStepsCompleted(true);
        }
        // alert(JSON.stringify(data));
        // console.log(watch(data));
      })();
    }
  };

  return (
    <div>
      <div>
        <LanguagePicker language={language} setLanguage={setLanguage} />
      </div>
      <img
        src={monkey1}
        alt="Monkey"
        className={`mb-4 absolute top-0 left-0 w-85 h-80 monkey-image ${
          allStepsCompleted && "monkey1"
        }`}
        style={{ zIndex: 1 }}
      />
      <img
        src={monkey2}
        alt="Monkey"
        className={`mb-4 absolute top-0 right-0 w-85 h-80 monkey-image ${
          allStepsCompleted && "monkey2"
        }`}
        style={{ zIndex: 1 }}
      />
      <img
        src={monkey3}
        alt="Monkey"
        className={`mb-4 absolute bottom-0 left-0 w-85 h-80 monkey-image ${
          allStepsCompleted && "monkey3"
        }`}
        style={{ zIndex: 1 }}
      />
      <img
        src={monkey4}
        alt="Monkey"
        className={`mb-4 absolute bottom-0 right-0 w-85 h-80 monkey-image ${
          allStepsCompleted && "monkey4"
        }`}
        style={{ zIndex: 1 }}
      />
      <div className="w-96 m-40 text-left">
        {allStepsCompleted ? (
          <SuccessDisplay
            userData={{
              firstName: watch("firstName"),
              lastName: watch("lastName"),
              username: watch("username"),
              email: watch("email"),
              password: watch("password"),
            }}
          />
        ) : (
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            {step === 1 && (
              <div>
                <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                  {labels.firstName}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  placeholder="Nina"
                  type="text"
                  {...register("firstName", {
                    required: true,
                    minLength: 2,
                    maxLength: 25,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />

                {errors?.firstName?.type === "required" && (
                  <p className="text-red-500">
                    {labels.errorMessages.firstNameRequired}
                  </p>
                )}
                {errors?.firstName?.type === "pattern" && (
                  <p className="text-red-500">
                    {labels.errorMessages.firstNamePattern}
                  </p>
                )}

                {(errors?.firstName?.type === "minLength" ||
                  errors?.firstName?.type === "maxLength") && (
                  <p className="text-red-500">
                    {labels.errorMessages.firstNameLength}
                  </p>
                )}

                <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                  {labels.lastName}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  placeholder="Nani"
                  type="text"
                  {...register("lastName", {
                    required: true,
                    minLength: 2,
                    maxLength: 25,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />

                {(errors?.lastName?.type === "minLength" ||
                  errors?.lastName?.type === "maxLength") && (
                  <p className="text-red-500">
                    {labels.errorMessages.lastNameLength}
                  </p>
                )}

                {errors?.lastName?.type === "required" && (
                  <p className="text-red-500">
                    {labels.errorMessages.lastNameRequired}
                  </p>
                )}
                {errors?.lastName?.type === "pattern" && (
                  <p className="text-red-500">
                    {labels.errorMessages.lastNamePattern}
                  </p>
                )}
                {errors && (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
                  >
                    {labels.nextButton}
                  </button>
                )}
              </div>
            )}

            {step === 2 && (
              <div>
                <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                  {labels.username}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="ArcticMonkey"
                  type="text"
                  {...register("username", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors?.username?.type === "required" && (
                  <p className="text-red-500">
                    {labels.errorMessages.usernameRequired}
                  </p>
                )}
                {errors?.username?.type === "maxLength" && (
                  <p className="text-red-500">
                    {labels.errorMessages.usernameMaxLength}
                  </p>
                )}
                <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                  {labels.email}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  placeholder="example@gmail.com"
                  type="email"
                  {...register("email", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p className="text-red-500">
                    {labels.errorMessages.emailRequired}
                  </p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p className="text-red-500">
                    {labels.errorMessages.emailPattern}
                  </p>
                )}
                <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                  {labels.password}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  placeholder="******"
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  })}
                />
                {errors?.password?.type === "required" && (
                  <p className="text-red-500">
                    {labels.errorMessages.passwordRequired}
                  </p>
                )}
                {errors?.password?.type === "minLength" && (
                  <p className="text-red-500">
                    {labels.errorMessages.passwordMinLength}
                  </p>
                )}
                {errors?.password?.type === "pattern" && (
                  <p className="text-red-500">
                    {labels.errorMessages.passwordStrength}
                  </p>
                )}
                <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                  {labels.confirmPassword}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="passwordConfirm"
                  placeholder="******"
                  type="password"
                  {...register("passwordConfirm", {
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
                />
                {errors?.passwordConfirm?.type === "required" && (
                  <p className="text-red-500">
                    {labels.errorMessages.confirmPasswordRequired}
                  </p>
                )}
                {errors?.passwordConfirm?.type === "validate" && (
                  <p className="text-red-500">
                    {labels.errorMessages.confirmPasswordValidate}
                  </p>
                )}
                <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                  <input
                    type="checkbox"
                    {...register("termsAndConditions", {
                      required: true,
                    })}
                  />
                  {labels.termsAndConditions}
                </label>
                {errors?.termsAndConditions?.type === "required" && (
                  <p className="text-red-500">
                    {labels.errorMessages.termsAndConditionsRequired}
                  </p>
                )}
                <button
                  type="button"
                  onClick={onNextStep}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
                >
                  {labels.submitButton}
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default FormValidation;
