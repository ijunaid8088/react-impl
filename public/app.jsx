var Greeter = React.createClass({
  getDefaultProps : function() {
    return {
      name: "React@!",
      msg: "hey whats up"
    };
  },
  getInitialState : function(){
    return {
      name: this.props.name
    };
  },
  onButtonClick : function(e) {
    e.preventDefault();
    var name = this.refs.name.value

    this.setState({
      name: name
    });
    console.log(name)
  },
  render : function() {
    var name = this.state.name;
    var msg = this.props.msg;

    return (
      <div>
        <h1> hello {name}! </h1>
        <p> {msg} </p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
