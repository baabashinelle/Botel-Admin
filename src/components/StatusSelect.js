import React from 'react'
import Select from "react-select";

const options = [
  { value: "Available", label: "Available" },
  { value: "Unavailable", label: "Unavailable" },
];

const StatusSelect = () => {
  return (
    <div>
        <Select options={options} />
    </div>
  )
}

export default StatusSelect