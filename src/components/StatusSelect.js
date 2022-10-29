import React from 'react'
import Select from "react-select";

const options = [
  { value: "Available", label: "Available" },
  { value: "Unavailable", label: "Unavailable" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "#fa7436" : "white",
    cursor: "pointer",
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    cursor: "pointer",
    outline: state.isFocused ? "2px solid #fa7436" : "none",
    padding: "0.3rem 0.3rem",
  }),
};



const StatusSelect = ({data, setData}) => {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setData({...data, status: selectedOption.value})
    console.log(`Room Status:`, selectedOption.value);
  }
  return (
    <div>
      <Select
        options={options}
        styles={customStyles}
        name="status"
        value={selectedOption}
        onChange={handleChange}
      />
    </div>
  );
}

export default StatusSelect