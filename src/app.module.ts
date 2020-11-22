import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NookmilesModule } from './nookmiles/nookmiles.module';
import { ReactionsModule } from './reactions/reactions.module';
import { RecipesModule } from './recipes/recipes.module';
import { VillagersModule } from './villagers/villagers.module';
import { ItemsModule } from './items/items.module';
import { AchievementsModule } from './achievements/achievements.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      loggerLevel: 'debug',
    }),
    VillagersModule,
    RecipesModule,
    NookmilesModule,
    ReactionsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src'),
      exclude: ['/api*'],
    }),
    ItemsModule,
    AchievementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
