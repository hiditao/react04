import React, { Component } from "react";
import One from "./One";
import Two from "./Two";

// 父组件
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "hello"
        }
    }

    change(event) {
        this.setState({
            data: event.target.value
        })
    }
  
    render() {
        return (
            <div>
                {/*
                    在父组件中定义状态和更改状态的函数
                    再通过属性将状态值和函数传递到子组件中                
                */}
                <One mydata={this.state.data} func={this.change.bind(this)}/>

                {/* 将状态state通过属性props传递到子组件 */}
                <Two other={this.state.mydata}/>
            </div>
        );
    }
}

export default App;