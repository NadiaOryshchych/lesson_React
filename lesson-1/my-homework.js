const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = (employers.filter((name) => {
   return name.length > 0 && name.length != '';
})).map((item) => item.toLowerCase().trim());

let sponsors = {
   cash: [40000, 5000, 30400, 12000],
   eu: ['SRL', 'PLO', 'J&K'],
   rus: ['RusAuto', 'SBO']
};

calcCash = (own = 0, ...arr) => {
   [arr] = arr;
   const res = (arr.reduce((total, current) => total + current)) + own;
   return res
}

let {cash, eu, rus} = sponsors;

let money = calcCash(null, cash);

makeBusiness = (owner, director = 'Victor', cash, emp) => {
   const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
   console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}.
      And our employers: ${emp}`);
   console.log(`And we have a sponsors: `);
   console.log.apply(null, sumSponsors);
   console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
// makeBusiness.apply(null, ['Sam', undefined, money, employersNames]);
makeBusiness(...['Sam', undefined, money, employersNames]);
