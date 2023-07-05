import Server from '@ioc:Adonis/Core/Server';
//import cors from '@ioc:Adonis/Middleware/Cors';

Server.middleware.register([
  () => import('@ioc:Adonis/Core/BodyParser'),
  
  //cors.middleware(),
]);

export default Server;
