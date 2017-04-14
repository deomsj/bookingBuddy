import React from 'react';



class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.changeNameF = this.changeNameF.bind(this);
    this.changeNameL = this.changeNameL.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.state = {
      nameF: '',
      nameL: '',
      email: '',
      id:''
    };
  };

  clicked(nameF,nameL, email) {
    console.log("CLICKED BUTTON!", name, email);
    $.ajax({
      type : 'POST',
      url: '/registerUser',
      dataType: 'json',
      data : {'id':1, 'nameL':nameL, 'nameB':nameF, 'email':email},
      success: function(comments) {
        this.setState({id:comments.id});
        this.email(this.state.email, this.state.id);
      }.bind(this)
    });
/*
    $.ajax({
      type : 'POST',
      url : '/hotwire',
      dataType : "json",
      data : {sum: 1000, location:'Atlanta, GA', dates:['04/20/2017', '04/23/2017', '3']},
      success : function(data) {
        console.log(data, "DATA");
      }.bind(this)
    });
*/
  };


  changeNameF(e) {
    this.setState({
      nameF: e.target.value,
    });
  };
  changeNameL(e) {
    this.setState({
      nameL: e.target.value,
    });
  };
   changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  };

  email(email, id) {
    setTimeout(function(){
      $.ajax({
        type : 'POST',
        url: '/email',
        dataType: 'json',
        data : {'email':email, id:id},
        success: function(comments) {
          console.log(comments, 777);
        }.bind(this)
      });
    },3000); 
  }


  render() {
    return (
      <div>
        <h1>Signup</h1>
        <input placeholder="User First Name:" className="validate" onChange={this.changeNameF} value={this.state.nameF} /> <br />
        <input placeholder="User Last Name:" className="validate" onChange={this.changeNameL} value={this.state.nameL} /> <br />
        <input placeholder="User Email:" className="validate" onChange={this.changeEmail} value={this.state.email} /> <br />
        <button onClick={ (e)=> {this.clicked(this.state.nameF, this.state.nameL, this.state.email) } }>Submit</button>
      </div>
    );
  }

}

export default Signup;