import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./styles/theme";
import { Navigator } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigator />
    </ThemeProvider>
  );
}

export default App;
