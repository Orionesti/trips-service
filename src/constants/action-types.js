import mirrorKeys from '../utils/mirror-keys'

const ActionTypes = mirrorKeys({
  LOAD_TRIPS: null,
})

ActionTypes.apiTypes = type => [type, type + '_SUCCESS', type + '_FAIL']

export default ActionTypes
