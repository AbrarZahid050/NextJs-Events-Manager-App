import { forwardRef } from "react";
import { FormLabel, InputBase, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { IMaskInput } from "react-imask";

export const StyledLabel = styled(FormLabel)(() => ({
  "&.Mui-focused": { color: "#0062FF" },
  "&.Mui-error": { color: "#d32f2f" },
  color: "#282842",
  fontWeight: "500",
  fontSize: "16px",
}));

export const StyledInput = styled(InputBase)((input) => {
  return {
    border: `1px solid ${grey[200]}`,
    background: grey[100],
    borderRadius: 5,
    padding: "5px 8px",
    color: "#282842",
    fontSize: "16px",
    "&.Mui-focused": {
      border: `1px solid #0062FF`,
    },
    "&.Mui-error": { border: `1px solid #d32f2f` },
  };
});

export const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={Number}
      scale={2} // digits after point, 0 for integers
      signed={false} // disallow negative
      thousandsSeparator=","
      padFractionalZeros={false} // if true, then pads zeros at end to the length of scale
      normalizeZeros={true} // appends or removes zeros at ends
      radix="." // fractional delimiter
      // mapToRadix={["."]}
      inputRef={ref}
      onChange={() => {}}
      onAccept={(value) => {
        console.log(value, props.name);
        onChange({ target: { name: props.name, value } });
      }}
      overwrite
    />
  );
});
