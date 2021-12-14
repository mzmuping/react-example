import React from "react";
import PropTypes from 'prop-types';

class Weather extends React.Component {
  static propTypes = {
    sex: PropTypes.string,
    age: PropTypes.number
  }
  //默认Props值
  static defaultProps = {
    sex: '男',
    age: 18
  }
  //初始化
  state = {
    isHot: true,
  };
  myRef = React.createRef();
  myRefCall = null;
  refPerson = React.createRef();
  changeIsHot = () => {
    /**
     *
     */
    console.log('myRef', this.myRef.current);
    console.log('myRefCall', this.myRefCall);
    console.log('myRefString', this.refs.myRefString);
    console.log('refPerson', this.refPerson);
    this.setState({
      isHot: !this.state.isHot
    })

  }
  render() {
    let { name, age, height } = this.props
    return (
      <>
        <p>姓名：{name}</p>
        <p>年龄：{age}</p>
        <p>身高：{height}</p>
        <button onClick={this.changeIsHot}>炎热</button>
        <div ref={this.myRef}>今天天气{this.state.isHot ? "炎热" : "凉爽"}</div>
        <div ref={(elementNode) => { this.myRefCall = elementNode }}>今天天气{this.state.isHot ? "炎热" : "凉爽"}</div>
        <div ref='myRefString'>今天天气{this.state.isHot ? "炎热" : "凉爽"}</div>
        <CustomTextInput {...this.props} ref={this.refPerson} />
      </>
    );
  }
}
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export function Person(props) {
  let { name, age, isHot } = props
  return (
    <>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>isHot:{isHot}</p>
    </>
  )
}
Person.propTypes = {
  sex: PropTypes.string,
  age: PropTypes.number
}
Person.defaultProps = {
  isHot: false
}
export default Weather;
