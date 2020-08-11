import React from 'react';
import { Link } from 'react-router-dom';

// import './Explore.css';
import ExploreHeader from '../components/ExploreHeader';
import Footer from '../components/Footer';

const Explore = () => (
  <div>
    <ExploreHeader title={'Explorar'} />
    <div className="explore-btn-container">
      <div>
        <Link to="/explorar/comidas">
          <button className="explore-btn" type="button" data-testid="explore-food">
        Explorar Comidas
      </button>
        </Link>
      </div>
      <div>
        <Link to="/explorar/bebidas">
        <button className="explore-btn" type="button" data-testid="explore-drinks">
        Explorar Bebidas
      </button>
      </Link>
      </div>
      <Footer />
    </div>
  </div>
);

export default Explore;
