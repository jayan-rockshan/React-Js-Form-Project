import React from "react";
import "./Style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      selectbar: "",
      mylist: []
    };
  }

  testtitle(event) {
    this.setState({ title: event.target.value });
  }
  testdescription(event) {
    this.setState({ description: event.target.value });
  }
  testselectbar(event) {
    this.setState({ selectbar: event.target.value });
  }

  /*testedithard(event){
   let test = setState({title:"" }) || setState({description:"" });
    if(test){
      alert("You missed something")
    }else{
      testsubmit();
    }
 }*/

  testsubmit(event) {
    if (this.state.title === "" || this.state.description === "") {
      alert("You missed something");
    } else {
      let blogPosts = this.state.mylist;
      blogPosts.push({
        title: this.state.title,
        selectbar: this.state.selectbar,
        description: this.state.description
      });
      this.setState({ mylist: blogPosts });
      event.preventDefault();
    }
  }
  testclear(event) {
    this.setState({ title: "", description: "" });
  }
  testdelete = (index, e) => {
    const mylist = Object.assign([], this.state.mylist);
    mylist.splice(index, 1);
    this.setState({ mylist: mylist });
  };
  render() {
    return (
      <div className="test1">
        <div className="test2">
          <h1>Todo App</h1>
        </div>
        <div className='entire'>
        <form onSubmit={(e) => this.testsubmit(e)}>
          <input
            className="test3"
            value={this.state.title}
            onChange={(e) => this.testtitle(e)}
            placeholder="Title"
          ></input>
          <br />
          <textarea
            className="test4"
            value={this.state.description}
            onChange={(e) => this.testdescription(e)}
            placeholder="Description"
          ></textarea>
          <br />
          <select
            className="test5"
            value={this.state.selectbar}
            onChange={(e) => this.testselectbar(e)}
          >
            <option value="Low"> Low </option>
            <option value="Medium"> Medium </option>
            <option value="High"> High </option>
          </select>
          <br />
          <input className="testbutton1" type="submit" value="Save"></input>
        </form>
        <button className="testbutton2" onClick={(e) => this.testclear(e)}>
          clear
        </button>
        <div className="listtest1">
          <h3>Todo list itemes</h3>
        </div>

        {this.state.mylist.map((item) => {
          return (
            <li className="testlist">
              {item.title}
              <div className="testlistdes">{item.description}</div>
              <br />
              <button
                className="listButton"
                onClick={this.testdelete.bind(this.index)}
              >
                delete
              </button>
            </li>
          );
        })}
      </div>
      </div>
    );
  }
}
