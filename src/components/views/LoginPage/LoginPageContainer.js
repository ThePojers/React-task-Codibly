import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { fetchFromAPI, getData, getLoadingState, fetchFromAPIError } from '../../../redux/axiosRedux';

const mapStateToProps = (state) => ({
  data: getData(state),
  loading: getLoadingState(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchFromAPI()),
  fetchDataError: () => dispatch(fetchFromAPIError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);