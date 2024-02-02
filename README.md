<div id="top" align="center">

# rz-openweather

A Web Component for Weather & environment data

Shows the weather and environemnt data from given loaction

</div>

## Authors

- [@Zheng-Bote](https://www.github.com/Zheng-Bote)

## Version

v0.1.0

## License

[MIT](https://choosealicense.com/licenses/mit/)

## API Reference

#### Parameters

```
    <rz-openweather></rz-openweather>
```

```
    <rz-openweather location="Munich"></rz-openweather>
```

| Parameter  | Type     | Description          |
| :--------- | :------- | :------------------- |
| `location` | `string` | **Optional**. "city" |

## Installation

**_ cookie _**

needs a cookie with API key from https://www.weatherapi.com/

```
rz-openweather=<YOUR_API-KEY>
```

used folder structure

```bash
.
├── assets
│   ├── index-4U__hwAE.css
│   └── index-hA-240YH.js
├── favicon.ico
└── index.html

```

## Usage/Examples

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="ZHENG Robert" />

    <title>Web Component</title>

    <meta name="description" content="Web Component for HTML footer" />
    <meta name="version" content="v0.1.0" />
    <meta name="author" content="ZHENG Robert" />
    <meta name="date" content="2016-01-02T01:30:00+01:00" />

    <link rel="alternate icon" href="./favicon.ico" />
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" crossorigin href="/assets/main.css" />
  </head>
  <body>
    <div id="app">
      <rz-openweather location="Munich"></rz-openweather>
    </div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

## Screenshots

**_ loaded weather data _**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-openweather/main/assets/img/Screenshot_data.png" width="100%" height="auto" />

**_ no cookie with API-Key _**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-openweather/main/assets/img/Screenshot_no_cookie.png" width="100%" height="auto" />

**_ search masq _**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-openweather/main/assets/img/Screenshot_no_data.png" width="100%" height="auto" />

## Used By

This web component is used by the following web sites:

- [hase-zheng.net: Micro-Frontends and Microservices](https://www.hase-zheng.net)
- [Robert Zheng Landing Page](https://www.robert.hase-zheng.net)
- [Points of Interest: Geo-Coordinates and Photos of POI's](https://www.flag-me.info/)
- [ZHENG Bote: private travel photos](https://www.bote.hase-zheng.net/)
- [DigiDocuDev: web-based documentation management](https://www.digidocu.dev/)

### the end

:vulcan_salute:

<p align="right">(<a href="#top">back to top</a>)</p>
