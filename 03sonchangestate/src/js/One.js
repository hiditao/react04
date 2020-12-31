import React, { Component } from "react";
import PropTypes from "prop-types";

//子组件
class One extends Component {  
    render() {
        console.log(this.props)
        return (
            <div style={{border: "1px solid red"}}>
                <h1>子组件One</h1>
                {/* 
                    受控组件
                    value通过props或者state绑定数据
                    事件处理函数中更改数据                
                */}
                <input type="text" value={this.props.mydata} onChange={this.props.func}/>
            </div>
        );
    }
}

// 类型检查
One.propTypes = {
    func: PropTypes.func
}

export default One;