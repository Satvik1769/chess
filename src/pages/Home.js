import image from "../assets/images/The Little Things - Working.png"
import './home.css';
import Navbar from "../components/Navbar";


function Home() {
  return (
    <div className="App">
      <Navbar/>

<div className="flex space-x-64 ">
  <div className="items-start w-100 mx-10 my-20 ">
    <h1 className="text-3xl text-red-100 my-10">Play Chess Explore Chess</h1>
  <p>Play chess with friends and talk to them and see there faces when they get defeated </p>
  <p>Explore the world of chess play with bots and your friends </p>

  <div className="flex">
  <button className="btn btn-primary my-10 mx-10">Play with Bot</button>
  <button className="btn btn-primary my-10">Play with Friends</button>
  </div>
  </div>

  <div className="items-end">
  <img src={image} ></img>
  </div>


</div>
  
    </div>
  );
}

export default Home;
