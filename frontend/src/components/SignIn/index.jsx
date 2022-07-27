import { TextField, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import useApi from "@services/useApi";
import SSignIn from "./style";

export default function SignIn() {
  const api = useApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const hSubmit = (evt) => {
    evt.preventDefault();
    api
      .post(`${import.meta.env.VITE_BACKEND_URL}${"/auth/login"}`, formData)
      .then(({ data }) => {
        const { token, user } = data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({ type: "USER_LOGIN", payload: { ...user, token } });
        toast("Bienvenue sur Wim");
      })
      .then(() => {
        navigate("/accueil");
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
          label="Mot de passe"
          fullWidth
          variant="standard"
          value={formData.password}
          onChange={hChange}
        />
      </Box>
      <input className="submit" type="submit" value="CONNECTER" />
    </SSignIn>
  );
}
