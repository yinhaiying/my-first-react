// 组件需要支持参数啊。那么JS中什么支持参数传递了。毫无疑问是函数。
//
import React from 'react';
import ReactDom from 'react-dom';



const Header = (
    <header>
        header
    </header>
);

// 支持外界传递参数
const Header2 = function(props){
  return (
    <header>
        header:{props.name}
    </header>   
  )
}







// 为了区分组件与文本的区别，使用{}进行包裹。
const div = (
  <div>
      {Header}
      <p>
          <span>hello,react</span>
      </p>
      {/* {Header2({name:'react的入门'})}  使用方式一  */}
      {/* 使用方式二:使用元素的方式 */}
      <Header2 name = "react的入门222"></Header2>

  </div>
); 
ReactDom.render(div,document.getElementById('root'));


//  React的传参

//  {Header2({name:'react的入门'})}
//  <Header2 name = "react的入门222"></Header2>