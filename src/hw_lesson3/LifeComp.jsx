import React, { Component } from 'react';

export default class LifeComp extends Component {
    constructor(props){
        super(props);
        this.state = {class:"off"};
        this.deletedElem = {name:"deleted"};
        this.press = this.press.bind(this);
        this.delete = this.delete.bind(this);
        console.log("Жизненый цикл - constructor, class:" +this.state.class);
    }
    componentDidMount(){
        console.log("Жизненый цикл - componentDidMount, class:" +this.state.class);
    }
    shouldComponentUpdate(){
        console.log("Жизненый цикл - shouldComponentUpdate, class:" +this.state.class);
        return true
    }
    componentDidUpdate(){
        console.log("Жизненый цикл - componentDidUpdate, class:" +this.state.class);
    }
    componentWillUnmount(){
        console.log("Жизненый цикл - componentWillUnmount");
    }
    press(){
        let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className})
    }
    delete(){
        this.setState((name)=>{
            document.getElementsByClassName(this.deletedElem.name)[0].remove(); // хочу проверить метод componentWillUnmount, но получается вызвать его только с ошибкой
        });
    }
  render() {
    console.log("Жизненый цикл - render, class:" +this.state.class);
    return <div>
        <button onClick={this.press} className={this.state.class}>Обновление компонента</button>
        <button onClick={this.delete}>Удалить компонент</button>
        {/* <div className={this.deletedElem.name}>Удаляемый компонент</div> */}
        <div>Удаляемый компонент</div>
    </div>
  }
}
