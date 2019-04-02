import React, { Component } from "react";
import Layout from "../../components/layout";

export default class Test extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    console.log('----');
    const result=this.typeScriptFunc(1,2);
    console.log(result);
  }
  // Typescript
  typeScriptFunc(a:number,b:number):number{
    return a+b;
  }
  render() {
    return (
      <Layout>
        <div>ddd</div>
      </Layout>
    )
  }
}
