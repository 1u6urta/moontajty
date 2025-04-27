"use client";

import HerosShape from "@/_Components/HerosShape";
import { useState, ChangeEvent } from "react";
// import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

const Register = () => {
  const [step, setStep] = useState(1);
  // const searchParams = useSearchParams();
  const t = useTranslations("RegisterPage");
  const [countryCode, setCountryCode] = useState("+213");

  const countryCodes = [
    { code: "+33", country: "France" },
    { code: "+1", country: "États-Unis" },
    { code: "+44", country: "Royaume-Uni" },
    { code: "+49", country: "Allemagne" },
    { code: "+34", country: "Espagne" },
    { code: "+39", country: "Italie" },
    { code: "+212", country: "Maroc" },
    { code: "+213", country: "Algérie" },
    { code: "+216", country: "Tunisie" },
    { code: "+32", country: "Belgique" },
    { code: "+41", country: "Suisse" },
    { code: "+352", country: "Luxembourg" },
    { code: "+31", country: "Pays-Bas" },
    { code: "+351", country: "Portugal" },
  ];
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    password: "",
    confirmPassword: "",
    phoneOTP: "",
    emailOTP: "",
    countryCode: countryCodes,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     phone: e.target.value,
  //   }));
  // };

  const sendOTP = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSuccessMessage(t("otpSentSuccess"));
    setStep(2);
  };

  const verifyOTP = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSuccessMessage(t("registerSuccess"));
  };

  return (
    <div className="loginPage">
      <div className="login">
        <div className="logincontainer">
          <div className="form-container sign-in-container">
            <form action="#" className="register-form">
              <h1>{t("createAccount")}</h1>

              {step === 1 && (
                <>
                  <div className="input-group w-full">
                    <label htmlFor="email">{t("email")}</label>
                    <input
                      type="email"
                      name="email"
                      placeholder={t("email")}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group w-full">
                    <label htmlFor="email">{t("phone")}</label>
                  <div className="phone-input-group">
                    <select
                      className="country-code"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code} ({country.country})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder={t("phone")}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  </div>

                  <button type="button" onClick={sendOTP}>
                    {t("sendOTP")}
                  </button>

                  {successMessage && (
                    <div className="success-message">{successMessage}</div>
                  )}
                </>
              )}

              {step === 2 && (
                <>
                  <h2>{t("otpVerification")}</h2>
                  <div className="input-group">
                    <label htmlFor="phoneOTP">{t("phoneOTP")}</label>
                    <input
                      type="text"
                      name="phoneOTP"
                      placeholder={t("phoneOTP")}
                      value={formData.phoneOTP}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="emailOTP">{t("emailOTP")}</label>
                    <input
                      type="text"
                      name="emailOTP"
                      placeholder={t("emailOTP")}
                      value={formData.emailOTP}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="button" onClick={verifyOTP}>
                    {t("verify")}
                  </button>
                  <button
                    type="button"
                    className="ghost"
                    onClick={() => setStep(1)}
                  >
                    {t("back")}
                  </button>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="input-group">
                    <label htmlFor="firstName">{t("firstName")}</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder={t("firstName")}
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="lastName">{t("lastName")}</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder={t("lastName")}
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="birthdate">{t("birthdate")}</label>
                    <input
                      type="date"
                      name="birthdate"
                      value={formData.birthdate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="gender">{t("gender")}</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{t("selectGender")}</option>
                      <option value="male">{t("male")}</option>
                      <option value="female">{t("female")}</option>
                    </select>
                  </div>
                  <button type="button" onClick={() => setStep(4)}>
                    {t("next")}
                  </button>
                  <button
                    type="button"
                    className="ghost"
                    onClick={() => setStep(2)}
                  >
                    {t("back")}
                  </button>
                </>
              )}
              {step === 4 && (
                <>
                  <div className="input-group">
                    <label htmlFor="password">{t("password")}</label>
                    <input
                      type="password"
                      name="password"
                      placeholder={t("password")}
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="confirmPassword">
                      {t("confirmPassword")}
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder={t("confirmPassword")}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="button" onClick={handleSubmit}>
                    {t("register")}
                  </button>
                  <button
                    type="button"
                    className="ghost"
                    onClick={() => setStep(3)}
                  >
                    {t("back")}
                  </button>
                </>
              )}

              <div className="links">
                <Link href="/login">{t("alreadyHaveAccount")}</Link>
              </div>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>{t("welcomeTitle")}</h1>
                <p>{t("welcomeText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HerosShape />
    </div>
  );
};

export default Register;
