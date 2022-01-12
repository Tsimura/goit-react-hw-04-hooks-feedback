import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
