import { PrefecturePopulationPage } from "./pages/PrefecturePopulationPage";
import { ResasApiKeyProvider } from "./provider/ResasApiKey";
import "./global.scss";

const App = () => {
  return (
    <ResasApiKeyProvider>
      <PrefecturePopulationPage />
    </ResasApiKeyProvider>
  );
};

export default App;
