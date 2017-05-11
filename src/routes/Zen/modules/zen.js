/**
 * Constants
 */
const FETCH_ZEN_REQUEST = 'ZEN_REQUEST'
const FETCH_ZEN_SUCCESS = 'FETCH_ZEN_SUCCESS'
const FETCH_ZEN_FAILURE = 'FETCH_ZEN_FAILURE'
const CLEAR_ZEN         = 'CLEAR_ZEN'

/**
 * Actions
 */
export const requestZen = () => ({
  type: FETCH_ZEN_REQUEST
})

export const receiveZen = ({ id, text }) => ({
  type: FETCH_ZEN_SUCCESS,
  payload: { id, text }
})

export const requestZenFailure = () => ({
  type: FETCH_ZEN_FAILURE
})

export const clearZen = () => ({
  type: CLEAR_ZEN
})

export const fetchZen = () => {
  return (dispatch, getState) => {
    if (getState().zen.fetching) {
      return
    }

  }
}

/**
 * 
 */
