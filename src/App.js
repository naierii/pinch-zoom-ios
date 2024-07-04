import logo from './logo.svg';
import './App.css';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { useCallback, useRef } from 'react';


function App() {
  const imgRef = useRef(null);
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });
      console.log('value', value)

      img.style.setProperty("transform", value);
    }
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <TransformWrapper
          pinch={{ disabled: false }}
        >
          <TransformComponent>
            <img src={logo} className="App-logo" alt="logo" />
          </TransformComponent>
        </TransformWrapper>
        <QuickPinchZoom onUpdate={onUpdate}>
          <img ref={imgRef} src={logo} className="App-logo" alt="logo" />
        </QuickPinchZoom>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
