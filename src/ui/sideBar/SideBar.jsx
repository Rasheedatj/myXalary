import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { formatToNaira } from '../../utils/index';

const SideBar = () => {
  return (
    <aside>
      <ul>
        <li>
          {Array.from({ length: 10 }, (job, index) => (
            <NavLink
              key={index}
              to={`${index.toString()}`}
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              <img src='/company-logo.svg' alt='company logo' />

              <article>
                <h3>Senior product designer</h3>
                <p>atb tech</p>

                <div>
                  <span>
                    <HiOutlineLocationMarker />
                    Lagos, Nigeria
                  </span>
                  <span>{formatToNaira(1000000)}</span>
                </div>
              </article>
            </NavLink>
          ))}
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
