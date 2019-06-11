import Trails from '../components/Trails'
import { connect } from 'react-redux'
import { getTrails } from '../redux/Actions'

const mapStateToProps = (state) => ({
  trailDATA: state.trailDATA,
  trailHeader: state.trailHeader
})
const mapDispatchToProps = (dispatch) => ({
  getTrails: (users) => dispatch(getTrails(users))
})

export default connect(mapStateToProps,mapDispatchToProps)(Trails)