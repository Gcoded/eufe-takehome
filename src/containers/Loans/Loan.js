import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Loan() {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Lender Name
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          ID: zzzzz
        </Typography>
        <List dense={false}>
          <ListItem>
            <ListItemText primary="Item Label" secondary={"Secondary copy"} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Item Label" secondary={"Secondary copy"} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
