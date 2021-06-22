import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthServices from './../services/auth.service'
import Routes from './routes/Routes'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedUser: undefined
    }
    this.authService = new AuthServices()
  }

  storeUser = loggedUser => this.setState({ loggedUser })

  fetchUser = () => {
    this.authService
      .isloggedin()
      .then(response => this.setState({ loggedUser: response.data }))
      .catch(() => this.setState({ loggedUser: undefined }))
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {

    return (

      <>

        <main>
          <Routes fetchUser={this.fetchUser} storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} />
        </main>

      </>
    )
  }
}

export default App
