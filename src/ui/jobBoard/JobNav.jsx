import styles from './JobNav.module.scss';
import { useState } from 'react';
import Select from '../select/Select';
import Input from '../input/Input';
import Button from '../button/Button';

const JobNav = () => {
  const [jobNumber, setJobNumber] = useState(10);
  const [timeFrame, setTimeFrame] = useState('all');
  const [role, setRole] = useState('');
  const [date, setDate] = useState('');

  return (
    <nav>
      <Select
        name='jobNumber'
        id='jobNumber'
        value={jobNumber}
        onValue={(e) => setJobNumber(e.target.value)}
      >
        <option value={10} selected>
          10
        </option>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={200}>200</option>
      </Select>

      <Select
        name='time'
        id='time'
        value={timeFrame}
        onValue={(e) => setTimeFrame(e.target.value)}
      >
        <option value='all' selected>
          All
        </option>

        <option value='recent'>Recent</option>
      </Select>

      <Input
        type='search'
        name='roleSearch'
        id='roleSearch'
        value={role}
        onValue={(e) => setRole(e.target.value)}
        placeholder='Job Role'
      />

      <Select
        name='date'
        id='date'
        value={date}
        onValue={(e) => setDate(e.target.value)}
      >
        <option value='24' selected>
          Past 24 hours
        </option>
        <option value='week'>Past week</option>

        <option value='month'>Month</option>
        <option value='anytime'>Anytime</option>
      </Select>

      <Button type='plainPrimary'>Filter Jobs</Button>
      <Button type='plain'>Reset Filter</Button>
    </nav>
  );
};

export default JobNav;
