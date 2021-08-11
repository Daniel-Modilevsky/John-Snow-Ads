import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";

import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import NumberFormat from "react-number-format";
import Input from "@material-ui/core/Input";


const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="00:00:00"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function InputAdornments(props) {
  const [minTime, setMinTime] = React.useState("10:10:00");
  const classes = useStyles();

  const [values, setValues] = React.useState({
    textmask: "00:00:00",
    numberformat: "1320",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  React.useEffect(() => {
    minimumTimeSetter();
  }, []);


  const minimumTimeSetter = () => {
    if (!props.min) {
      setMinTime("00:00:01");
      return;
    } else {
      console.log(props.min);
      let time = props.min;
      let secondes = time % 100;
      time = time - secondes;
      let houres = parseInt(time / 3600);
      time = time - houres;
      let minutes = time / 60;
      let newTime =
        toString(houres) + ":" + toString(minutes) + ":" + toString(secondes);
      setMinTime(newTime);
    }
  };

  const maxTimeSetter = (e) => {
    console.log('max');
  }


  return (
    <div style={{ display: "inline-block" }}>
      <h4 style={{ color: "white" }}>
        Filtering MIN time: <span style={{ color: "#F88379" }}>{minTime}</span>
      </h4>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
          <Input
            value={values.textmask}
            onChange={handleChange}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          color="primary"
          onClick={()=> maxTimeSetter()}
        >
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  stepper: {
    maxWidth: 360,
    backgroundColor: "#282c34",
    display: "flex",
    border: "1px solid rgba(0, 0, 0, .3)",
    height: "32px",
    width: "128px",
  },
  stepper__button: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: 32,
  },
  stepper__content: {
    flex: 1,
  },
  stepper__input: {
    height: "100%",
    width: "100% ",
  },
}));

/**





export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    textmask: '(100) 000-0000',
    numberformat: '1320',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
      <TextField
        label="react-number-format"
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        variant="standard"
      />
    </Box>
  );
}

 */
