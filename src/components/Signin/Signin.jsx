import React, { useState } from "react";

const Signin = ({ onRouteChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          onRouteChange("home");
        }
      });
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw5 center">
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>

            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email">
                Email
              </label>

              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                id="email"
                name="email"
                onChange={onEmailChange}
              />
            </div>

            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>

              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                id="password"
                name="password"
                onChange={onPasswordChange}
              />
            </div>

            <div>
              <button
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                onClick={onSubmit}
              >
                Sign in
              </button>
            </div>

            <div className="lh-copy mt3">
              <a
                onClick={() => onRouteChange("register")}
                href="#0"
                className="f6 link dim black db pointer"
              >
                Register
              </a>
            </div>
          </fieldset>
        </form>
      </main>
    </article>
  );
};

export default Signin;
