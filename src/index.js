export Experiment from './experiment'
export Variant from './variant'

import LocalStoragePersistence from './persistence/local-storage'
import NoPersistence from './persistence/none'
import CookiePersistence from './persistence/cookie'
import SessionPersistence from './persistence/session'

export const Persistence = {
  LocalStoragePersistence,
  NoPersistence,
  CookiePersistence,
  SessionPersistence
}
