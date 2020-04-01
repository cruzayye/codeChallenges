
componentDidMount() {
  //this method can be used to make API calls, while set interval will make the call every 2 seconds
  setInterval(() => {

  }, 2000)
}

shouldComponentUpdate(nextProp, nextState) {
  //only used with Component, not PureComponent
  return (this.state.val ==== nextState.val ? false : true)
}