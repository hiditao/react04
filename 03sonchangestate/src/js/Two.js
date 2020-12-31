import React, { Component } from "react";

class Two extends Component {  
    render() {
        return (
            <div style={{backgroundColor: "pink"}}>
                <h2>子组件Two ---- {this.props.other}</h2>
            </div>
        );
    }
}

export default Two;