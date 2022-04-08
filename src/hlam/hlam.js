const DEBOUNCE_DELAY = 300;

ref.input.addEventListener(
  'input',
  debounce(() => {
    const searchName = ref.input.value.trim();
    if (searchName.length > 1) {
      fetchCountries(searchName);
    } else {
      ref.list.innerHTML = '';
      ref.info.innerHTML = '';
    }
  }, DEBOUNCE_DELAY),
);

// trow Error
// .catch(reject => {
//       console.log(reject);
//       return Notify.failure('qqqqqqqqqq');
//     })
