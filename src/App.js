import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorList: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      showColorList: !prevState.showColorList,
    }));
  };

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      showColorList: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { showColorList, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.toggleColorList}>Pick a color</button>
        {showColorList && (
          <ul className="color-list">
            {colors.map((color, index) => (
              <li
                key={index}
                onClick={() => this.selectColor(color)}
                style={{
                  backgroundColor: color,
                  width: "30px",
                  height: "30px",
                  display: "inline-block",
                  margin: "5px",
                  cursor: "pointer",
                }}
              ></li>
            ))}
          </ul>
        )}
        {selectedColor && (
          <div className="selected-color">
            Selected Color:{" "}
            <div
              style={{
                backgroundColor: selectedColor,
                width: "30px",
                height: "30px",
                display: "inline-block",
              }}
            ></div>
          </div>
        )}
      </div>
    );
  }
}

class App extends Component {
  render() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#33FFFF", "#FF33F6"];

    return (
      <div className="App">
        <ColorPicker colors={colors} />
      </div>
    );
  }
}

export default App;
