# Getting Started

## Example

```
  const instance = new Datepicker(document.getElementById('element'), {
            lang:"he",
            mode:"time",
            disablePast:true,
            value:Date.now(),
            onChange: (newValue) => {
                {...do something with the value}
            }
        });
```
## SetValue
```
instance.setValue("2021-12-05");
```
## SetValue via attribute
```
const datepicker = document.getElementById('element');
datepicker.setAttribute("value","2021-12-05");
```

## Options

#### lang: he | en,
#### mode: time | date | datetime,
#### disablePast: boolean,
#### value: Date.now(),
#### onChange: Function
