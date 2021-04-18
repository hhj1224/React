class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    const text = this.state.liked ? '좋아요 취소' : '좋아요';
    return React.createElement('button', {
      onClick: () => this.setState({
        liked: true
      })
    }, text);
  }

}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8 : "), /*#__PURE__*/React.createElement("span", null, this.state.count), /*#__PURE__*/React.createElement("button", {
      onClick: () => this.setState({
        count: this.state.count + 1
      })
    }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
      onClick: () => this.setState({
        count: this.state.count - 1
      })
    }, "\uAC10\uC18C")));
  }

}

const domConainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domConainer); //바벨 실행
//npm init
//npm install @babel/core @babel/cli @babel/preset-react
//npx babel --watch src --out-dir . --presets @babel/preset-react