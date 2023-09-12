export default {
  theme: '#D82FB1',
  loader: '#BB1DD8',
  lighPink: '#FA2DFAC6',
  gray: "#707070",

  black: 'rgba(20,19,19,1)',
  blackOpacity10: 'rgba(0,0,0,0.1)',
  blackOpacity12: 'rgba(0,0,0,0.12)',
  blackOpacity15: 'rgba(0,0,0,0.15)',
  blackOpacity20: 'rgba(0,0,0,0.20)',
  blackOpacity25: 'rgba(0,0,0,0.25)',
  blackOpacity40: 'rgba(0,0,0,0.4)',
  blackOpacity50: 'rgba(0,0,0,0.5)',
  blackOpacity60: 'rgba(0,0,0,0.6)',
  blackOpacity70: 'rgba(0,0,0,0.7)',
  blackOpacity80: 'rgba(0,0,0,0.8)',
  blackOpacity90: 'rgba(0,0,0,0.9)',

  white: '#FFFFFFFF',
  whiteOpacity50: 'rgba(255, 255, 255, 0.5)',
  whiteOpacity70: 'rgba(255, 255, 255, 0.7)',
  white: '#fff',
  black: '#000',
  blue: '#5D5FEE',
  grey: '#BABBC3',
  light: '#F3F4FB',
  darkBlue: '#7978B5',
  red: 'red',

}

const commonColor = {
  commonWhite: '#FFFFFF',
  commonBlack: '#000000',
  activeColor: '#DE5E69',
  deactiveColor: '#DE5E6950',
  boxActiveColor: '#DE5E6940',
};

const lightColor = {
  themeColor: '#FFFFFF',
  white: '#000000',
  sky: '#DE5E69',
  gray: 'gray',
  ...commonColor,
};

const darkColor = {
  themeColor: '#000000',
  white: '#FFFFFF',
  sky: '#831a23',
  gray: 'white',
  ...commonColor,
};

export { commonColor, lightColor, darkColor };