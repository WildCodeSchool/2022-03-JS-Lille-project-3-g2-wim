import cookies from "universal-cookie";
import { toast } from "react-toastify";
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
import { useState } from "react";
import SSignUp from "./style";

const steps = [
  {
    label: "Identité",
    firstField: "Nom",
    secondeField: "Prénom",
    thirdField: "Age",
    type: "default",
  },
  {
    label: "Informations scolaires",
    firstField: "Nom de l'école",
    secondeField: "Classe",
    thirdField: "Option",
    type: "default",
  },
  {
    label: "Informations de connexion",
    firstField: "Adresse mail",
    secondeField: "Mot de passe",
    thirdField: "Confirmer le mot de passe",
    type: "password",
  },
];

export default function SignUp() {
  // Variables defined for material admin form
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const prevStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const reset = () => {
    setActiveStep(0);
  };

  // Variables and fonction defined to control the form and sert authentification
  const [form, setForm] = useState({
    haveAccount: false,
    email: "",
    password: "",
    passwordBis: "",
    name: "",
    firstname: "",
    age: "",
    schoolOption: "",
    schoolName: "",
    country: "",
    schoolClass_id: "",
  });
  const hChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/auth/signup", form)
      .then(({ data }) => {
        const { token, user } = data;
        cookies.set("token", token);
        axios.defaults.headers.authorization = `Bearer ${token}`;
        // dispatch({ type: "LOGIN", user });
        toast(`You're now logged in, ${user.firstname} <3`);
      })
      .catch((e) => {
        toast.error(`Achtung!${e}`);
      });
  };

  return (
    <SSignUp onSubmit={hSubmit}>
      <Box sx={{ maxWidth: "100%" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {/* Map made to manage three steps - identity, scolar informations, connexion infos */}
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Dernière étape</Typography>
                  ) : null
                }
              >
                <Typography>{step.label}</Typography>
              </StepLabel>
              <StepContent>
                {/* //First field appearing in three steps - identity, scolar informations, connexion infos */}
                <TextField
                  required
                  label={step.firstField}
                  fullWidth
                  variant="standard"
                  onChange={hChange}
                />
                {/* //Second field  */}
                <TextField
                  required
                  label={step.secondeField}
                  fullWidth
                  variant="standard"
                  type={step.type}
                  onChange={hChange}
                />
                {/* //Third field  */}
                <TextField
                  required
                  label={step.thirdField}
                  fullWidth
                  variant="standard"
                  type={step.type}
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
            <Button size="large" variant="contained" onClick={reset}>
              Se connecter
            </Button>
          </Paper>
        )}
      </Box>
    </SSignUp>
  );
}
