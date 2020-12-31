import React, { Component } from "react";

// 父组件
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "张三",
            passwd: "666"
        }
    }

    changeName(event) {
        this.setState({
            username: event.target.value
        })
    }

    changePwd(event) {
        this.setState({
            passwd: event.target.value
        })
    }

    submit(event) {
        event.preventDefault();

        // jQuery Ajax请求
        // $.ajax({
        //     type: "POST",
        //     url: "http://localhost:7001/login",
        //     data: {
        //         username: this.state.username,
        //         passwd: this.state.passwd
        //     },
        //     success: function(res) {

        //     },
        //     fail: function(err) {

        //     }
        // })
    }

    
  
    render() {
        return (
            <div>
               <form onSubmit={this.submit.bind(this)}>

                    昵称: <input type="text" name="username" value={this.state.username} onChange={this.changeName.bind(this)}/><br />
                    密码: <input type="password" name="passwd" value={this.state.passwd} onChange={this.changePwd.bind(this)}/><br />
                    <input type="submit"/>

               </form>

            </div>
        );
    }
}

export default App;