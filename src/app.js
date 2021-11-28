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
    if(value){
        this.target.setAttribute("value",value);
    }
    this.observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation)=> {
           if (mutation.type === "attributes" && mutation.attributeName) {
               this.setValue(this.target.getAttribute("value"))
           }
        });
     });
     this.observer.observe(this.target, {
        attributes: true //configure it to listen to attribute changes
     });
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
