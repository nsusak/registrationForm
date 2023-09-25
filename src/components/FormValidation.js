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
  const [language, setLanguage] = useState("english");
  const languageLabels = {
    english: {
      english: "English",
      spanish: "Spanish",
      firstName: "First Name",
      lastName: "Last Name",
      username: "Username",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      termsAndConditions: "I accept the terms and conditions",
      nextButton: "Next",
      submitButton: "Submit",
      errorMessages: {
        firstNameRequired: "First name is required",
        firstNamePattern: "Alphabetical characters only",
        firstNameLength:
          "Name must be greater than 2 characters and less than 25",
        lastNameRequired: "Last name is required",
        lastNamePattern: "Alphabetical characters only",
        lastNameLength:
          "Name must be greater than 2 characters and less than 25",
        usernameRequired: "Username is required",
        usernameMaxLength: "Username should be less than 20 characters",
        emailRequired: "Email is required",
        emailPattern: "Please write correct email address",
        passwordRequired: "Password is required",
        passwordMinLength: "Your password must be greater than 8 characters",
        confirmPasswordRequired: "Please confirm your password",
        confirmPasswordValidate: "Passwords do not match",
        termsAndConditionsRequired: "Please accept the terms and conditions",
      },
    },
    spanish: {
      english: "Inglés",
      spanish: "Español",
      firstName: "Nombre",
      lastName: "Apellido",
      username: "Nombre de usuario",
      email: "Correo electrónico",
      password: "Contraseña",
      confirmPassword: "Confirmar contraseña",
      termsAndConditions: "Acepto los términos y condiciones",
      nextButton: "Siguiente",
      submitButton: "Enviar",
      errorMessages: {
        firstNameRequired: "Nombre es obligatorio",
        firstNamePattern: "Solo caracteres alfabéticos",
        firstNameLength:
          "El nombre debe tener más de 2 caracteres y menos de 25",
        lastNameRequired: "Apellido es obligatorio",
        lastNamePattern: "Solo caracteres alfabéticos",
        lastNameLength:
          "El apellido debe tener más de 2 caracteres y menos de 25",
        usernameRequired: "Nombre de usuario es obligatorio",
        usernameMaxLength:
          "El nombre de usuario debe tener menos de 20 caracteres",
        emailRequired: "Correo electrónico es obligatorio",
        emailPattern:
          "Por favor, escriba una dirección de correo electrónico válida",
        passwordRequired: "Contraseña es obligatoria",
        passwordMinLength: "Su contraseña debe tener más de 8 caracteres",
        confirmPasswordRequired: "Por favor, confirme su contraseña",
        confirmPasswordValidate: "Las contraseñas no coinciden",
        termsAndConditionsRequired:
          "Por favor, acepte los términos y condiciones",
      },
    },
  };

  const labels = languageLabels[language];

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
  };

  return (
    <div>
      <div>
        <div class="inline-flex mt-2">
          <button
            onClick={() => setLanguage("english")}
            class="bg-white hover:bg-orange-400 text-orange-800 font-bold py-2 px-4 rounded-l border"
          >
            {labels.english}
          </button>

          <button
            onClick={() => setLanguage("spanish")}
            class="bg-white hover:bg-orange-400 text-orange-800 font-bold py-2 px-4 rounded-r border"
          >
            {labels.spanish}
          </button>
        </div>
      </div>
      <div className="w-96 m-40 text-left">
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
                    /^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
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

              {/* {errors?.password?.type === "pattern" && (
                <p className="text-red-500">
                  Your password isn't strong enough
                </p>
              )} */}

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
      </div>
    </div>
  );
};

export default FormValidation;
