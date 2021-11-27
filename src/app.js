import React from "react";
import DatePicker from "./components/datepicker";
import ReactDOM from "react-dom";

class MuiDatepicker {
  constructor(target, props) {
    const {
      onChange,
      label,
      value,
      lang = "en",
      placeholder,
      disablePast,
      mode = "date",
    } = props;
    const elementRef = React.createRef();
    this.target = target;
    const _onChange = (newDate) => {
        this.target.setAttribute("value",newDate);
      onChange(newDate);
    };
    setTimeout(() => {
      this.sourceElement = target.firstElementChild;
      this.setValue = elementRef.current.setValue;
    }, 0);
    ReactDOM.render(
      <DatePicker
        placeholder={placeholder}
        mode={mode}
        disablePast={disablePast}
        lang={lang}
        ref={elementRef}
        label={label}
        value={value}
        onChange={_onChange}
      />,
      target
    );
  }
}
export default MuiDatepicker;
