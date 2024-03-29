# Country Holidays Calendar

## React + TypeScript + Vite + Nager.Date API

### Description

- application uses countries and their public holidays data from [public holiday API - Nager.Date](https://date.nager.at/Api)
- main app purpose is to allow for country search and then displaying holidays calendar for that country with other additional informations
  - manipulating API data
  - design

### Nager.Date flaws

- holidays are represented as non fixed (fixed property has value: false)
- api call for next public holidays does not return multiple holidays with the same date

### App UI

- <b>MUI</b>: The React component library is selected for this project
  1. main app UI purpose is to show list of holidays for the selected country through `calendar` component. MUI has many options for that kind of component :x:
     - calendar component is best when using as input - selecting value from it. This app only needs calendar to display holidays and long weekends, main purpose is readOnly. MUI component needs a lot of adjustments to achieve that, so it is decided to go with pure js so it can be customized for app needs
  2. creating and switching themes

### Project

1. Git Clone

- `git clone https://github.com/GeneralSting/Holidays-Calendar`

2. Install Dependencies:

- `npm install`

3. Build the Application:

- `npm run build`

4. Start the Development Server:

- `npm run dev`
