const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The action object is: ', action);
  let result = next(action);
  console.log('The new state is: ', store.getState());
  console.groupEnd();
  return result;
}

export default logger;
