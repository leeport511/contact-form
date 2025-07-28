import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ContactFormApp from './ContactFormApp.tsx';
import { HeroUIProvider } from '@heroui/react';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HeroUIProvider>
			<ContactFormApp />
		</HeroUIProvider>
	</StrictMode>
);
