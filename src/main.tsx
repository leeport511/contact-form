import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ContactFormApp from './ContactFormApp.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ContactFormApp />
	</StrictMode>
);
