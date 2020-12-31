import React, { Component } from "react";

class SelectAll extends Component {

    constructor(props) {
        super(props);

        this.state = {
            all: false,
            list: [
                {
                    id: 1,
                    title: "苹果",
                    check: false
                },
                {
                    id: 2,
                    title: "橘子",
                    check: false
                },
                {
                    id: 3,
                    title: "西瓜",
                    check: false
                }
            ]
        }

    }

    change(event, index) {
        // 某些方法（如数组方法）更改原数组后并不会返回原数组，所以可以先改变数组后再重新用setState给数组赋值
        // this.state.arr.push(111);
        // this.setState({
        //     arr: this.state.arr
        // })

        this.state.list[index].check = event.target.checked;

        // 只要某一项被选中，都要去判断所有的子项是否都选中，如果都选中，那么全选要选中
        // 只要其中一个子项没有选中，全选是不选中的
        let flag = true;
        for(let i = 0; i < this.state.list.length; i++) {
            if(!this.state.list[i].check) {
                flag = false;
                break;
            }
        }
        

        this.setState({
            list: this.state.list,
            all: flag
        })
    }

    // 全选和反选
    selectAll(event) {
        // 将全选的状态传递给每一个子选项
        for(let i = 0; i < this.state.list.length; i++) {
            this.state.list[i].check = !this.state.all
        }
        
        this.setState({
            all: !this.state.all,
            list: this.state.list
        })

        
    }

    render() {
        return (
            <div>
                <label><input type="checkbox" checked={this.state.all} onChange={this.selectAll.bind(this)}/>全选 </label>

                <ul>
                    {this.state.list.map((item, index)=> {
                       return <li key={item.id}>
                            <label><input type="checkbox" checked={item.check} onChange={(e)=>{this.change(e, index)}}/> {item.title} </label>
                        </li>
                    })}
                </ul>

            </div>
        );
    }
}

export default SelectAll;