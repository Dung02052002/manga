import React from 'react'
import { Link } from 'react-router-dom';
import Top15Comics from '../../components/top15Comics';
import ServerList from '../../components/ServerList';

const Server = () => {
    return(
        <>
        <div className="cont">
      <div className="title-released-comic ">
        <h2>New Released Novel</h2>
        <Link to="/newRelease">
          <p>See all</p>
        </Link>
      </div>
      <ServerList index={0}/>

      <div className="title-released-comic">
        <h2>Recent Novel</h2>
        <Link to="/recent">
          <p>See all</p>
        </Link>
      </div>
      <ServerList index={1}/>

      <div className="title-released-comic">
        <h2>Recommended Novel</h2>
        <Link to="/recommended">
          <p>See all</p>
        </Link>
      </div>
      <ServerList index={2}/>

      <div className="title-released-comic">
        <h2>Comming Soon Novel</h2>
        <Link to="/commingsoon">
          <p>See all</p>
        </Link>
      </div>
      <ServerList index={3}/>

      <div className="title-released-comic">
        <h2>Top 15 Best Novel of the Week</h2>
        <Link>
          <p>See all</p>
        </Link>
      </div>
      <Top15Comics index={4}/>

      <div className="title-released-comic">
        <h2>Comedy Novel</h2>
        <Link>
          <p>See all</p>
        </Link>
      </div>
      <ServerList index={5}/>
      <div className="title-released-comic">
        <h2>Free Novel</h2>
        <Link to={`/`}>
          <p>See all</p>
        </Link>
      </div>
      <ServerList index={6}/>
    </div>
        </>
    );
};

export default Server