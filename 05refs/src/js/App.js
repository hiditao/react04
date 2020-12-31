import React, { Component } from "react";
import ForwardApp from "./ForwardApp";
import FuncApp from "./FuncApp";
import MyApp from "./MyApp";


class App extends Component {    
    // 1. 创建Refs：使用React.createRef()
    // 2. 使用Refs：在HTML元素或者自定义组件上通过ref属性来使用
    // 3. 访问Refs：this.ref.current表示DOM实例
    // 函数组件上不能使用Refs

    constructor(props) {
        super(props);

        // 1.创建Ref: 
        this.htmlRef = React.createRef();

        this.comRef = React.createRef();

        this.newref = React.createRef();


    }

    getDom() {
        // 3. 访问Ref
        let a = this.htmlRef.current;
        console.log(a);


        let b = this.comRef.current;
        console.log(b);
    }


    render() {
        return (
            <div>

                {/* 早期版本使用
                在元素上添加ref属性
                访问时使用this.refs.myinput 可以得到input元素 */}
               {/* <input type="text" ref="myinput" /> */}

               <button onClick={this.getDom.bind(this)}>获取真实DOM节点</button>
                {/* ######2.html元素使用Ref */}
                <h1 ref={this.htmlRef}>这是一个HTML元素</h1>
                {/* 创建出来的ref只能作用于一个元素上，如果给多个元素添加同一个Ref，得到的时最后一个元素 */}
                {/* <p ref={this.htmlRef}>这是段落</p> */}

                {/* ######类组件使用Ref */}
                <MyApp ref={this.comRef} />


                {/* ######函数组件不能使用ref属性，但可以在组件内部使用 */}
                <FuncApp />

                {/* ######函数组件使用ref，将ref转发到函数组件内部 */}
                <ForwardApp ref={this.newref}/>
                

            </div>
        );
    }
}

export default App;