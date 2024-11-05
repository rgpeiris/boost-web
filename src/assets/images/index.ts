import waveHand from './common/wave_hand/wave_hand.png';
import duitnowLogo from './common/duitnow_logo/duitnow_logo.png';
import boostBankLogo from './common/boost_bank_logo/boost_bank_logo.png';
import backgroundWeb from './common/background_web/background_web.png';

type AssetPaths = {
  [key: string]: string;
};

interface AssetsProps {
  common: AssetPaths;
}

export const Assets: AssetsProps = {
  common: {
    wave_hand: waveHand,
    duitnow_logo: duitnowLogo,
    boost_bank_logo: boostBankLogo,
    background_web: backgroundWeb,
  },
};
