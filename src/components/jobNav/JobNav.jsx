import styles from './JobNav.module.scss';
import { useState } from 'react';
import Select from '../select/Select';
import Input from '../input/Input';
import Button from '../button/Button';
import { useForm } from 'react-hook-form';

const JobNav = () => {
  const [jobNumber, setJobNumber] = useState(10);
  const [timeFrame, setTimeFrame] = useState('all');
  const [role, setRole] = useState('');
  const [date, setDate] = useState('24');
  const { register } = useForm();

  return (
    <nav>
      <Select
        name='jobNumber'
        id='jobNumber'
        value={jobNumber}
        onValue={(e) => setJobNumber(e.target.value)}
      >
        <option value={10}>10</option>
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
        <option value='all'>All</option>

        <option value='recent'>Recent</option>
      </Select>

      <Input
        type='search'
        id='roleSearch'
        register={register}
        placeholder='Job Role'
      />

      <Select
        name='date'
        id='date'
        value={date}
        onValue={(e) => setDate(e.target.value)}
      >
        <option value='24'>Past 24 hours</option>
        <option value='week'>Past week</option>

        <option value='month'>Month</option>
        <option value='anytime'>Anytime</option>
      </Select>

      <Button type='plainPrimary' size='small'>
        Filter Jobs
      </Button>
      <Button type='plain' size='small'>
        Reset Filter
      </Button>
    </nav>
  );
};

export default JobNav;
