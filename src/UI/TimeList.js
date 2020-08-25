import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,        
        backgroundColor: theme.palette.background.paper,
    },
});

class TimeList extends Component {
    
    render() {
        return (
            <div>
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="09:00" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="09:30" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="10:00" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="10:30" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="11:00" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="11:30" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="12:00" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="12:30" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="13:00" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="13:30" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="14:00" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="14:30" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="15:00" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="15:30" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="16:00" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="16:30" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="17:00" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="17:30" />
                    </ListItem>                    
                </List>
            </div>
        );
    }
}

TimeList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeList);