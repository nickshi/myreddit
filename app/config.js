import Dimensions from 'Dimensions';

const window = Dimensions.get('window');


export default {
  appName: 'Reddit',

  // Window Dimensions
  windowHeight: window.height,
  windowWidth: window.width,

  // General Element Dimensions
  navbarHeight: 64,
  statusBarHeight: 22,
  tabbarHeight: 49,


  // Grid
  windowWidthHalf: window.width * 0.5,
  windowWidthYhird: window.width * 0.333,
  windowWidthYwoThirds: window.width * 0.666,
  windowWidthQuarter: window.width * 0.25,
  windowWidthThreeQuarters: window.width * 0.75,

  // Google Analytics - uses a 'dev' account while we're testing
  gaTrackingId: (__DEV__) ? 'UA-84284256-2' : 'UA-84284256-1',


  // Fonts
  baseFont: "Avenir",
  baseFontSize: 14,

  // Colors
  primaryColor: "#4099FF",
  secondaryColor: "#FFE229",
  textColor: "#555",
  borderColor: "#E7E7E7",
}