import React, { useState } from "react";
import Switch from '@mui/material/Switch';
import "./button.css";

/**
 * Functional component representing a button with an optional switch.
 * @param {Object} props - React props for the Button component.
 * @param {ReactNode} props.children - The content inside the button.
 * @param {string} props.type - The type of the button.
 * @param {function} props.onClick - The function to be called on button click.
 * @param {Object} props.switchLabel - The label configuration for the optional switch.
 * @returns {ReactNode} - The rendered Button component.
 */

function Button(props) {
  // Destructure props for easy access
  const { children, type, onClick, switchLabel } = props;

  // Local state for the switch's checked state
  const [isChecked, setIsChecked] = useState(false);

  /**
   * Handles the change event of the switch.
   * Toggles the switch state and invokes the provided onChange callback.
   */
  const handleSwitchChange = () => {
    // Toggle the isChecked state
    setIsChecked(!isChecked);

    // Check if switchLabel prop exists and has an onChange callback
    if (switchLabel && switchLabel.onChange) {
      // Invoke the callback with the updated switch state
      switchLabel.onChange(!isChecked);
    }
  };

  // JSX structure for the Button component
  return (
    <>
      {/* Button element with dynamic ID and CSS class */}
      <button id={`button-${type}`} className='button' onClick={onClick}>
        {/* Render the content inside the button */}
        {children}

        {/* Render the switch only if switchLabel prop is provided */}
        {switchLabel && (
          <Switch
            {...switchLabel}
            size="medium"
            checked={isChecked}
            onChange={handleSwitchChange}
          />
        )}
      </button>
    </>
  );
}

// Export the Button component as the default export
export default Button;
