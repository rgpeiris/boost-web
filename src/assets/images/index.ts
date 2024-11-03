type AssetPaths = {
  [key: string]: string;
};

interface AssetsProps {
  common: AssetPaths;
}

export const Assets: AssetsProps = {
  common: {
    wave_hand: require('./common/wave_hand/wave_hand.png'),
    duitnow_logo: require('./common/duitnow_logo/duitnow_logo.png'),
    boost_bank_logo: require('./common/boost_bank_logo/boost_bank_logo.png'),
  },
};
