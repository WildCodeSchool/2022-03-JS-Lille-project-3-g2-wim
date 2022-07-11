import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";
import useApi from "@services/useApi";
import { toast } from "react-toastify";
import SSignIn from "./style";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const api = useApi();
  const hSubmit = (evt) => {
    evt.preventDefault();
    api
      .post(`${import.meta.env.VITE_BACKEND_URL}${"/auth/login"}`, formData)
      .then(() => {
        toast("Bienvenue sur Wim");
      })
      .catch(() => {
        toast.error("Email ou mot de passe incorrect");
      });
  };
  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <SSignIn action="" onSubmit={hSubmit}>
      <Box>
        <TextField
          required
          id="email"
          name="email"
          label="email"
          fullWidth
          variant="standard"
          value={formData.email}
          onChange={hChange}
        />
        <TextField
          type="password"
          required
          id="Mot de passe"
          name="password"
          label="Confirmer le mot de passe"
          fullWidth
          variant="standard"
          value={formData.password}
          onChange={hChange}
        />
      </Box>
      <Button variant="contained" size="large">
        Connecter
      </Button>
      <input className="submit" type="submit" value="CONNECTER" />
    </SSignIn>
  );
}
