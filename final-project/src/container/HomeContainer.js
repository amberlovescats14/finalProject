import Home from '../components/home/Home'
import { connect } from 'react-redux'
import { increaseCount } from '../redux/Actions'

const mapStateToProps = (state) => ({
  
  testNumber: state.testNumber
})

const mapDispatchToProps = (dispatch) => ({
  increaseCount: () => dispatch(increaseCount())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)