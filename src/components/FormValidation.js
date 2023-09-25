import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);

  const onNextStep = async () => {
    if (step === 1) {
      await handleSubmit((data) => {
        console.log(data);
        setStep(step + 1);
      })();
    } else if (step === 2) {
      console.log("second step");
      await handleSubmit((data) => {
        console.log(data);
        setStep(step + 1);
        alert(JSON.stringify(data));
        console.log(watch(data));
      })();
    }

    // console.log(isStepValid, "is step valid");
  };
  //   const onSubmit = (data, event) => {
  //     console.log("TRYING OT SUBMIT");
  //     console.log("Form submitted with data:", data);
  //     // if (step === 1) {
  //     //   setStep(2);
  //     //   event.preventDefault();
  //     // } else if (step === 2) {
  //     //   event.preventDefault();
  //     //   alert(JSON.stringify(data));
  //     //   console.log(watch(data));
  //     // }
  //     console.log(event, data);
  //   };

  return (
    <div>
      <div className="w-96 m-40 text-left">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          {step === 1 && (
            <div>
              <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                First Name
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
                <p className="text-red-500">First name is required</p>
              )}
              {errors?.firstName?.type === "pattern" && (
                <p className="text-red-500">Alphabetical characters only</p>
              )}

              {(errors?.firstName?.type === "minLength" ||
                errors?.firstName?.type === "maxLength") && (
                <p className="text-red-500">
                  Name must be greater than 2 characters and less than 25
                </p>
              )}

              <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                Last Name
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
                  Name must be greater than 2 characters and less than 25
                </p>
              )}

              {errors?.lastName?.type === "required" && (
                <p className="text-red-500">Last name is required</p>
              )}
              {errors?.lastName?.type === "pattern" && (
                <p className="text-red-500">Alphabetical characters only</p>
              )}
              {errors && (
                <button
                  type="button"
                  onClick={onNextStep}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
                >
                  Next
                </button>
              )}
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                Username
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
                <p className="text-red-500">Username is required</p>
              )}
              {errors?.username?.type === "maxLength" && (
                <p className="text-red-500">
                  Username should be less than 20 characters
                </p>
              )}

              <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                Email
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
                <p className="text-red-500">Email is required</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="text-red-500">
                  Please write correct email address
                </p>
              )}

              <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                Password
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
                    /^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                })}
              />

              {errors?.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors?.password?.type === "minLength" && (
                <p className="text-red-500">
                  Your password must be greater than 8 characters
                </p>
              )}

              {/* {errors?.password?.type === "pattern" && (
                <p className="text-red-500">
                  Your password isn't strong enough
                </p>
              )} */}

              <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                Confirm Password
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
                <p className="text-red-500">Please confirm your password</p>
              )}
              {errors?.passwordConfirm?.type === "validate" && (
                <p className="text-red-500">Passwords do not match</p>
              )}

              <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                <input
                  type="checkbox"
                  {...register("termsAndConditions", {
                    required: true,
                  })}
                />
                I accept the terms and conditions
              </label>

              {errors?.termsAndConditions?.type === "required" && (
                <p className="text-red-500">
                  Please accept the terms and conditions
                </p>
              )}

              <button
                type="button"
                onClick={onNextStep}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
