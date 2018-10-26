import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
//import InboxIcon from '@material-ui/icons/Inbox';
//import DraftsIcon from '@material-ui/icons/Drafts';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

function MeetingRoomList(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button>
                    <ListItemText primary="대회의실" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="중회의실" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="소회의실" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="컨퍼런스룸" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="접견실" />
                </ListItem>
            </List>
        </div>
    );
}

MeetingRoomList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeetingRoomList);