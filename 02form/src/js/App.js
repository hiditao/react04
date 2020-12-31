import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            txt: "hello",
            check: "man",
            tool: "react",
            box: true,
            area: "hello"

        };

    }

    changeTxt(event) {
        console.log(event.target.value);
        this.setState({
            txt: event.target.value
        })
    }

    changeRadio(event) {
        console.log(event.target.value);
        this.setState({
            check: event.target.value
        })
    }


    changeTool(event) {
        this.setState({
            tool: event.target.value
        })
    }

    changeBox(event) {
        console.log(event.target.value);
        this.setState({
            box: !this.state.box
        })
    }

    changeArea(event) {
        this.setState({
            area: event.target.value
        })
    }

    changeSelect(event) {
        this.setState({
            selectvalue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>文本输入框： {this.state.txt}</h2>
                <input value={this.state.txt} onChange={this.changeTxt.bind(this)} />
                <br />

                <h2>单选框：{this.state.check}</h2>
                <input type="radio" value="man" id="man" name="sex" checked={this.state.check === "man"} onChange={this.changeRadio.bind(this)}/> 
                <label htmlFor="man">男</label>
                <input type="radio" value="woman" id="woman" name="sex" checked={this.state.check === "woman"} onChange={this.changeRadio.bind(this)}/> 
                <label htmlFor="woman">女</label>
                <br /><br />

                <h2>单选框：{this.state.changeTool}</h2>
                <label><input type="radio" value="react" name="tool" checked={this.state.tool === "react"} onChange={this.changeTool.bind(this)}/> A. React </label><br />
                <label><input type="radio" value="vue" name="tool" checked={this.state.tool === "react"} onChange={this.changeTool.bind(this)}/> B. Vue </label><br />
                <label><input type="radio" value="angular" name="tool" checked={this.state.tool === "react"} onChange={this.changeTool.bind(this)}/> C. Angular </label><br />


                <h2>复选框：{this.state.box}</h2>
                <input type="checkbox" value="study" checked={this.state.box} onChange={(e) => {this.changeBox(e)}}/> 学习

                <h2>多行文本输入框：{this.state.area}</h2>
                <textarea value={this.state.area} onChange={this.changeArea.bind(this)}></textarea>

                <h2>下拉选择框：{this.state.selectvalue}</h2>
                <select value={this.state.selectvalue} onChange={this.changeSelect.bind(this)}>
                    <option value="chengdu">成都</option>
                    <option value="beijing">北京</option>
                    <option>上海</option>
                </select>

            </div>
        );
    }
}

export default App;