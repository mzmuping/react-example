import { connect } from 'react-redux';
//引入Count的ui组件
import ContUI from '../../components/CountUI';
//引入connect用于连接ui组件与redux
import {
  createInCrementAction,
  craeteInDecrementAction,
  createIncrementSyncAction,
} from '../../utils/mini-redux/create_action';
//作为CountUI props
const mapStateToProps = state => ({ count: state });

//作为CountUI props 操作方法
const mapDispatchToProps = dispatch => ({
  add: data => dispatch(createInCrementAction(data)),
  reduce: data => dispatch(craeteInDecrementAction(data)),
  syncAdd: data => dispatch(createIncrementSyncAction(data)),
});
// 操作
export default connect(mapStateToProps, {
  add: createInCrementAction,
  reduce: craeteInDecrementAction,
  syncAdd: createIncrementSyncAction,
})(ContUI);
