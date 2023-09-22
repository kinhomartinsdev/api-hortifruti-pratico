
import Route from '@ioc:Adonis/Core/Route'

// Login para os 3 Users

Route.post("/login", "AuthController.login");
Route.post("/logout", "AuthController.logout");
Route.post("/cliente/cadastro", "ClientesController.store");





Route.group(() => {
  Route.get("auth/me", "AuthController.me");
  Route.get("cidades", "CidadesController.index");
  Route.get("cidades/id/estabelecimentos",
  "CidadesController.Estebelecimentos");

  Route.put("/cliente", "ClientesController.update");
}).middleware("auth");

Route.get("/", async () => {
  return {
    hortifruti: "prático",
  };
});