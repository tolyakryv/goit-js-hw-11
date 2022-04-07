import { ref } from '..';
export function renderMarkup(value) {
  ref.list.innerHTML = '';
  ref.info.innerHTML = '';
  const language = value[0].languages.map(({ name }) => name).join(',  ');
  const markupCountriesInfo = value
    .map(
      ({ name, capital, flags: { svg }, population }) =>
        `<ul><li class='info'><img src='${svg}' alt ="${name}"  width="60" height="30"  ></img>   ${name}</li>
      <li>Capital:  ${capital}</li>
      <li>Population:  ${population}</li>
      <li>Languages:  ${language}</li></ul>`,
    )
    .join('');
  const markupCountriesList = value
    .map(
      ({ name, flags: { svg } }) =>
        `<li><img src='${svg}' alt ="${name}"  width="30" height="15" ></img>   ${name}</li>`,
    )
    .join('');
  if (value.length === 1) {
    ref.info.insertAdjacentHTML('afterbegin', markupCountriesInfo);
  } else {
    if (value.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      return console.log(value.length);
    }
    ref.list.insertAdjacentHTML('afterbegin', markupCountriesList);
  }
}
