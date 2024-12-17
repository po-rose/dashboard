export { default } from './LanguageSelect';

const LanguageSelect = ({ width, padding, customStyles, ...props }) => {
  const LanguageSelectStyles = {
    control: (provided) => ({
      ...provided,
      // ... existing styles ...
      ...(customStyles?.control || {})  // Allow style override
    }),
    // ... other style objects ...
  };
  // ... rest of component
};
