import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import { APIProvider } from '@vis.gl/react-google-maps';
import { DialogsProvider } from './DialogsProvider.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <BrowserRouter>
        <Provider forcedTheme="light">
          <DialogsProvider>
            <App />
          </DialogsProvider>
        </Provider>
      </BrowserRouter>
    </APIProvider>
  </StrictMode>
);
