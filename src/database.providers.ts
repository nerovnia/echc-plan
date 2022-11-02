/*
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';

//import { Cat } from '../cats/cat.entity';

export const databaseProviders = SequelizeModule.forRoot({
  dialect: 'sqlite',
  storage: './db/echc.sqlite',
  autoLoadModels: true,
  logging: (...msg) => console.log(msg),
});



export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './db/echc.sqlite',
        logging: (...msg) => console.log(msg),
      });
      //sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
*/

/*
import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/echc.sqlite',
  logging: (...msg) => console.log(msg),
});

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.close();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

init();

*/
/*
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});


//@Injectable()
export class AppDatabase {
  getHello(): string {
    return 'Hello World!';
  }
}

const jane = await User.create({
  username: 'janedoe',
  birthday: new Date(1980, 6, 20),
});

const users = await User.findAll();


const Wishlist = sequelize.define("Wishlist", {
  title: DataTypes.STRING,
});
const Wish = sequelize.define("Wish", {
  title: DataTypes.STRING,
  quantity: DataTypes.NUMBER,
});

// Automatically create all tables
await sequelize.sync();




Wish.belongsTo(Wishlist);
Wishlist.hasMany(Wish);

const wishlist = await Wishlist.findOne();
const wishes = await wishlist.getWishes();
const wish = await wishlist.createWish({ 
  title: 'Toys', quantity: 3,
});

await wishlist.removeWish(wish);




const User = sequelize.define("User", 
  { username: DataTypes.STRING },
  { paranoid: true },
});

const user = await User.findOne();

await user.destroy();
await User.findAll(); // non-deleted only
await User.findAll({ paranoid: false }); // all
*/