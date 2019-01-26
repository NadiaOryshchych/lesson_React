 let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

 let employersNames = employers.filter((name) => {
    return name.length > 0 && name.length != '';
 });
 let employersNames2 = employersNames.map((item) => item.toLowerCase().trim());

 let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
 };

 function calcCash(own = 0) {
    let everyCash = Array.prototype.slice.call(arguments);
    let total = own;
    for (let i = 0; i < everyCash[1].length; i++) {
       total += +everyCash[1][i];
    }
    return total;
 }
 let {cash, eu, rus} = sponsors;

 let money = calcCash(null, cash);

 function makeBusiness(owner, director = 'Victor', cash, emp) {
    const sumSponsors = [].concat(...eu, ...rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}.
       And our employers: ${emp}`);
    console.log(`And we have a sponsors: `);
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
 }
 makeBusiness.apply(null, ['Sam', null, money, employersNames2]);