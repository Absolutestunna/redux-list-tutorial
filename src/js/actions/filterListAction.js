export const filterSuccess = () => {
  return {
    type: 'HANDLE_SUCCESS'
  }
}

export const filterCritical = () => {
  return {
    type: 'HANDLE_CRITICAL'
  }
}

export const filterWarning = () => {
  return {
    type: 'HANDLE_WARNING'
  }
}

export const filterShowAll = () => {
  return {
    type: 'HANDLE_SHOW_ALL'
  }
}

export const filterCriticalWarning = () => {
  return {
    type: 'HANDLE_CRITICAL_WARNING'
  }
}
