import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    // Aquí podrías realizar la autenticación con una API, una base de datos, etc.
    // Por ahora, simplemente imprimiremos los datos en la consola
    const a = await fetch("http://localhost:5000/registro/" + username + "/" + password)
    const data_res = await a.json();
    if(data_res.length === 0){
      alert("Credenciales Incorrectas");
      
    }else{
      sessionStorage.setItem("item_key", data_res.usuario._id)
      window.location.href = "/Home"
    }

    

    // Supongamos que la autenticación es exitosa, establecemos isLoggedIn en true
    
  }

  render() {
    const { username, password } = this.state;
    return (
      <div class="login-container">
        <h2 class="login-title">Iniciar sesión</h2>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label>Usuario:</label>
            <input
              type="text"
              class="form-control"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <div class="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              class="form-control"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <div class="button-group">
            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
            <Link to="/register" class="btn btn-secondary">Registrarse</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
