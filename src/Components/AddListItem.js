import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function AddListItem(props) {
  const { classes, addItem } = props;
  return (
    <div>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={addItem}>
        <AddIcon />
      </Fab>
    </div>
  );
}

AddListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddListItem);
