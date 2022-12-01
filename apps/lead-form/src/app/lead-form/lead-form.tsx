import styles from './lead-form.module.scss';
import { useNavigate } from 'react-router-dom';
import { getNextPath } from "@nx-poc/utils";

/* eslint-disable-next-line */
export interface LeadFormProps {}

export function LeadForm(props: LeadFormProps) {
  const navigate = useNavigate();
  async function getQuote() {
    const { url, redirect } = await getNextPath();
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
