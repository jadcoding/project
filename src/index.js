import http from 'http';
import { express } from './server';
import 'semantic-ui-css/semantic.min.css';
const server = http.createServer(express);

let currentApp = express;


server.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(error)
  }
  
  console.log('🚀 started')
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    //closeSocketServer()
    const { express } = require('./server');
    server.on('request', express);
    //closeSocketServer = 
    currentApp = express;
  });
}
