import React from 'react';
import './button.css';
import { useEffect } from 'react';

export class Animal {
  private _name = '';

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }
}

export class Cat extends Animal {
  public override set name(v: string) {
    super.name = v;

    console.log(`Meow: ${v}`);
  }
}



interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  useEffect(() => {
    const cat = new Cat();
    cat.name = 'CoolCat';
  }, []);
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
