import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import Loan from "./Loan";
import { useDispatch, useSelector } from "react-redux";
import { getLoansList, requestLoans } from "./loanReducer";
import ProgressBar from "../../components/ProgressBar";

export default function LoansList() {
  const dispatch = useDispatch();
  const loansList = useSelector(getLoansList);
  const loansStatus = useSelector(state => state.loans.status);
  const error = useSelector(state => state.loans.error)

  useEffect(() => {
    if (loansStatus === 'idle') {
      dispatch(requestLoans());
    }
  }, [loansStatus, dispatch]);

  let content = '';
  if (loansStatus === 'loading') {
    content = <div>Loading Content...<ProgressBar /></div>;
  } else if (loansStatus === 'succeeded') {
    if (loansList.length > 0) {
      content = loansList.map(loan => <Loan key={loan.id} loan={loan} />);
    } else {
      content = "NO LOANS AVAILABLE";
    }
  } else if (loansStatus === 'failed') {
    content = error;
  } 

  return (
    <List>
      {content}
    </List>
  );
}
