import _ from 'lodash';

_.mixin({
  'findByValues': function(collection, property, values) {
    return _.filter(collection, (item) => {
      return _.contains(values, item[property]);
    });
  }
});


const filterListReducer = (state, action) => {
  switch(action.type) {
  case 'HANDLE_CRITICAL':
    return  state.companyInfo.filter((co) => {
      return co.status === 'critical'
    })
    break;
  case 'HANDLE_WARNING':
    return state.companyInfo.filter((co) => {
      return co.status === 'warning'
    })
    break;
  case 'HANDLE_SUCCESS':
    return state.companyInfo.filter((co) => {
      return co.status === 'success'
    })
    break;
  case 'HANDLE_CRITICAL_WARNING':
    return _.findByValues(state.companyInfo, 'status', ['success', 'critical']);
    break;
  case 'HANDLE_SHOW_ALL':
    return state.companyInfo;
  }
  return state;
}

export default filterListReducer;
