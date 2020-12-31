import React from "react";

// 函数组件中没有this
function FuncApp(props) {
    // 在函数组件内部使用Ref
    let myRef = React.createRef();

    function getMyDom() {
        let inner = myRef.current;
        console.log(inner);
    }

    return (
        <div ref={myRef}>
            <a href="#">百度</a>
            <button onClick={getMyDom}>获取函数组件</button>
        </div>
    )
}

export default FuncApp;