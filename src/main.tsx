import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Home from '@/app/home';
import { env } from '@/app/utils';
import reportWebVitals from '@/reportWebVitals';
import '@/app/styles/main.css';

ReactGA.initialize('G-K5KRG00ZTZ');

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

if (env.MODE !== 'production') {
  reportWebVitals(console.debug);
}
