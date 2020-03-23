import React, { Component } from "react";

class App extends Component {
   state = {
      userid: "",
      password: "",
      email: "",
      disabled: true,
   };

   handleChange = e => {
      e.preventDefault();
      const { value, name } = e.target;

      this.setState({
         [name]: value,
      });
   };

   isSafe = () => {
      const passwordMatch = this.state.password.indexOf(this.state.userid);
      console.log(passwordMatch);
      this.setState({
         disabled: (this.state.password.length < 5, passwordMatch) ? true : false,
      });

      // const passwordMatch = this.state.password.indexOf(this.state.userid);
      // const emailMatch = this.state.email.indexOf("@");
      // const alphabet = /(?=.*[a-z])(?=.*[A-Z])/;

      // console.log(this.state.userid);
      // console.log(this.state.password);

      // (this.state.password.length > 5,
      // alphabet.test(this.state.password),
      // passwordMatch,
      // emailMatch)
      //    ? this.setState({ disabled: false })
      //    : this.setState({ disabled: true });
   };

   render() {
      return (
         <form onChange={this.isSafe}>
            <input name="userid" value={this.state.userid} onChange={this.handleChange}></input>
            <input name="password" value={this.state.password} onChange={this.handleChange}></input>
            <input name="email" value={this.state.email} onChange={this.handleChange}></input>
            <button type="button" disabled={this.state.disabled}>
               Submit
            </button>
         </form>
      );
   }
}

export default App;
