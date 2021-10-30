import { configureStore } from "@reduxjs/toolkit";

import settings from "../containers/Setting/settingsReducer";
import counter from "../containers/ExampleRedux/counterReducer";
import loans from "../containers/Loans/loanReducer";

export default configureStore({
  reducer: {
    settings: settings,
    counter: counter,
    loans: loans,
  },
});
