const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = (employers.filter((name) => {
  return name.length > 0 && name.length != '';
})).map((item) => item.toLowerCase().trim());

export default employersNames;