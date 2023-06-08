import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/app/home';
import { env } from '@/app/utils';
import reportWebVitals from '@/reportWebVitals';
import '@/app/styles/main.css';

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
