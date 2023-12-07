import { AppRoute } from "./routes/AppRoute";
import { ResasApiKeyProvider } from "./provider/ResasApiKey";
import "./styles/global.scss";

const App = () => {
  return (
    <ResasApiKeyProvider>
      <AppRoute />
    </ResasApiKeyProvider>
  );
};

export default App;
