const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => ({
    startAction: () => dispatch(startAction),
    stopAction: () => dispatch(stopAction)
  });