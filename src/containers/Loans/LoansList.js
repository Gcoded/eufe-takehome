import React from "react";
import List from "@material-ui/core/List";
import Loan from "./Loan";

export default function LoansList() {
  return (
    <List>
      {/* Map loans list here... */}
      <Loan />
    </List>
  );
}
