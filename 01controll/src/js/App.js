import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myvalue: "hello"
        };

    }

    change(event) {
        console.log(event.target.value);
        this.setState({
            myvalue: event.target.value
        })
    }


    render() {
        return (
            <div>
                {/* 非受控组件，使用defaultVValue来指定默认的数据 */}
                <input type="text" defaultValue="默认数据" />

                {/* 受控组件 
                    1.通过props或者state给value绑定数据
                    2.该受控组件需要绑定事件，在事件处理函数内部更新数据
                 */}
                <input defaultValue="默认数据" value={this.state.myvalue} onChange={this.change.bind(this)} />

            </div>
        );
    }
}

export default App;