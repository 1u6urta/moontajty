"use client";
import HerosShape from "@/_Components/HerosShape";
import { useEffect, useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import SocialButton from "@/_Components/SocialButton";
import Link from "next/link";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const r = useTranslations("RegisterPage");
  const t = useTranslations("LoginPage");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
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

  useEffect(() => {
    if (typeof document !== "undefined") {
      const logincontainer = document.querySelector(".logincontainer");
      if (isSignUp) {
        logincontainer?.classList.add("right-panel-active");
      } else {
        logincontainer?.classList.remove("right-panel-active");
      }
    }
  }, [isSignUp]);

  const handleSendOTP = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(
      `/register?email=${encodeURIComponent(email)}&code=${encodeURIComponent(countryCode)}&phone=${encodeURIComponent(phone)}`
    );
  };

  return (
    <div className="loginPage">
      <div className="login">
        <div className="logincontainer" id="logincontainer">
          <div className="form-container sign-up-container">
            <form action="#" onSubmit={handleSendOTP}>
              <h1>{r("createAccount")}</h1>
              <div className="social-container">
                <SocialButton />
              </div>
              <span>{t("emailForRegistration")}</span>

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
                  placeholder={r("phone")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <input
                type="email"
                placeholder={r("email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">{r("register")}</button>
              <button
                className="SwitchButton"
                type="button"
                onClick={() => setIsSignUp(false)}
              >
                {t("signIn")}
              </button>
            </form>
          </div>

          <div className="form-container sign-in-container">
            <form action="#">
              <h1> {t("signIn")}</h1>
              <div className="social-container">
                <SocialButton />
              </div>
              <span>{t("useYourAccount")}</span>
              <input type="email" placeholder={r("email")} />
              <input type="password" placeholder={r("password")} />
              <Link href="/forgot-password">{t("forgotPassword")}</Link>
              <button type="submit">{t("login")}</button>
              <button
                className="SwitchButton"
                type="button"
                onClick={() => setIsSignUp(true)}
              >
                {t("signUp")}
              </button>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>{t("loginTitle")}</h1>
                <p>{t("loginText")}</p>
                <button className="ghost" onClick={() => setIsSignUp(false)}>
                  {t("signIn")}
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>{t('registerTitle')}</h1>
                <p>{t('registerText')}</p>
                <button className="ghost" onClick={() => setIsSignUp(true)}>
                {t("signUp")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HerosShape />
    </div>
  );
};

export default Login;
