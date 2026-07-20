import { createRoot } from 'react-dom/client';
import App from './components/App/App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <h1>Welcome to React</h1>
    <p>
      <App />
    </p>
  </div>
);
