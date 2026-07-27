import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Analytics is non-critical. Loading it after the page is interactive keeps
// Firebase out of the initial rendering path and improves mobile startup.
let analyticsRequested = false;
const loadAnalytics = () => {
  if (analyticsRequested) return;
  analyticsRequested = true;
  void import('./firebase');
};

window.addEventListener('pointerdown', loadAnalytics, { once: true, passive: true });
window.addEventListener('keydown', loadAnalytics, { once: true });
window.addEventListener('scroll', loadAnalytics, { once: true, passive: true });
window.setTimeout(loadAnalytics, 10_000);
