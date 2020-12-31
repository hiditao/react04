import React from "react";

// newref表示使用组件时，ref属性提供的数据
const ForwardApp = React.forwardRef((props, newref) => {

    function getNewDom() {
        let n = newref.current;
        console.log(n);
    }

    return (
        <div>
            <ul ref={newref} >
                <li>列表1</li>
                <li>列表2</li>
                <li>列表3</li>
            </ul>
            <button onClick={getNewDom}>获取实例</button>
        </div>
    );
})

export default ForwardApp;