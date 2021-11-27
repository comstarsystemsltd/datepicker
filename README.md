# Getting Started

## Example

```
  const instance= window.instance = new Datepicker(document.getElementById('element'), {
            lang:"he",
            mode:"time",
            placeholder:"test",
            disablePast:true,
            value:Date.now(),
            onChange: (newValue) => {

            }
        });
```

## Options

#### lang: he | en,
#### mode: time | date | datetime,
#### placeholder: string,
#### disablePast: boolean,
#### value: Date.now(),
#### onChange: Function
