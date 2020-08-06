import { EnvJSON } from './Env'

export const Cfg = new (class {
  ENVIRONMENT = EnvJSON('REACT_APP_ENVIRONMENT')
})()
