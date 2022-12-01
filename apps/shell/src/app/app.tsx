import * as React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

const LeadForm = React.lazy(() => import('lead-form/Module'));
const Hub = React.lazy(() => import('hub/Module'));
const Payment = React.lazy(() => import('payment/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/lead-form">Lead form</Link>
        </li>
        <li>
          <Link to="/hub">Hub</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={ <Navigate to="/lead-form" /> }/>
        <Route path="/lead-form" element={<LeadForm />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
