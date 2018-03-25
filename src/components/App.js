import React from 'react';
import SearchBar from './SearchBar';
import ArtistList from './ArtistList';
import ArtistDetails from './ArtistDetails';
import './App.css';

const data = [
  {name : 'Honoka Kousaka', bio : 'Es es una de las nueve protagonistas de Love Live! y líder del grupo de idols escolares μs. Tiene 16 años y está en segundo año de la preparatoria Otonokizaka.', url : 'kousaka-honoka.jpg' , canciones : ['Senkou Resolution', 'Bokura wa Ima no Naka de', 'START:DASH!!']},
  {name : 'Hibiki Tachibana', bio : 'Ella es una de las protagonistas principales de Senki Zesshō Symphogear y sus secuelas, así como una cantante japonesa.', url:'tachibana-hibiki.png', canciones:['Genkai Toppa G-beat', 'Makenai Ai ga Koko ni Aru', 'Rainbow Flower']},
  {name : 'Chika Takami', bio:'Chika Takami es una de las nueve protagonistas de Love Live! Sunshine!! y líder del grupo de idols escolares Aqours. Tiene 16 años y va en segundo año de la preparatoria femenina Uranohoshi.', url:'chika-takami.png', canciones : ['Yozora wa Nandemo Shitteru no?','Yuuki wa doko ni? Kimi no Mune ni!', 'One More Sunshine Story']},
];

const specialData = {name:'Nana Mizuki', bio:'Nana Mizuki es una actriz de voz y cantante japonesa. Además de ser cantante también es compositora, letrista, seiyū y embajadora turística de Japón.', url:'nana-mizuki.jpg'};

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <SearchBar />
      <ArtistList artists={data}/>
      <ArtistDetails specialArtist={specialData}/>
    </div>
  </div>
);

export default App;
