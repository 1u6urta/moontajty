"use client";
import HerosShape from "@/_Components/HerosShape";
import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ForgotPassword = () => {
  const t = useTranslations("ForgotPassword");
  
  const [step, setStep] = useState<number>(1);
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    countryCode: "+33",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

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

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMethod(e.target.value as "email" | "phone");
  };

  const sendResetCode = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSuccessMessage(
      t("sendCode") + ` ${method === "email" ? t("email") : t("phone")}`
    );
    setStep(2);
  };

  const verifyCode = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep(3);
  };

  const resetPassword = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSuccessMessage(t("resetSuccess"));
    setTimeout(() => {
      window.location.href = "/login";
    }, 3000);
  };

  return (
    <div className="loginPage">
      <div className="login">
        <div className="logincontainer">
          <div className="form-container sign-in-container">
            <form className="forgot-password-form">
              <h1>{t("title")}</h1>

              {step === 1 && (
                <>
                  <p>{t("methodSelection")}</p>

                  <div className="method-selection">
                    <div className="radio-group">
                      <input
                        type="radio"
                        id="email-method"
                        name="reset-method"
                        value="email"
                        checked={method === "email"}
                        onChange={handleMethodChange}
                      />
                      <label htmlFor="email-method">{t("emailMethod")}</label>
                    </div>

                    <div className="radio-group">
                      <input
                        type="radio"
                        id="phone-method"
                        name="reset-method"
                        value="phone"
                        checked={method === "phone"}
                        onChange={handleMethodChange}
                      />
                      <label htmlFor="phone-method">{t("phoneMethod")}</label>
                    </div>
                  </div>

                  {method === "email" ? (
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
                  ) : (
                    <div className="input-group w-full">
                      <label htmlFor="phone">{t("phone")}</label>
                      <div className="phone-input-container">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="country-code"
                        >
                          {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.code} ({country.country})
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          placeholder={t("phone")}
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  )}

                  <button type="button" onClick={sendResetCode}>{t("sendCode")}</button>

                  <div className="links">
                    <Link href="/login">{t("backToLogin")}</Link>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="success-message">{successMessage}</div>

                  <div className="input-group">
                    <label htmlFor="otp">{t("verificationCode")}</label>
                    <input
                      type="text"
                      name="otp"
                      placeholder={t("enterCode")}
                      value={formData.otp}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="button" onClick={verifyCode}>{t("verify")}</button>
                  <button type="button" className="ghost" onClick={() => setStep(1)}>{t("back")}</button>
                </>
              )}

              {step === 3 && (
                <>
                  <h2>{t("resetPassword")}</h2>

                  <div className="input-group">
                    <label htmlFor="newPassword">{t("newPassword")}</label>
                    <input
                      type="password"
                      name="newPassword"
                      placeholder={t("newPassword")}
                      value={formData.newPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="confirmPassword">{t("confirmPassword")}</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder={t("confirmPassword")}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="button" onClick={resetPassword}>{t("resetPassword")}</button>
                  <button type="button" className="ghost" onClick={() => setStep(2)}>{t("back")}</button>
                </>
              )}

              {step === 3 && successMessage && (
                <div className="success-message">
                  {successMessage}
                </div>
              )}
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>{t("title")}</h1>
                <p>{t("methodSelection")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HerosShape />
    </div>
  );
};

export default ForgotPassword;
