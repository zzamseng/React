import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={ password:'' , items:[1,2,3,4,5,6,7,8,9,0]};
    

    this.handleClickOk = this.handleClickOk.bind(this);
    this.handleClickNum = this.handleClickNum.bind(this);
    this.handlclickBs = this.handlclickBs.bind(this);
  }

  componentDidMount()
  {
    this.refreshNumpad();
  }

  refreshNumpad()
  {
    this.setState({
      password : '',
      items: this.state.items.map(a => ([Math.random(),a]))
                             .sort((a,b) => a[0]-b[0])
                             .map(a => a[1])
    });
  }

  handlclickBs(e)
  {
    this.setState({
      items : this.state.items,
      password : this.state.password.slice(0, this.state.password.length-1)
    });
  }

  handleClickOk(e)
  {
    alert(this.state.password);
    this.refreshNumpad();
  }

  handleClickNum(e)
  {
    this.setState({
      items: this.state.items,
      password : this.state.password.concat(e)
    });
  }

  render()
  {
    return (
      <div className="App-main">
        <form>
          <input id="input_password" type="password" readOnly="readonly" value={this.state.password}/>
        </form>

        <div className="wrapper">
          <button className="button-style" onClick={()=>this.handleClickNum(this.state.items[0])}>{this.state.items[0]}</button>
          <button className="button-style" onClick={()=>this.handleClickNum(this.state.items[1])}>{this.state.items[1]}</button>
          <button className="button-style" onClick={()=>this.handleClickNum(this.state.items[2])}>{this.state.items[2]}</button>
          <button className="button-style" onClick={()=>this.handleClickNum(this.state.items[3])}>{this.state.items[3]}</button>
          <button className="button-style" onClick={()=>this.handleClickNum(this.state.items[4])}>{this.state.items[4]}</button>
          <button className="button-style" onClick={()=>this.handleClickNum(this.state.items[5])}>{this.state.items[5]}</button>
          <button className="button-style" onClick={()=>this.handleClickNum(this.state.items[6])}>{this.state.items[6]}</button>
          <button className="button-style" onClick={()=>this.handleClickNum(this.state.items[7])}>{this.state.items[7]}</button>
          <button className="button-style" onClick={()=>this.handleClickNum(this.state.items[8])}>{this.state.items[8]}</button>
          <button className="button-style" onClick={this.handleClickOk}>👌</button>
          <button className="button-style" onClick={()=>this.handleClickNum(this.state.items[9])}>{this.state.items[9]}</button>
          <button className="button-style" onClick={this.handlclickBs}>🔙</button>
        </div>
      </div>
    );
  }
}

export default App;
