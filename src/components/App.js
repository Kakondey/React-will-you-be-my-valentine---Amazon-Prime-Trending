import React, { useState } from "react";
import "../styles/App.css";

const App = (props) => {
  // console.log(slides);
  const [current, setCurrent] = useState(0);

  const length = props.slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }

  const reset = () => {
    setCurrent(0);
  };

  // useEffect(() => {
  //   if(current===length-1){

  //   }
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  return (
    <>
      <div className="slider">
        {props.slides.map((image, index) => {
          return (
            <div
              key={index}
              className={index === current ? "slide active" : "slide"}
            >
              {index === current && (
                <div className="content">
                  <h1 data-testid="title">{image.title}</h1>
                  <p data-testid="text">{image.text}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button className="restart" data-testid="button-restart" onClick={reset}>
        Restart
      </button>
      <button
        disabled={current === 0}
        className="prev"
        data-testid="button-prev"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        disabled={current === length - 1}
        className="next"
        data-testid="button-next"
        onClick={nextSlide}
      >
        Next
      </button>
    </>
  );
};

export default App;
