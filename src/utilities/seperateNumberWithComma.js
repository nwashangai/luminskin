export default (number) => number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
