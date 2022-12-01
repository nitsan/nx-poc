import styles from './hub.module.scss';
import { getNextPath } from "@nx-poc/utils";
import { useNavigate } from "react-router-dom";

/* eslint-disable-next-line */
export interface HubProps {}

export function Hub(props: HubProps) {
  const navigate = useNavigate();
  async function next() {
    const { url, redirect } = await getNextPath();
    if (redirect) {
      document.location.href = url;
    } else {
      navigate(url);
    }
  }

  return (
    <div className={styles['center']}>
      <h1>Tell us about your business</h1>
      <h5 className="align-baseline">My business:</h5>
      <div className="hub p-3">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label className="form-check-label">
              Has one or more employees
            </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"></input>
            <label className="form-check-label">
              Uses tools and equipment to operate
            </label>
        </div>
      </div>
      <button type="button" className="btn btn-primary mt-4" onClick={next}>Next</button>
    </div>

  );
}

export default Hub;
