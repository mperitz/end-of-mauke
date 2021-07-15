import start from './start/index';
import intro from './intro/index';

import './style.scss';

const color = 'background: #222; color: #bada55';
console.log('%c Go away Luis.', color);
console.log('%c ...and you Andrew.', color);
console.log('%c You guys are nerds.', color);

start()
  .then(intro)
  .catch(console.error);
