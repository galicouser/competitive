import React from 'react';
import './App.css'; // Import your CSS here if you have one.

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>

      {/* Embedded Presentation Component */}
      <div className="presentation-container">
        <iframe
          src="https://www.slideshare.net/slideshow/embed_code/key/1kpJeWtppXzNp9?hostedIn=slideshare&page=upload"
          width="600"
          height="400"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          style={{border: '1px solid #CCC', borderWidth: '1px', marginBottom: '5px', maxWidth: '100%'}}
          allowFullScreen // Corrected to allowFullScreen for React
        >
        </iframe>
      </div>

    </div>
  );
}

export default App;

