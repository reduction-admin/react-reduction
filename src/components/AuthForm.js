import logo200Image from 'assets/img/logo/hive-logo.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label, UncontrolledAlert } from 'reactstrap';
import { Redirect } from 'react-router';

class AuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    validateLoginStatus: '',
    validateLoginResponse:{}
    }
   }
  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }
  
 

  changeAuthState = authState => event => {
    event.preventDefault();
    // {console.log("uerma",this.state.username)}
    this.props.onChangeAuthState(authState);
    
   
  };

  handleSubmit = event => {
    event.preventDefault();

    
    if(this.props.authState=='LOGIN'){
      
      console.log("Inside validate function");
        fetch('https://spc89vwj89.execute-api.us-west-1.amazonaws.com/Production', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pathParameters:{
              username: this.state.username,
              password: this.state.password,
            }
          })
        })
        .then(response => response.json())
        .then(response => {
          this.setState({
            validateLoginResponse: response
          })
          this.state.validateLoginStatus = this.state.validateLoginResponse.statusCode;
         
          if(this.state.validateLoginStatus==200){
            console.log("inside 200");
            this.props.history.push('/');
          }
          else{
            // alert(this.state.username + 'is not a valid username!');
          }

          
        })
        .catch(err => { console.log(err); 
        });
    }
  };

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }

  
  

  render() {
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
      FullNameLabel,
      FullNameInputProps,
      DoctorNameLabel,
      DoctorNameInputProps,
      DoctorIdLabel,
      DoctorIdInputProps,
      PatientIdLabel,
      PatienIdInputProps,
      DeviceIdLabel,
      DeviceIdInputProps
    } = this.props;

    
    

    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input onChange={e => this.setState({ username: e.target.value })} {...usernameInputProps} />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input onChange={e => this.setState({ password: e.target.value })} {...passwordInputProps } />
        </FormGroup>
        {this.isSignup && (
          <>
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps} />
          </FormGroup>
          <FormGroup>
          <Label for={FullNameLabel}>{FullNameLabel}</Label>
          <Input {...FullNameInputProps} />
          </FormGroup>
          <FormGroup>
          <Label for={DoctorNameLabel}>{DoctorNameLabel}</Label>
          <Input {...DoctorNameInputProps} />
          </FormGroup>
          <FormGroup>
          <Label for={DoctorIdLabel}>{DoctorIdLabel}</Label>
          <Input {...DoctorIdInputProps} />
        </FormGroup>
        <FormGroup>
          <Label for={PatientIdLabel}>{PatientIdLabel}</Label>
          <Input {...PatienIdInputProps} />
        </FormGroup>
        <FormGroup>
          <Label for={DeviceIdLabel}>{DeviceIdLabel}</Label>
          <Input {...DeviceIdInputProps} />
        </FormGroup>
        </>
        )}
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
          </Label>
        </FormGroup>
        {this.state.validateLoginStatus==500 ? (
            <UncontrolledAlert color="secondary">Invalid Login! User is not registered! </UncontrolledAlert>
          ) : null }
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          {this.renderButtonText()}
          
        </Button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            {this.isSignup ? (
              <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                Login
              </a>
            ) : (
              <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                Signup
              </a>
            )}
          </h6>
        </div>

        {children}
       
      </Form>
    );
  }
}

// export const validationStatus = this.props.validateLoginStatus;
export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
  FullNameLabel: PropTypes.string,
  FullNameInputProps: PropTypes.object,
  DoctorNameLabel: PropTypes.string,
  DoctorNameInputProps: PropTypes.object,
  DoctorIdLabel: PropTypes.string,
  DoctorIdInputProps: PropTypes.object,
  PatientIdLabel: PropTypes.string,
  PatienIdInputProps: PropTypes.object,
  DeviceIdLabel: PropTypes.string,
  DeviceIdInputProps: PropTypes.object,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  FullNameLabel: 'Patient Full Name',
  FullNameInputProps: {
    type: 'string',
    placeholder: 'Your full name',
  },
  DoctorNameLabel: 'Doctor Name',
  DoctorNameInputProps: {
    type: 'string',
    placeholder: 'Doctors name',
  },
  DoctorIdLabel: 'Doctor ID',
  DoctorIdInputProps: {
    type: 'string',
    placeholder: 'Doctors ID',
  },
  PatientIdLabel: 'Patient ID',
  PatienIdInputProps: {
    type: 'string',
    placeholder: 'Patient ID',
  },
  DeviceIdLabel: 'HIVE Device ID',
  DeviceIdInputProps: {
    type: 'string',
    placeholder: 'HIVE device ID',
  },

  onLogoClick: () => {},
};

export default AuthForm;
