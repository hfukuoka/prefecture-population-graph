import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PrefecturePopulationPage } from "./pages/PrefecturePopulationPage";
import { ApiKeyInputPage } from "./pages/ApiKeyInputPage";
import { ResasApiKeyProvider } from "./provider/ResasApiKey";
import { RequireApiKey } from "./routes/RequireApiKey";
import "./global.scss";

const App = () => {
  return (
    <ResasApiKeyProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireApiKey>
                <PrefecturePopulationPage />
              </RequireApiKey>
            }
          />
          <Route path="/apikey" element={<ApiKeyInputPage />} />
        </Routes>
      </BrowserRouter>
    </ResasApiKeyProvider>
  );
};

export default App;
