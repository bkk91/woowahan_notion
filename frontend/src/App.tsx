import React, { Component } from 'react'
import { render } from 'react-dom'
import GoogleLogin from 'react-google-login'

export class App Extends Component{

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);

    
  }
  render(){
    return (
      <div>
        <GoogleLogin>
          clientId="695559436888-g678rgh70a1bijels0rjmtl5hdutji7t.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}

        </GoogleLogin>
      </div>
    )
  }
}

export default App