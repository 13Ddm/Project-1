import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="rectangle">
           <h3>Employee Cost Calculator</h3> 
           <img src="./images/image3.png" alt='Employee Cost Calculator'/>
           <div className='learnmore' text-color='white'>
            <button class=" button1">Learn More &#8594; </button>
           </div>
      </div>
      <div className='rectangle2'>
           <h3>Global Salary Insights</h3>
           <img src="./images/image2.png" alt='Global Salary Insights'/>
           <div className='learnmore' text-color='white'>
            <button class = "button2">Learn More &#8594; </button>
           </div>
      </div> 
      <div className='rectangle3'>
           <h3>Global Employment Comparison</h3>
           <img src="./images/image1.png" alt='Global Employment Comparison'/>
           <div className='learnmore' text-color='white'>
            <button>Learn More &#8594; </button>
           </div>
      </div> 

      <div className='text'>
        <text>Check out our free hiring tools</text>
        <div className='par'>As one of Russia’s top 5 trade equipment 
          suppliers, ATOL is an IT leader in the retail automation market. 
          With the goal of increasing production, our task was to develop a site</div>
      </div>

      </div>
  );
}

export default App;
