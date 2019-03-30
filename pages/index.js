import React, { Component } from "react";
 
import { observable, decorate } from "mobx";
import { observer } from "mobx-react";

import faker from "faker";

class Data {
  avatar = faker.image.avatar();
  email = faker.internet.email();
  name = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  };
}

decorate(Data, {
  avatar: observable,
  email: observable,
  name: observable,
});

class Index extends Component {
  data = new Data();

  generate = () => {
    this.data.email = faker.internet.email();
    this.data.name.firstName = faker.name.firstName();

    /*
    this.setState({
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email()
	});
	*/
  };
  render() {
    return (
      <div>
        <h1>Index</h1>
        <button onClick={this.generate} className="btn btn-primary">
          Button
        </button>
         
        <hr />
        <dl>
          <dt>name</dt>
          <dd>{this.data.name.firstName}</dd>
          <dd>{this.data.name.lastName}</dd>
          <dt>Avatar</dt>
          <dd>
            <img src={this.data.avatar} />
          </dd>
          <dt>Email</dt>
          <dd>{this.data.email}</dd>
        </dl>
      </div>
    );
  }
}
Index = observer(Index);
export default Index;
