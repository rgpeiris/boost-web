import React, { CSSProperties, ReactNode, MouseEventHandler } from 'react';

import Wrapper from '../../components/wrapper';

interface CustomCardProps {
  isMobile: boolean;
  children: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  (props, ref) => {
    const { isMobile = false, children, style, onClick } = props;

    return (
      <div
        ref={ref}
        style={{
          borderRadius: '24px',
          backgroundColor: ' #F3F4F4',
          width: isMobile ? '328px' : '548px',
          minHeight: isMobile ? '605px' : '553px',
          ...style,
        }}
        onClick={onClick}
      >
        <div
          style={{
            backgroundColor: '#F3F4F4',
            padding: isMobile ? '15px 20px 15px 20px' : '15px 40px 15px 40px',
            borderRadius: isMobile ? '20px' : '20px',
            height: '64px',
          }}
        >
          <Wrapper isMobile={isMobile} />
        </div>
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: isMobile ? '20px' : '18px 35px',
            borderRadius: isMobile ? '15px' : '15px',
            minHeight: isMobile ? '541px' : '489px',
          }}
        >
          {children}
        </div>
      </div>
    );
  },
);

CustomCard.displayName = 'CustomCard';

export default CustomCard;
