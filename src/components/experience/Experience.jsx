import Header from '../profileHeader/Header';
import List from '../list/List';
import styles from './Experience.module.scss';

const Experience = () => {
  const x = [
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est adipiscing luctus adipiscing faucibus orci mauris.',
    'Tellus ac odio ultricies viverra massa, eget cras. Leo odio facilisi iaculis lacinia platea. ',
    'Viverra odio tellus ut tortor, enim nulla pharetra arcu. ',
    'Sed lectus justo, iaculis et ultricies neque amet gravida ligula. ',
    'Nunc, nullam proin diam risus faucibus nisl, odio lectus vivamus. ',
    'Tempus tristique facilisi et amet vestibulum phasellus. ',
    'Maecenas ut scelerisque sem commodo lobortis neque sagittis.',
    'Amet commodo arcu sit blandit neque. ',
    'Blandit etiam facilisis sit magna morbi quis arcu senectus fermentum. ',
    'Eget sed lectus in orci vitae id feugiat.',
    'Sagittis urna velit dictum varius pellentesque fringilla. ',
    'Id scelerisque nisl senectus velit at commodo ipsum morbi laoreet.',
  ];
  return (
    <div>
      <Header heading='Work Experience' />

      <section className={styles.list}>
        <List
          heading='product designer'
          list={x}
          company='ABC technologies'
          start='2000'
          finish='2003'
        />
        <List
          heading='product designer'
          list={x}
          company='ABC technologies'
          start='2000'
          finish='2003'
        />
        <List
          heading='product designer'
          list={x}
          company='ABC technologies'
          start='2000'
          finish='2003'
        />
      </section>
    </div>
  );
};

export default Experience;
