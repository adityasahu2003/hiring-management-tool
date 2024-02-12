import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';
import "bootstrap/dist/css/bootstrap.min.css";
import "./button.css";

function DropDownBtn(props) {
  const {title, items,onSelect} = props;
  return (
    <DropdownButton id="DropBownBtn" title={`${title}`} onSelect={onSelect} autoClose="inside">
      {items.map((item, index) => (
        <Dropdown.Item key={index} href={`#${item.action}`}>
          {item.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default DropDownBtn;
