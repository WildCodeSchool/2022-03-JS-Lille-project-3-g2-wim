import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function DashBoard() {
  return (
    <Card>
      <CardHeader title="Bienvenue sur l'administration de WIM" />
      <CardContent>
        <Typography>Votre espace administrable vous permet de :</Typography>
        <br />
        <Typography>
          Consulter, modifier les utilisateurs.
          <br />
          Ajouter, modifier, supprimer les cours. <br />
          Consulter, modifier, supprimer les matières.
        </Typography>
      </CardContent>
    </Card>
  );
}
