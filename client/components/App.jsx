import React, {PropTypes} from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplaying: false,
    }
  }

  render() {
    return (
      <div>
        <div className='text-xs-center' style={{marginTop: '1.2em'}}>
          <h4> Github Users </h4>
        </div>
        <hr />

        <div className='col-md-6 offset-md-3'>
          {this.state.isDisplaying ?
            <div className='card'>
              <div className='card-block'>
                <h5 className='card-title'> List of andela users</h5>
              </div>
              <ul className='list-group list-group-flush'>
                <a className='list-group-item'> Example1 </a>
                <a className='list-group-item'> Example2 </a>
              </ul>
            </div> :
            <div className='card'>
              <div className='card-block'>
                <h5 className='card-title'> /username/</h5>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'> Example1 </li>
                <li className='list-group-item'> Example2 </li>
              </ul>
              <div className='card-block'>
                <button className='btn btn-primary'> Back </button>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}
