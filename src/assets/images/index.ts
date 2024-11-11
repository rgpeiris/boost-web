import waveHand from './common/wave_hand/wave_hand.png';
import duitnowLogo from './common/duitnow_logo/duitnow_logo.png';
import boostBankLogo from './common/boost_bank_logo/boost_bank_logo.png';
import backgroundWeb from './common/background_web/background_web.png';
import infoIcon from './transaction/info_icon/info_icon.png';
import numberOne from './transaction/number_one/number_one.png';
import numberTwo from './transaction/number_two/number_two.png';
import numberThree from './transaction/number_three/number_three.png';

type AssetPaths = {
  [key: string]: string;
};

interface AssetsProps {
  common: AssetPaths;
  transaction: AssetPaths;
}

export const Assets: AssetsProps = {
  common: {
    wave_hand: waveHand,
    duitnow_logo: duitnowLogo,
    boost_bank_logo: boostBankLogo,
    background_web: backgroundWeb,
  },
  transaction: {
    info_icon: infoIcon,
    number_one: numberOne,
    number_two: numberTwo,
    number_three: numberThree,
  },
};
