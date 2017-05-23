import { injectReducer } from '~store/reducers'
import zenReducer from './modules/zen'
import loadZenContainer from 'bundle-loader?lazy!./containers/ZenContainer'

export default (store) => {
  return {
    load: loadZenContainer,
    preload: () => injectReducer(store, { key: 'zen', reducer: zenReducer })
  }
}
