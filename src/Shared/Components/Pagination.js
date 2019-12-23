import React from 'react'
// import PropTypes from 'prop-types'
import { Grid, Fab } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos, MoreHoriz } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import cx from 'classnames'
import uuidV4 from 'uuid/v4'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  spacing: {
    margin: 0
  },
  primary: {
    background: '#EDEDED',
  },
  secondry: {
    background: 'none'
  },
  disabled: {
    cursor: 'not-allowed !important',
    pointerEvents: 'auto !important'
  },
  ellipsis: {
    background: '#EDEDED',
    cursor: 'not-allowed',
    color: '#EDEDED',
    '&:hover': {
      background: '#EDEDED'
    }
  },
  arrow: {
    background: '#EA7F28',
    '&:hover': {
      background: '#D37324'
    }
  }
})

const arrayRange = (start = 1, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx)
}

const Pagination = ({
  totalPages,
  currentPage,
  maxPages,
  onClickPreviousAndNext,
  onSelectPage,
  classes
}) => {
  const isNext = true
  const allPages = arrayRange(1, totalPages)
  const prevDisabled = Boolean(currentPage === 1) || false
  const nextDisabled = Boolean(currentPage === totalPages) || false
  const showInitialEllipsis = currentPage > maxPages - 2
  const showFinalEllipsis = totalPages - currentPage >= maxPages - 2
  const pagesToShow = Math.floor((maxPages - 2) / 2)
  const pagesBefore = arrayRange(currentPage - pagesToShow, currentPage - 1)
  const pagesAfter = arrayRange(currentPage + 1, currentPage + pagesToShow)

  const getEllipsis = () => (
    <Fab
      data-qa="ellipsis"
      size="small"
      disabled
      color="primary"
      aria-label="MoreHoriz"
      className={cx(classes.ellipsis, classes.fab, classes.disabled)}
      key={`ellipsis${uuidV4()}`}
    >
      <MoreHoriz />
    </Fab>
  )

  const pages = allPages.reduce((acc, value) => {
    const color = (value === currentPage ? classes.secondry : classes.primary)
    const Page = (
      <Fab
        data-qa={`page-number-${value}`}
        size="small"
        aria-label={value}
        className={cx(color, classes.fab)}
        onClick={value === currentPage ? () => { } : () => onSelectPage(value)}
        key={`${value}${uuidV4()}`}
      >
        {value}
      </Fab>
    )

    if (showInitialEllipsis || showFinalEllipsis) {
      if (value === 1 && showInitialEllipsis) {
        const ellipsis = getEllipsis()
        return [...acc, Page, ellipsis]
      }
      if (value === totalPages && showFinalEllipsis) {
        const ellipsis = getEllipsis()
        return [...acc, ellipsis, Page]
      }
    }

    if (showInitialEllipsis && showFinalEllipsis) {
      if (pagesBefore.includes(value)
        || pagesAfter.includes(value)
        || value === currentPage
      ) {
        return [...acc, Page]
      }
    } else if (showInitialEllipsis && !showFinalEllipsis) {
      if (value <= totalPages && value > totalPages - maxPages + 1) {
        return [...acc, Page]
      }
    } else if (!showInitialEllipsis && showFinalEllipsis) {
      if (value < maxPages) {
        return [...acc, Page]
      }
    } else {
      return [...acc, Page]
    }

    return acc
  }, [])

  return (
    <Grid container spacing={8} className={classes.spacing}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Fab
            data-qa="arrow-backward"
            size="small"
            color="primary"
            aria-label="Arrow"
            className={cx(classes.arrow, classes.fab)}
            onClick={() => onClickPreviousAndNext(!isNext)}
            disabled={prevDisabled}
            key={`arrow-backward-${uuidV4()}`}
          >
            <ArrowBackIos style={{ marginLeft: '5px' }} />
          </Fab>
          {pages}
          <Fab
            data-qa="arrow-forward"
            size="small"
            color="primary"
            aria-label="Arrow"
            className={cx(classes.arrow, classes.fab)}
            onClick={() => onClickPreviousAndNext(isNext)}
            disabled={nextDisabled}
            key={`arrow-forward-${uuidV4()}`}
          >
            <ArrowForwardIos />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  )
}

// DrawerPagination.propTypes = {
//   totalPages: PropTypes.number,
//   currentPage: PropTypes.number,
//   maxPages: PropTypes.number,
//   onClickPreviousAndNext: PropTypes.func.isRequired,
//   onSelectPage: PropTypes.func.isRequired,
//   classes: PropTypes.shape({
//     ellipsis: PropTypes.string,
//     fab: PropTypes.string,
//     disabled: PropTypes.string,
//     secondry: PropTypes.string,
//     primary: PropTypes.string,
//     spacing: PropTypes.string,
//     arrow: PropTypes.string
//   })
// }

// DrawerPagination.defaultProps = {
//   currentPage: 1,
//   totalPages: 1,
//   maxPages: 1,
//   classes: {}
// }

export default withStyles(styles, { withTheme: true })(Pagination)
