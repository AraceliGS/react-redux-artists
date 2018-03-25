import React from 'react';
import SearchBar from './SearchBar';
import ArtistList from '../containers/ArtistList';
import ArtistDetails from '../containers/ArtistDetails';
import './App.css';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <SearchBar />
      <ArtistList />
      <ArtistDetails />
    </div>
  </div>
);

export default App;
