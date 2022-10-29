import React from 'react'
import Select from "react-select";
import { useStateValue } from '../context/stateProvider';


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



const HotelSelector = ({data, setData}) => {
  const [{hotels}, dispatch] = useStateValue();

  const options = hotels.map((hotel) => {
    return { value: hotel._id, label: hotel.name };
  })

  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setData({...data, hotel: selectedOption.value})
    console.log(`Hotel Selected:`, selectedOption.value);
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

export default HotelSelector