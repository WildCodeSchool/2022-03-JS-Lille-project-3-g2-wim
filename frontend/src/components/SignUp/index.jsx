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
                  label={step.firstField}
                  fullWidth
                  variant="standard"
                />
                <TextField
                  required
                  label={step.secondeField}
                  fullWidth
                  variant="standard"
                  type={step.type}
                />
                <TextField
                  required
                  label={step.thirdField}
                  fullWidth
                  variant="standard"
                  type={step.type}
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
