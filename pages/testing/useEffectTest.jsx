import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormControl, Box, Button, Stack, FormHelperText } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyledLabel,
  StyledInput,
  TextMaskCustom,
} from "../../components/styled-components/styles";

//yup schema:
const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Name is required.")
      .min(3, "enter atleast 3 digits."),
    billing_address: yup.object().shape({
      phone: yup.string().required("Phone is required"),
      amount: yup.string().required("Amount is required."),
    }),
  })
  .required("testing");

//component 2:
const Card2 = ({ register, error, control }) => {
  return (
    <>
      <FormControl>
        <StyledLabel>Phone</StyledLabel>
        <Controller
          name="billing_address.phone"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <StyledInput
                name="phone"
                value={value || ""}
                onChange={onChange}
                inputComponent={TextMaskCustom}
              />
            );
          }}
        />
        {error && error.phone && (
          <FormHelperText>{error.phone.message || ""}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <StyledLabel>Amount</StyledLabel>
        <Controller
          name="billing_address.amount"
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledInput
              name="amount"
              value={value || ""}
              onChange={onChange}
              inputComponent={TextMaskCustom}
            />
          )}
        />
        {error && error.amount && (
          <FormHelperText>{error.amount.message || ""}</FormHelperText>
        )}
      </FormControl>
    </>
  );
};

//main component:
const useEffectTest = () => {
  const [errors, setErrors] = useState("");
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    let amount = data.billing_address.amount;
    amount = amount.replaceAll(",", "");
    console.log(amount);
  };

  const onError = (error) => {
    console.log(error);
    setErrors(error);
  };

  const blurHandler = (e) => {
    const label = e.target.name;
  };

  console.log("rendering...");

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="500px"
    >
      <Stack spacing={2}>
        <FormControl required>
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            {...register("name", { required: "Name is required." })}
            onBlur={blurHandler}
          />
          {errors && errors.name && (
            <FormHelperText error>{errors.name.message}</FormHelperText>
          )}
        </FormControl>

        <Card2
          label="phone"
          register={register}
          control={control}
          error={errors.billing_address || null}
        />

        <Button
          variant="contained"
          onClick={handleSubmit(submitHandler, onError)}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default useEffectTest;
