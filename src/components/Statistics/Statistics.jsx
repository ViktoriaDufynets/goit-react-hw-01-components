import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export const Statistics = ({title, stats}) => {
    return (
<section className={css.statistic}>
  
{title && (
    <h2 className={css.title}>{title}</h2>
  )}
  <ul className={css.stats}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="two">{label}</span>
              <span className="three">{percentage} %</span>
            </li>
          );
        })}
      </ul>
</section>
)};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
