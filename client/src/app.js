import React from 'react';
import ReactDOM from 'react-dom';
import SongListContainer from './components/SongListContainer.jsx';

window.addEventListener('load', function () {
  ReactDOM.render(
    <SongListContainer />,
    document.getElementById('app')
  );
});
