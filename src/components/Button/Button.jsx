import RBButton from 'react-bootstrap/Button';

export default function Button({
  children,
  variant = 'warning', 
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  ...rest
}) {
  return (
    <RBButton
      variant={variant}
      size={size === 'lg' ? 'lg' : undefined}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="custom-btn"
      {...rest}
    >
      {children}
    </RBButton>
  );
}