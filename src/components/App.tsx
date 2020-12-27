import React from "react";

const App = (): JSX.Element => {
  return (
    <div className="app" data-test="appComponent">
      <div className="item i1">1</div>
      <div className="item i3">3</div>
      <div className="item i4">4</div>
      <div className="item i5">5</div>
    </div>
  );
};

export default App;
