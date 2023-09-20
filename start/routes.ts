
import Route from '@ioc:Adonis/Core/Route'

// Login para os 3 Users

Route.post("/login", "AuthController.login");
Route.post("/logout", "AuthController.logout");
Route.post("/cliente/cadastro", "ClientesController.store");

Route.group(()=>{
  Route.get("auth/me", "AuthController.me");
}


).middleware('auth');


Route.get('/', async () => {
  return {
    Horti: 'Fruti',
  };
    
  });

