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
    if (i === "email" && !e.target.value.match(/[\w_-]+@[\w-]+\.[a-z]{2,3}$/i))
      toast.error(`Votre email n'est pas bon`);
  };
  const hCheckPassword = (e, i) => {
    if (i === "passwordBis" && e.target.value !== form.password)
      toast.error(`Vos mots de passe sont incorrect`);
  };
  const navigate = useNavigate();
  // Function to send values in database

  const api = useApi();
  const hSubmit = (evt) => {
    evt.preventDefault();

    if (form.password !== form.passwordBis) return;
    delete form.passwordBis;
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

        toast.success(`F??licitations, vous ??tes bien inscrit ?? WIM`);
      })
      .then(() => {
        navigate("/accueil");
      })

      .catch((e) => {
        toast.error(`${e.response.data}`);
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
      <Box sx={{ maxWidth: "100%" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Derni??re ??tape</Typography>
                  ) : null
                }
              >
                {/* Case step 2, field 1 : field with options to manage the schoolClasses */}
                <Typography>{step.label}</Typography>
              </StepLabel>
              <StepContent>
                {step.field1.typeOption ? (
                  <TextField
                    required={step.field1.isRequired}
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
                    required={step.field1.isRequired}
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
                  required={step.field2.isRequired}
                  label={step.field2.label}
                  fullWidth
                  variant="standard"
                  type={step.field2.type}
                  name={step.field2.name}
                  onChange={hChange}
                />

                <TextField
                  required={step.field3.isRequired}
                  label={step.field3.label}
                  fullWidth
                  variant="standard"
                  type={step.field3.type}
                  name={step.field3.name}
                  onChange={hChange}
                  onBlur={(e) => {
                    hCheckPassword(e, step.field3.name);
                  }}
                />
                <Box sx={{ mb: 2 }}>
                  {index === steps.length - 1 ? (
                    <div className="containerAvatar">
                      <label htmlFor="file" className="label-file">
                        Importer un avatar
                        <input
                          id="file"
                          name="avatar"
                          type="file"
                          className="input-file"
                          onChange={hChange}
                        />
                      </label>
                      <p className={form.avatar.name ? "green" : ""}>
                        {form.avatar.name ? "Avatar import??" : ""}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  <Button
                    size="large"
                    variant="contained"
                    onClick={index === steps.length - 1 ? hSubmit : nextStep}
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
            <Button size="large" variant="contained">
              Se connecter
            </Button>
          </Paper>
        )}
      </Box>
    </SSignUp>
  );
}
