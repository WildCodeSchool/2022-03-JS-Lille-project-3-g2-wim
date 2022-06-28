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
    name: "firstep",
    key: "1",
    label: "Identité",
    field1: {
      key: "name",
      label: "Nom",
      type: "default",
    },
    field2: {
      name: "firstname",
      label: "Prénom",
      type: "default",
    },
    field3: {
      key: "age",
      label: "Age",
      type: "default",
    },
  },
  {
    name: "secondstep",
    key: "2",
    label: "Informations scolaires",
    field1: {
      key: "schoolClass_id",
      label: "Classe",
      type: "default",
    },
    field2: {
      name: "schoolOption",
      label: "Série",
      type: "default",
    },
    field3: {
      key: "schoolName",
      label: "Nom de l'école",
      type: "default",
    },
  },
  {
    name: "thirdstep",
    key: "3",
    label: "Informations de connexion",
    field1: {
      key: "email",
      label: "Adresse mail",
      type: "default",
    },
    field2: {
      name: "password",
      label: "Mot de passe",
      type: "default",
    },
    field3: {
      key: "passwordBis",
      label: "Confirmer le mot de passe",
      type: "default",
    },
  },
];

export default function SignUp() {
  // Variables defined tu manage steps in material admin form
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const prevStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
        toast(`You're now logged in, ${user.firstname} <3`);
      })
      .catch((e) => {
        toast.error(`Achtung!${e}`);
      });
  };

  return (
    <SSignUp>
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
                <Typography>{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <TextField
                  required
                  label={step.field1.label}
                  fullWidth
                  variant="standard"
                  onChange={hChange}
                  name={step.field1.key}
                />
                <TextField
                  required
                  label={step.field2.label}
                  fullWidth
                  variant="standard"
                  type={step.type}
                  name={step.field2.key}
                  onChange={hChange}
                />
                <TextField
                  required
                  label={step.field3.label}
                  fullWidth
                  variant="standard"
                  type={step.type}
                  name={step.field3.key}
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
    </SSignUp>
  );
}
