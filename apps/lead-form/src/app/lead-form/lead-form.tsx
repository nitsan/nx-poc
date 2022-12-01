import styles from './lead-form.module.scss';
import { NextPath } from "@funnel/api-interfaces";
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LeadFormProps {}

export function LeadForm(props: LeadFormProps) {
  const navigate = useNavigate();
  async function getQuote() {
    const res  = await fetch('/api/next', {
      method: 'POST',
      body: JSON.stringify({currentPath: window.location.pathname}),
      headers: { 'Content-Type': 'application/json' },
    });
    const { url, redirect } = await res.json() as NextPath;
    if (redirect) {
      document.location.href = url;
    } else {
      navigate(url);
    }
  }
  return (
    <div className={styles['lead-form']}>
      <h1>LET'S GET A QUOTE!</h1>
      <form>
        <div className="form-group mt-4">
          <label>What industry are you in?</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Select industry"></input>
        </div>
        <div className="form-group mt-4">
          <label>State</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search state"></input>
        </div>
        <button type="button" className="btn btn-primary mt-4" onClick={getQuote}>Get Instant Quote</button>
    </form>
</div>
  );
}

export default LeadForm;
