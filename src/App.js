import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DateTimePicker from './UI/DateTimePicker';
import MeetingRoomList from './UI/MeetingRoomList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <DateTimePicker>

          </DateTimePicker>
        </div>
        <div>
          <MeetingRoomList>
            
          </MeetingRoomList>
        </div>
      </div>
    );
  }
}

export default App;
