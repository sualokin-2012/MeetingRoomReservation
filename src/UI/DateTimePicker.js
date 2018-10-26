import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 230,
    },
});

function DateTimePicker(props) {
    const {classes} = props;

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="datetime-local"
                label="Meeting Room Reservation"
                type="datetime-local"
                defaultValue="2018-10-20T09:00"
                className={classes.textField}
                inputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}

DateTimePicker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateTimePicker);