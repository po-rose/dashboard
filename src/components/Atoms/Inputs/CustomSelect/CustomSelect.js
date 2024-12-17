import Select from 'react-select';
import * as styles from './style.css';
import { ChevronDown, Eye } from 'lucide-react';

const CustomSelect = ({ label, required, wrapper = true, placeholder, icon, padding, backgroundColor, options = [], defaultOption, isSearchable = true, onChange }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      boxShadow: state.isFocused ? '0px 0px 4px rgba(255, 255, 255, 0.2)' : 'none',
      backgroundColor: backgroundColor ? backgroundColor : 'rgba(43, 43, 43, 1)',
      '&:hover': {
        borderColor: '#5C5C5C',
      },
      padding: '2px',
      borderRadius: '8px',
      outline: 'none',
      width: '100%',
      minHeight: '100%',
      transition: 'box-shadow 200ms ease',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'rgba(255, 255, 255, 1)',
      fontSize: '16px',
      fontWeight: '400',
      marginLeft: icon ? '40px' : '10px',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#F472B6',
      transform: state?.selectProps?.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
      transition: 'transform 200ms ease',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected || state.isFocused ? 'rgba(43, 43, 43, 1)' : 'transparent',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(24, 24, 24, 1)',
        color: 'white',
      },
      cursor: 'pointer',
      padding: '8px 20px',
    }),
    menu: (provided) => ({
      ...provided,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderRadius: '6px',
      marginTop: '4px',
      backgroundColor: 'rgba(43, 43, 43, 1)',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
      marginLeft: icon ? '40px' : '10px',
    }),
  };

  return (
    <>
      {wrapper ? (
        <div className={styles.container}>
          <label className={styles.labelStyle}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
          <div 
            className={styles.inputContainer} 
            style={{ padding: padding || '10px' }}
          >
            {icon ? (
              <Eye
                style={{ position: 'absolute', left: 20, zIndex: 10000 }}
                color='white'
                size={20}
              />
            ) : null}
            <Select
              options={options}
              placeholder={placeholder && placeholder}
              components={{
                DropdownIndicator: () => <ChevronDown size={20} className={styles.dropDownIcon} />,
                IndicatorSeparator: () => null,
              }}
              styles={customStyles}
              defaultValue={defaultOption ? options.find(option => option.value === defaultOption.value) : null}
              isSearchable={isSearchable}
              onChange={onChange}
            />
          </div>
        </div>
      ) : (
        <div className={styles.inputContainerwithoutWrapper}>
          <Select
            options={options}
            placeholder={placeholder}
            components={{
              DropdownIndicator: () => <ChevronDown size={20} />,
              IndicatorSeparator: () => null,
            }}
            styles={customStyles}
            defaultValue={defaultOption ? options.find(option => option.value === defaultOption) : null}
            isSearchable={isSearchable}
            onChange={onChange}
          />
        </div>
      )}
    </>
  );
};
export default CustomSelect;
