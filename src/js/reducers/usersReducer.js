export default function reducer(state={
    users: [],
    user: {},
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USERS": {
        return {
          ...state,
          fetching: true,
        }
      }
    }

    return state
}
