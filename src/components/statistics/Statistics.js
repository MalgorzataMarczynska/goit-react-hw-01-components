import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statlist}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
