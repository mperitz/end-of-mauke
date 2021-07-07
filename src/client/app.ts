import start from './start/index';
import intro from './intro/index';

import './style.scss';

start()
  .then(intro)
  .catch(console.error);
