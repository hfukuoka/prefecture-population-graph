import { ReactElement, useContext } from "react";
import { ResasApiKeyContext } from "../provider/ResasApiKey";
import { Navigate } from "react-router-dom";
import { route } from "./route";

type RequireApiKeyProps = {
  children: ReactElement;
};

export const RequireApiKey: React.FC<RequireApiKeyProps> = ({ children }) => {
  const apikey = useContext(ResasApiKeyContext);
  if (apikey) return children;
  return <Navigate to={route.apiKeyInputPage} />;
};
