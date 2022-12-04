import * as React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '@nx-poc/ui-react';

const Quote = React.lazy(() => import('quote/Module'));
const LeadForm = React.lazy(() => import('lead-form/Module'));
const Hub = React.lazy(() => import('hub/Module'));

export function App() {
  return (
    <>
      <Header></Header>
      <React.Suspense fallback={null}>
        <ul>
          <li>
            <Link to="/lead-form">Lead form</Link>
          </li>
          <li>
            <Link to="/hub">Hub</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Navigate to="/lead-form" />} />
          <Route path="/lead-form" element={<LeadForm />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
