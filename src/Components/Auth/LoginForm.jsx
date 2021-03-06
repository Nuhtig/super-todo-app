import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: '20px',
  },
});

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === '' && password === '') {
      alert('please enter login credentials');
    } else {
      fetch('/users', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => console.log(res));
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="username"
          label="Username"
          className={classes.textField}
          value={this.state.username}
          onChange={this.handleChange('username')}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Login
        </Button>
      </form>
    );
  }
}
export default withStyles(styles)(LoginForm);
