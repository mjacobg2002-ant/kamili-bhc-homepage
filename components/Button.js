import { IconArrow } from './icons';

// Reusable button / link. Renders an <a> so it works for anchors, tel:,
// mailto:, and external booking links alike.
export default function Button({
  href,
  children,
  variant = 'primary',
  block = false,
  external = false,
  withArrow = false,
  className = '',
  ...rest
}) {
  const cls = ['btn', `btn--${variant}`, block ? 'btn--block' : '', className]
    .filter(Boolean)
    .join(' ');
  const extra = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return (
    <a href={href} className={cls} {...extra} {...rest}>
      {children}
      {withArrow && <IconArrow width={18} height={18} />}
    </a>
  );
}
