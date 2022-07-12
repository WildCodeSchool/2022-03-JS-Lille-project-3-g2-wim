import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import axios from "axios";

import {
  TextField,
  Box,
  Step,
  Stepper,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import steps from "@assets/dataStepForm";
import { cookies } from "../../confCookie";
import SSignUp from "./style";

export default function SignUp() {
  const dispatch = useDispatch();
  // Variables defined to manage steps in material admin form
  const [activeStep, setActiveStep] = useState(0);
  // Variables to define dynamically the list of classes from database
  const [schoolClassList, setSchoolClassList] = useState([]);
  // Variables and fonction defined to control the form and new authentification
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordBis: "",
    name: "",
    firstname: "",
    age: "",
    schoolOption: "",
    schoolName: "",
    schoolClass_id: "",
  });

  // Function to manage steps in accordeon
  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const prevStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  // Function to get values from form
  const hChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // Function to check fields with regex (just mail for the moment)
  const hCheck = (e, i) => {
    if (i === "email" && !e.target.value.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i))
      toast.error(`Votre email n'est pas bon`);
  };
  // Function to send values in database
  const hSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, form)
      .then(({ data }) => {
        const { token, user } = data;

        cookies.set("token", token);
        axios.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({ type: "USER_LOGIN", payload: user });
        toast.success(`Félicitations, vous êtes bien inscrit à WIM`);
      })
      .catch((e) => {
        toast.error(`Veuillez réésayer !${e}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  // Using API delivering existing schoolClasses to make it connected to database
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/schoolclass`)
      .then(({ data }) => {
        setSchoolClassList(data);
      });
  }, []);

  return (
    <SSignUp>
      <div>
        <Box sx={{ maxWidth: "100%" }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Dernière étape</Typography>
                    ) : null
                  }
                >
                  {/* Case step 2, field 1 : field with options to manage the schoolClasses */}
                  <Typography>{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  {step.field1.typeOption ? (
                    <TextField
                      required
                      label={step.field1.label}
                      fullWidth
                      variant="standard"
                      type={step.field1.type}
                      name={step.field1.name}
                      onChange={hChange}
                      onBlur={(e) => {
                        hCheck(e, step.field1.name);
                      }}
                      select
                      SelectProps={{
                        native: true,
                      }}
                    >
                      <option value>--Classe -- </option>
                      {schoolClassList.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                      {/* All other cases for step 1 */}
                    </TextField>
                  ) : (
                    <TextField
                      required
                      label={step.field1.label}
                      fullWidth
                      variant="standard"
                      onChange={hChange}
                      name={step.field1.name}
                      type={step.field1.type}
                      onBlur={(e) => {
                        hCheck(e, step.field1.name);
                      }}
                    />
                  )}

                  <TextField
                    required
                    label={step.field2.label}
                    fullWidth
                    variant="standard"
                    type={step.field2.type}
                    name={step.field2.name}
                    onChange={hChange}
                  />

                  <TextField
                    required
                    label={step.field3.label}
                    fullWidth
                    variant="standard"
                    type={step.field3.type}
                    name={step.field3.name}
                    onChange={hChange}
                  />
                  <Box sx={{ mb: 2 }}>
                    <Button
                      size="large"
                      variant="contained"
                      onClick={nextStep}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Fin" : "Continuer"}
                    </Button>
                    <Button
                      size="large"
                      disabled={index === 0}
                      onClick={prevStep}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Retour
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 5 }}>
              <Typography>Bienvenue chez WIM !</Typography>
              <Button size="large" variant="contained" onClick={hSubmit}>
                Se connecter
              </Button>
            </Paper>
          )}
        </Box>
      </div>
      <div>
        <div className="custom-file-upload">
          <input type="file" onChange={hChange} />
          <i>AJOUTE TON AVATAR</i>
        </div>
      </div>
    </SSignUp>
  );
}
