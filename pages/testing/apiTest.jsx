import { useState } from "react";

const apiTest = () => {
  const [formData, setFormData] = useState({});

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const validateHandler = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.log("password error!");
    }
  };

  return (
    <div>
      <form onSubmit={validateHandler}>
        <label>
          Enter your first name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName || ""}
            onChange={onChangeHandler}
          />
        </label>

        <div></div>

        <label>
          Enter your last name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName || ""}
            onChange={onChangeHandler}
          />
        </label>

        <div></div>

        <label>
          Enter your email:
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={onChangeHandler}
          />
        </label>

        <div></div>

        <label>
          Enter Password:
          <input
            type="password"
            name="password"
            value={formData.password || ""}
            onChange={onChangeHandler}
          />
        </label>

        <div></div>

        <label>
          Enter confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword || ""}
            onChange={onChangeHandler}
          />
        </label>

        <div></div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default apiTest;
