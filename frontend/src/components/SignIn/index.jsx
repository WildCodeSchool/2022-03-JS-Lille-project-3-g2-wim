import { Button, TextField, Box } from "@mui/material";
import SSignIn from "./style";

export default function SignIn() {
  return (
    <SSignIn>
      <Box>
        <TextField
          required
          id="Email"
          name="Email"
          label="Email"
          fullWidth
          variant="standard"
        />
        <TextField
          type="password"
          required
          id="Mot de passe"
          name="Mot de passe"
          label="Confirmer le mot de passe"
          fullWidth
          variant="standard"
        />
      </Box>
      <Button variant="contained" size="large">
        Se connecter
      </Button>
    </SSignIn>
  );
}
