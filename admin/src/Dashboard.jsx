import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function DashBoard() {
  return (
    <Card>
      <CardHeader title="Bienvenue sur l'administration de WIM" />
      <CardContent>
        <Typography>Votre espace administrable vous permet de :</Typography>

        <br />
        <Typography>
          Gérer les leçons et utilisateurs de l'application
        </Typography>
      </CardContent>
    </Card>
  );
}
