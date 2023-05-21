import { TextField, Typography, Container, Stack, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { createHmac } from "crypto";

const key = process.env.SECRET_KEY;
console.log(key);

const validationSchema = yup.object({
  username: yup
    .string("Enter your fullname")
    .min(2, "Minimum 2 characters required.")
    .max(30, "Maximum 30 characters allowed.")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(3, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const formikk = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const hash = createHmac("sha256", key)
        .update(values.password)
        .digest("hex");
      const hashValues = {
        username: values.username,
        email: values.email,
        password: hash,
      };
      const postData = async () => {
        const sendData = await fetch("/api/feedback", {
          method: "POST",
          body: JSON.stringify(hashValues),
        });
        return sendData.json();
      };

      (async () => {
        const response = await postData();
        console.log(response.message);
      })();
    },
  });

  return (
    <Container>
      <Typography marginBottom={2} variant="h6">
        Formik testing
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2} width="50%">
          <TextField
            id="username"
            name="username"
            label="Full Name"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default formikk;
