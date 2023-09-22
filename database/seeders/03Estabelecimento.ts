import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Estabelecimento from 'App/Models/Estabelecimento';
import User from 'App/Models/User';
import { faker } from '@faker-js/faker';


export default class extends BaseSeeder {
  public async run() {
    const user = await User.create({
      email: 'webevolui@email.com',
      password: '123456',
      tipo: 'estabelecimentos'
    });
    await Estabelecimento.create({
      nome: 'Estabelecimento',
      logo: 'https://webvolui.com.br/principal/images/we-evolui-logo.png',
      bloqueado: false,
      online: true,      
      user_id: user.id,
    });
    for (let i = 2; i <= 20; i++){
      await User.create({
        email: 'estabelecimento$(i)@email.com',
        password: '12345678',
        tipo: 'estabelecimentos'        
      });
    }

for (let i = 2; i <= 20; i++){
  await Estabelecimento.create({
    nome: 'Estabelecimento $(i)',
    logo: 'https://picsum.photos/id/$(i)/200/200',
    online: true,
    bloqueado: false,
    user_id: i,
  });

}

  }
}


