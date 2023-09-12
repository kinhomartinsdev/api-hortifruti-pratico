import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Route from '@ioc:Adonis/Core/Route';

Route.get("/auth", async ({ auth, response }: HttpContextContract) => {

  const userAuth = await auth.use('api').authenticate();
  if (userAuth) {
    return response.ok(userAuth);

  }
});
