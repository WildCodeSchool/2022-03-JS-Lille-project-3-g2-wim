import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function DashBoard() {
  return (
    <Card>
      <CardHeader title="Bienvenue sur l'administration de WIM" />
      <CardContent>
        <Typography component="span" variant="body2">
          Votre espace administrable vous permet de :
        </Typography>

        <br />
        <Typography component="span" variant="body2">
          Gérer les leçons et les utilisateurs de l'application
        </Typography>
      </CardContent>
    </Card>
  );
}
