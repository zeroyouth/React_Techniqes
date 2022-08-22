import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>안녕하세요</h1>
      {showParagraph && <p>새로운 거</p>}
      <Button onClick={toggleParagraphHandler}>문장을 보여줘</Button>
    </div>
  );
}

export default App;
