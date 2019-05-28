import Home from '../components/Home'
import { connect } from 'react-redux'
import { addA } from '../redux/Actions'

const mapStateToProps = (state) => ({
  testNumber: state.testNumber
})

const mapDispatchToProps = (dispatch) => ({
  addA: () => dispatch(addA())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)