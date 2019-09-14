import React from "react";
import { Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  chip: {
    '& span': {
      transition: 'transform ease-in-out 150ms',
    }
  },
  chipTransform: {
    '& span': {
      transform: 'translateX(0px)',
    },
    '&:hover > div': {
      backgroundColor: 'rgb(66, 105, 131)',
    },
    '&:visited > div': {
      backgroundColor: 'rgb(66, 105, 131)',
    },
    '&:active > div': {
      backgroundColor: 'rgb(66, 105, 131)',
    },
    '&:focus > div': {
      backgroundColor: 'rgb(66, 105, 131)',
    }
  },
  avatarShow: {
    opacity: 1,
  },
  avatarHide: {
    opacity: 0,
  }
}));

function ChipIcon(props) {
  const classes = useStyles();

  let { isSelected } = props;

  function handleClick(e) {
    props.onClick()
    isSelected = !isSelected
  }

  return (
    <Chip
      label={props.label}
      onClick={handleClick}
      variant={!isSelected ? 'outlined' : 'default'}
      className={`${isSelected ? classes.chipTransform : null} ${classes.chip}`}
      color={'primary'}
    />
  )
}

export default ChipIcon;