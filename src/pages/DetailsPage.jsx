import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DetailsPage = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <h1>Título 2</h1>
    </div>
  );
 };

const mapStateToProps = (state) => ({
  recipes: state.ThemealDB.recipes,
});

// DetailsPage.propTypes = {
//   recipes: PropTypes.objectOf(PropTypes.any).isRequired,
// };

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(DetailsPage);
