import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { formatToNaira } from '../../utils/index';

const SideBar = ({ jobs }) => {
  return (
    <aside className={styles.sideBar}>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <NavLink
              to={`${job._id.toString()}`}
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              <img src={job.logo} alt='company logo' />

              <article>
                <h3>{job.title}</h3>
                <p>{job.company}</p>

                <div>
                  <span>
                    <HiOutlineLocationMarker />
                    {job.location}
                  </span>
                  <span>{formatToNaira(job.salary)}</span>
                </div>
              </article>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
