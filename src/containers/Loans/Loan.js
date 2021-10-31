import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Loan(props) {
  const {
    lenderName,
    id,
    scheduleType,
    debitDayOfWeek,
    monthlyPaymentAmount,
    paymentDueDay,
    debitStartDate,
    daysOfMonth
  } = props.loan;

  const debitSchedule = scheduleType === 'biweekly' ?
    `Debit Day of the Week: ${debitDayOfWeek}` :
    `Debit Days of the Month: ${daysOfMonth.toString()}`;

  return (
    <Card key={id}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {lenderName}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          ID: {id}
        </Typography>
        <List dense={false}>
          <ListItem>
            <ListItemText
              primary={`Monthly Payment Amount: ${monthlyPaymentAmount}`}
              secondary={`Payment Due Day: ${paymentDueDay}`}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary={`Schedule Type: ${scheduleType}`}
              secondary={debitSchedule}
            />
            <ListItemText
              primary={`Debit Start Date: ${debitStartDate}`}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
