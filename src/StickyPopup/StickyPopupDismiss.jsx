import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  StickyPopupDismiss: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1)
  }
})

/**
 * The `<StickyPopupDismiss />` component is used by `<StickyPopup />`
 * when it's meant to be dismissable.
 */
export const StickyPopupDismiss = ({
  classes,
  closeText,
  onClose
}) => {
  return (
    <IconButton
      className={classes.StickyPopupDismiss}
      key='close'
      aria-label={closeText}
      color='inherit'
      onClick={onClose}
      size='small'
    >
      <CloseIcon fontSize='small' />
    </IconButton>
  )
}

StickyPopupDismiss.defaultProps = {
  closeText: 'Close'
}

StickyPopupDismiss.propTypes = {
  /**
   * An optional string to describe the ARIA label
   */
  closeText: PropTypes.string,
  /**
   * The callback called when button is clicked.
   */
  onClose: PropTypes.func
}

export default withStyles(styles)(StickyPopupDismiss)
