import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";


class App extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            imgurl: ""
        }
    }

    change(event) {
        this.setState({
            username: event.target.value
        })
    }
    
    getNativeAjax() {
        // 1.创建 XMLHttpRequest 请求对象
        let xhr = new XMLHttpRequest();

        // 2.设置连接参数,还未请求到服务器
        xhr.open("GET", "https://api.github.com/users/" + this.state.username);

        // 3. 发起请求
        xhr.send();

        // 4. 接收数据
        xhr.onreadystatechange = () => {
            console.log(this);

            if(xhr.readyState === 4 && xhr.status === 200) {
                let obj = JSON.parse(xhr.responseText);
                console.log(obj.login, obj.avatar_url);

                this.setState({
                    imgurl: obj.avatar_url
                })
               
            }
        }
    }

    getJqueryAjax() {
        $.ajax({
            type: "GET",
            url: "https://api.github.com/users/" + this.state.username,
            data: { //请求参数

            },
            success: res => { //请求成功回调的函数
                console.log(res);
                
            },
            fail: function(err) { //请求失败回调的函数

            }
        })
    }

    getAxiosAjax(){
        axios({
            method: "get",
            url: "https://api.github.com/users/" + this.state.username,
            data: {

            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.username} onChange={this.change.bind(this)} />

                <button onClick={this.getNativeAjax.bind(this)}>原生ajax请求</button>
                <button onClick={this.getJqueryAjax.bind(this)}>jQuery的ajax请求</button>
                <button onClick={this.getAxiosAjax.bind(this)}>axios的ajax请求</button>

                <h1>{this.state.username}</h1>
                <img src={this.state.imgurl} alt=""/>
            </div>
        );
    }
}

export default App;