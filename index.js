const rangeValue = document.querySelector('.range-value')
const rangeSlider = document.querySelector('.settings__range-slider')
const frequencySlider = document.querySelector('.settings__frequency-slider')
const frequencyValue = document.querySelector('.frequency-value')
const settingsSeason = document.querySelector('.settings__seasons')
const buttonSettingSeasons = document.querySelector('.settings__seasons_btn')
const buttonSale = document.querySelector('.settings__sale_box')
const settingsSale = document.querySelector('.settings__sale_options')
const saleOptions = document.querySelector('.sale-options')
const salePersent = document.querySelector('.sale-price')
const purchaseName = document.querySelector('.purchase__name_input')
const purchasePrice = document.querySelector('.purchase__price_input')
const resultHeading = document.querySelector('.result__heading')
const resultNumber = document.querySelector('.result__number')
const resultDesc = document.querySelector('.result__desc')
const resultSection = document.querySelector('.result')
const buttonResult = document.querySelector('.get-result')

let price = 200
let final = 0
let months = 1
let frequency = 30
let salePrice = 0
let seasons = 1

purchasePrice.addEventListener('change', (e) => {
  price = purchasePrice.value
})

rangeSlider.addEventListener('input', () => {
  let rangeVal = rangeSlider.value
  rangeVal >= 12
    ? settingsSeason.classList.remove('hidden')
    : settingsSeason.classList.add('hidden')
  months = rangeSlider.value
  rangeVal >= 12 ? (rangeSlider.step = 12) : (rangeSlider.step = 1)
  if (rangeVal == 1) {
    rangeValue.textContent = `${rangeVal} месяц`
  } else if (rangeVal > 1 && rangeVal < 5) {
    rangeValue.textContent = `${rangeVal} месяца`
  } else if (rangeVal > 4 && rangeVal < 12) {
    rangeValue.textContent = `${rangeVal} месяцев`
  } else if (rangeVal == 12) {
    rangeValue.textContent = `${rangeVal / 12} год`
  } else if (rangeVal >= 24 && rangeVal < 49) {
    rangeValue.textContent = `${rangeVal / 12} года`
  } else if (rangeVal > 49) {
    rangeValue.textContent = `${rangeVal / 12} лет`
  }
})

settingsSeason.addEventListener('click', (e) => {
  if (e.target.classList.contains('settings__seasons_btn')) {
    e.target.classList.toggle('settings__seasons_btn-disabled')
  }
  if (e.target.classList.contains('settings__seasons_btn-disabled')) {
    seasons -= 0.25
  } else seasons += 0.25
})

frequencySlider.addEventListener('input', () => {
  frequency = frequencySlider.value
  if (frequency == 1) {
    frequencyValue.textContent = 'Раз в месяц'
    frequency = 1
  } else if (frequency == 2) {
    frequencyValue.textContent = 'Два раза в месяц'
    frequency = 2
  } else if (frequency == 3) {
    frequencyValue.textContent = 'Раз в неделю'
    frequency = 4.5
  } else if (frequency == 4) {
    frequencyValue.textContent = 'Два раза в неделю'
    frequency = 9
  } else if (frequency == 5) {
    frequencyValue.textContent = 'Три раза в неделю'
    frequency = 13.5
  } else if (frequency == 6) {
    frequencyValue.textContent = 'Четыре раза в неделю'
    frequency = 18
  } else if (frequency == 7) {
    frequencyValue.textContent = 'Пять раз в неделю'
    frequency = 22.5
  } else if (frequency == 8) {
    frequencyValue.textContent = 'Шесть раз в неделю'
    frequency = 27
  } else {
    frequencyValue.textContent = 'Каждый день'
    frequency = 30
  }
})

buttonSale.addEventListener('change', function (e) {
  saleOptions.classList.toggle('hidden')
})

buttonResult.addEventListener('click', function (e) {
  buttonSale.checked
    ? (salePrice = 1 - salePersent.value / 100)
    : (salePrice = 1)
  resultSection.classList.remove('hidden')
  resultHeading.textContent = `${purchaseName.value}:`
  let times = months * frequency * seasons
  let last = Math.floor(times).toString().slice(-1)
  let last2 = Math.floor(times).toString().slice(-2)
  final = (price * salePrice) / times
  resultNumber.textContent = `${final.toFixed(2)} $ за раз`
  resultDesc.textContent = `Настоящая цена покупки, если воспользоваться ею ${Math.floor(
    times
  )} ${
    last == 0 ||
    last == 1 ||
    last == 5 ||
    last == 6 ||
    last == 7 ||
    last == 8 ||
    last == 9 ||
    (last2 > 10 && last2 < 21)
      ? 'раз'
      : 'раза'
  }`
})
