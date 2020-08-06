import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeBtnStart } from '../actions/index';

import './StartRecipe.css';

const StartRecipe = ({ btnStart }) => {
  const dispatch = useDispatch();

  const title = btnStart === false ? 'Iniciar Receita' : 'Continuar Receita';

  return (
    <Link to={`/comidas/{id-da-receita}/in-progress`}>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="btn-start-recipe"
        onClick={() => dispatch(changeBtnStart())}
      >
        {title}
      </button>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  btnStart: state.startRecipe.startRecipe,
});

export default connect(mapStateToProps, null)(StartRecipe);
