import React from 'react';
import cx from 'classname';
import styles from './button.module.scss';

export const BUTTON_VARIATION = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  TERTIARY: 'TERTIARY',
};

function Button({
  variation, children, className, onClick,
}) {
  const VARIATION_VS_STYLES = {
    [BUTTON_VARIATION.PRIMARY]: styles.primary,
    [BUTTON_VARIATION.SECONDARY]: styles.secondary,
    [BUTTON_VARIATION.TERTIARY]: styles.tertiary,
  };

  return (
    <button className={cx(VARIATION_VS_STYLES[variation], className)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
