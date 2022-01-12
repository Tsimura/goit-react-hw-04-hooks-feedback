import PropTypes from 'prop-types';
import { ImHappy, ImNeutral, ImAngry } from 'react-icons/im';
import { DiCoffeescript } from 'react-icons/di';
import { StatisticsStyle, Motivation } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsStyle>
    <div>
      <p>
        <ImHappy size={40} color="green" /> : {good}
      </p>
      <p>
        <ImNeutral size={40} color="yellow" /> : {neutral}
      </p>
      <p>
        <ImAngry size={40} color="red" /> : {bad}
      </p>
    </div>
    <div>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </div>
    <Motivation>
      Have a nice day! <DiCoffeescript size={50} />
    </Motivation>
  </StatisticsStyle>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
