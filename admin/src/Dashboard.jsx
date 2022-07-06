import { Card, CardContent, CardHeader } from "@mui/material";

export default function DashBoard() {
  return (
    <Card>
      <CardHeader title="Bienvenue sur l'administration de WIM" />
      <CardContent>
        Votre espace administrable vous permet de : <br />
        Consulter, modifier les utilisateurs.
        <br />
        Ajouter, modifier, supprimer les cours. <br />
        Ajouter, modifier, supprimer les matières.
      </CardContent>
    </Card>
  );
}
