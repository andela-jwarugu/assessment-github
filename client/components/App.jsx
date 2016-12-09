import React, {PropTypes} from 'react';
import request from 'superagent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplaying: false,
      members: [],
      username: '',
      name: '',
      repos: null,
      following: null,
      followers: null
    }

    this.handleClick = this.handleClick.bind(this);
    this.getUser = this.getUser.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  getUser(username) {
    request
      .get('http://localhost:3000/api/members/' + username)
      .then((response) => {
        let name = response.body.name;
        let repos = response.body.repos;
        let following = response.body.following;
        let followers = response.body.followers;
        this.setState({name: name, repos: repos, followers: followers,
          following: following, isDisplaying: true })
      }).catch((err) => {
        console.log(err);
      })
  }

  handleButtonClick() {
    this.setState({isDisplaying: false});
  }

  handleClick(event) {
    this.setState({username: event.target.id});
    this.getUser(event.target.id);
  }

  componentDidMount() {
    request
      .get('http://localhost:3000/api/members')
      .then((response) => {
        this.setState({members: response.body})
      }).catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <div className='text-xs-center' style={{marginTop: '1.2em'}}>
          <h4> Github Users </h4>
        </div>
        <hr />

        <div className='col-md-4 offset-md-4'>
          {!this.state.isDisplaying ?
            <div className='card'>
              <div className='card-block'>
                <h5 className='card-title'> List of andela users: </h5>
              </div>
              <ul className='list-group list-group-flush'>
                {this.state.members.map((member) => (
                  <a className='list-group-item' onClick={this.handleClick}
                    key={member} id={member}> {member} </a>
                ))}
              </ul>
            </div> :
            <div className='card'>
              <div className='card-block'>
                <h5 className='card-title'> {this.state.username} </h5>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'> Name: {this.state.name} </li>
                <li className='list-group-item'> Repos: {this.state.repos} </li>
                <li className='list-group-item'> Followers: {this.state.followers} </li>
                <li className='list-group-item'> Following: {this.state.following} </li>
              </ul>
              <div className='card-block'>
                <button className='btn btn-primary' onClick={this.handleButtonClick}> Back </button>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}
