import { useState } from "react";

function App() {
  const images = [
    "https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZmxvd2VyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    "https://plus.unsplash.com/premium_photo-1664116928414-2ab998603666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    "https://images.unsplash.com/photo-1596605872817-7615f7ea2aac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="img-slider">
      <h1>Image Slider</h1>
      <img
        src={images[index]}
        alt="slide"
        style={{ width: "600px", height: "400px", objectFit: "cover" }}
      />
      <div className="slider-btns">
        <button onClick={prev}>Left</button>
        <button onClick={next}>Right</button>
      </div>
    </div>
  );
}

export default App;
