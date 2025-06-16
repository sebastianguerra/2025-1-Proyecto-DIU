import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider forcedTheme="light">
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
