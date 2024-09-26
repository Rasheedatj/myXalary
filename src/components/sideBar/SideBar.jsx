import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { formatToNaira } from '../../utils/index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBoard } from '../../redux/appSlice';

const SideBar = ({ jobs }) => {
  const { board } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  return (
    <aside
      className={`${board ? styles.open : styles.close} ${styles.sideBar}`}
    >
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <NavLink
              to={`${job._id.toString()}`}
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
              onClick={() => dispatch(toggleBoard())}
            >
              <div className={styles.logo}>
                <img src={job.logo} alt='company logo' />
              </div>

              <article>
                <h3>{job.title}</h3>
                <p>{job.company}</p>

                <div>
                  <span>
                    <HiOutlineLocationMarker />
                    {job.location}
                  </span>
                  <span>{formatToNaira(job.salary[0])}</span>
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
