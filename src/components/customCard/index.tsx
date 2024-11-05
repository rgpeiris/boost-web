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
          borderRadius: isMobile ? '40px' : '20px',
          backgroundColor: '#f3f4f4',
          width: isMobile ? '350px' : '600px',
          ...style,
        }}
        onClick={onClick}
      >
        <div
          style={{
            backgroundColor: '#f3f4f4',
            padding: isMobile ? '15px 20px 15px 20px' : '15px 35px 15px 35px',
            borderRadius: isMobile ? '20px' : '20px',
          }}
        >
          <Wrapper isMobile={isMobile} />
        </div>
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: isMobile ? '20px' : '18px 35px',
            borderRadius: isMobile ? '15px' : '15px',
            minHeight: '500px',
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
