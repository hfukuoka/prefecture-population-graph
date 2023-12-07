import {
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type ResasApiKeyProviderProps = {
  children: ReactNode;
  initialResasApiKey?: string;
};

export const ResasApiKeyContext = createContext<string | undefined>(undefined);

export const SetResasApiKeyContext = createContext<
  Dispatch<SetStateAction<string | undefined>>
>(() => {});

export const ResasApiKeyProvider = ({
  children,
  initialResasApiKey,
}: ResasApiKeyProviderProps) => {
  const [apiKey, setApiKey] = useState(initialResasApiKey);
  return (
    <ResasApiKeyContext.Provider value={apiKey}>
      <SetResasApiKeyContext.Provider value={setApiKey}>
        {children}
      </SetResasApiKeyContext.Provider>
    </ResasApiKeyContext.Provider>
  );
};

ResasApiKeyProvider.defaultProps = {
  initialResasApiKey: undefined,
};
