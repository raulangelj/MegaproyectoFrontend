import { Sizes } from '@interfaces/themes'
import { scale, selectDeviceType } from './mixins'

const sizes: Sizes = {
  xxxs: selectDeviceType({ Handset: scale(4) }, scale(4)),
  xxs: selectDeviceType({ Handset: scale(8) }, scale(8)),
  xs: selectDeviceType({ Handset: scale(12) }, scale(12)),
  sm: selectDeviceType({ Handset: scale(16) }, scale(16)),
  md: selectDeviceType({ Handset: scale(24) }, scale(24)),
  lg: selectDeviceType({ Handset: scale(32) }, scale(32)),
  xl: selectDeviceType({ Handset: scale(40) }, scale(40)),
  xxl: selectDeviceType({ Handset: scale(60) }, scale(60)),
  xxxl: selectDeviceType({ Handset: scale(100) }, scale(100)),
}

export { sizes }
