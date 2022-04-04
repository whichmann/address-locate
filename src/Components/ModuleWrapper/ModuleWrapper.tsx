import React, { ReactNode } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import "./ModuleWrapper.css";

type Props = {
    children: ReactNode;
    moduleTitle: string;
}

const ModuleWrapper = ({moduleTitle, children}: Props) => (
  <Grid item xs={12} xl={6}>
    <Card className="item-container" elevation={2}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {moduleTitle}
        </Typography>
        {children}
      </CardContent>
    </Card>
  </Grid>
);

export default ModuleWrapper;
