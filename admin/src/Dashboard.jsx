import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function DashBoard() {
  return (
    <Card>
      <CardHeader title="Bienvenue sur l'administration de WIM" />
      <CardContent>
        <Typography>
          <h2>Votre espace administrable vous permet de :</h2>
        </Typography>
        <br />
        <Typography>
          - Consulter, éditer ou supprimer les utilisateurs.
          <br />
          - Créer, éditer, supprimer les cours. <br />
          - Consulter, éditer, supprimer les matières. <br />- Editer et
          supprimer les niveaux d'études.
        </Typography>
      </CardContent>
    </Card>
  );
}
