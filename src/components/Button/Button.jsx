import './Button.css';

export default function Button({
  children,
  variant = 'primary',   // 'primary' | 'secondary' | 'ghost'
  size = 'md',           // 'sm' | 'md' | 'lg'
  onClick,
  type = 'button',
  disabled = false,
  ...rest
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}