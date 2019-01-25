import React, { Component } from 'react';
import HeaderBertasbih from './components/HeaderBertasbih';
import LoginBertasbih from './components/LoginBertasbih';
import HomeBertasbih from './components/HomeBertasbih';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { withRouter } from 'react-router-dom';
import { keepLogin, cookieChecked } from './actions';
import RegisterBertasbih from './components/RegisterBertasbih';
import PopokListBertasbih from './components/PopokListBertasbih';
import ManagePopokBertasbih from './components/ManagePopokBertasbih';
import PopokDetail from './components/PopokDetail';
import CartBertasbih from './components/CartBertasbih';
import HistoryBertasbih from './components/HistoryBertasbih';
import Typetext from './components/Typetext';


const cookies = new Cookies();

class App extends Component {
  state = { content: 'Ini Content' }

  componentDidMount() {
      const username = cookies.get('Ferguso');
      if(username !== undefined) {
          this.props.keepLogin(username);
      }
      else {
        this.props.cookieChecked();
      }
  }

  onBtnOKClick = () => {
    this.setState({ content: 'any content here?' })
  }

  render() {
    if (this.props.cookie) {
      return (
        <div>
          <HeaderBertasbih navBrand={"MALAKDUIT.COM"} />
          <div>
            <Route exact path="/" component={HomeBertasbih} />
            <Route exact path="/" component={Typetext} />
            <Route path="/login" component={LoginBertasbih} />
            <Route path="/register" component={RegisterBertasbih} />
            <Route path="/popoklist" component={PopokListBertasbih} />
            <Route path="/popokdetail" component={PopokDetail} />
            <Route path="/managepopok" component={ManagePopokBertasbih} />
            <Route path="/cart" component={CartBertasbih}/>
            <Route path="/history" component={HistoryBertasbih}/>
          </div>
        </div>
      )  
    } 
    else {    
    return (<div>
              <center><h1>Loading...</h1></center>
          </div>);
    }
  } 
}

const mapStateToProps = (state) => {
    return { cookie: state.auth.cookie }
}

export default withRouter(connect(mapStateToProps, { keepLogin, cookieChecked })(App));
