import React, { Component } from 'react';
import './App.css';
import DateTimePicker from './UI/DateTimePicker';
import MeetingRoomList from './UI/MeetingRoomList'
import TimeList from './UI/TimeList'
import Calendar from 'react-calendar'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({date})  
  
  render() {
    return (
      <div className="App">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div>Meeting Room Reservation System</div>                      
        </Grid>
        <Grid item xs={12} align='center'>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}>
          </Calendar>
        </Grid>
        <Grid item xs={6}>
          <TimeList>
          </TimeList>
        </Grid>
        <Grid item xs={6}>
          <MeetingRoomList>
          </MeetingRoomList>
        </Grid>
      </Grid>
      <div>
        {this.state.date.getFullYear()}/
        {this.state.date.getMonth()}/
        {this.state.date.getDay()}
      </div>
      </div>
    );
  }
}

export default App;
