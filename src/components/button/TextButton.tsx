import React, { CSSProperties, MouseEventHandler } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

interface TextButtonProps {
  title: string;
  loading: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const TextButton: React.FC<TextButtonProps> = ({
  title,
  loading,
  disabled,
  style,
  onClick,
}) => {
  return (
    <LoadingButton
      variant="text"
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      sx={{
        height: '40px',
        fontSize: '14px',
        fontWeight: '400',
        backgroundColor: !loading && !disabled ? '#FFFFFF' : 'transparent',
        color: '#EA0029',
        textTransform: 'none',
        ...style,
      }}
    >
      {title}
    </LoadingButton>
  );
};

export default TextButton;
