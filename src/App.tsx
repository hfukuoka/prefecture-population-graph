import { AppRoute } from "./routes/AppRoute";
import { ResasApiKeyProvider } from "./provider/ResasApiKey";
import "./global.scss";

const App = () => {
  return (
    <ResasApiKeyProvider>
      <AppRoute />
    </ResasApiKeyProvider>
  );
};

export default App;
