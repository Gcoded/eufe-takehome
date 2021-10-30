import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import Loan from "./Loan";
import { useDispatch, useSelector } from "react-redux";
import { getLoansList, requestLoans } from "./loanReducer";

export default function LoansList() {
  const dispatch = useDispatch();
  const loansList = useSelector(getLoansList);
  const loansStatus = useSelector(state => state.loans.status);

  useEffect(() => {
    if (loansStatus === 'idle') {
      dispatch(requestLoans());
    }
  }, [loansStatus, dispatch]);

  return (
    <List>
      {/* Map loans list here... */}
      {console.log(loansList)}
      <Loan />
    </List>
  );
}
