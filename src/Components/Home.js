import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
      <>
        <div>
          <ul>
            <Link to="/computer">
            <li>Computer</li>
            </Link>
            <li as={Link} to="/mythology" >Mythology</li>
            <li as={Link} to="/geography" >Geography</li>
            <li as={Link} to="/games" >Games</li>
          </ul>  
        </div>
      </>
    )
}

export default Home;
