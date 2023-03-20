import React from "react";

/**
 * Button Component
 * This follows onion architecture, this means that this button will be used throughout the
 * website but is scaffolded such that we can change this for a UI library (MUI, Chakra UI, etc))
 * or something else entirely in the future.
 *
 * @param { string } label
 * @param { () => void } onClick
 * @param { string } className
 */

const Button = ({ label, onClick, className }) => {
  return (
    <button
      data-testid="button-container"
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;
