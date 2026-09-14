import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Plane,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isRegister) {
      alert(`Welcome, ${form.name}!`);
    } else {
      alert(`Login successful for ${form.email}`);
    }
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <span>
            <Plane size={22} />
          </span>

          Travel<span>Planner</span>
        </div>

        <div className="auth-heading">

          <h1>
            {isRegister
              ? "Create your account"
              : "Welcome back"}
          </h1>

          <p>
            {isRegister
              ? "Create an account and start planning your journeys."
              : "Login to continue planning your next journey."}
          </p>

        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {isRegister && (
            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <div className="input-wrapper">

                <User size={18} />

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>
          )}

          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <div className="input-wrapper">

              <Mail size={18} />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="input-wrapper">

              <Lock size={18} />

              <input
                id="password"
                name="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(
                    (current) => !current
                  )
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          <button
            type="submit"
            className="primary-button auth-submit"
          >
            {isRegister
              ? "Create Account"
              : "Login"}
          </button>

        </form>

        <div className="auth-switch">

          <span>
            {isRegister
              ? "Already have an account?"
              : "Don't have an account?"}
          </span>

          <button
            type="button"
            onClick={() =>
              setIsRegister(
                (current) => !current
              )
            }
          >
            {isRegister
              ? "Login"
              : "Create Account"}
          </button>

        </div>

        <Link
          to="/"
          className="auth-home-link"
        >
          Continue without login
        </Link>

      </div>

    </main>
  );
}