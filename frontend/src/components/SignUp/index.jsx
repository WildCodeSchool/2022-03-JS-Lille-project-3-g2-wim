import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useApi from "@services/useApi";
import { useDispatch } from "react-redux";
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
    avatar: "",
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
    const { name, value, type, files } = e.target;
    let newValue = null;
    switch (type) {
      case "file":
        [newValue] = files;
        break;
      default:
        newValue = value;
    }
    setForm({ ...form, [name]: newValue });
  };
  // Function to check fields with regex (just mail for the moment)
  const hCheck = (e, i) => {
    if (i === "email" && !e.target.value.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i))
      toast.error(`Votre email n'est pas bon`);
  };
  const navigate = useNavigate();
  // Function to send values in database

  const api = useApi();
  const hSubmit = (evt) => {
    evt.preventDefault();

    const finalForm = Object.keys(form).reduce((accu, key) => {
      accu.append(key, form[key]);
      return accu;
    }, new FormData());

    api
      .post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, finalForm)
      .then(({ data }) => {
        const { token, user } = data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({ type: "USER_LOGIN", payload: { ...user, token } });

        toast.success(`Félicitations, vous êtes bien inscrit à WIM`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .then(() => {
        navigate("/accueil");
      })
      .then(() => {
        navigate("/accueil");
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
    api
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
        <input
          className="inputAvatar"
          type="file"
          name="avatar"
          placeholder="Votre avatar"
          onChange={hChange}
        />
      </div>
    </SSignUp>
  );
}
