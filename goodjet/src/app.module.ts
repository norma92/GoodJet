import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { SpesaController } from './controllers/spesa/spesa.controller';
import { UserModule } from './modules/user/user.module';
import { SpesaModule } from './modules/spesa/spesa.module';
import { SpesaService } from './services/spesa/spesa.service';
import { SpesService } from './services/spes/spes.service';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { ControllersController } from './controllers/controllers.controller';
import { ControllersController } from './spesa/controllers/controllers.controller';
import { SpesaController } from './controllers/spesa/spesa.controller';

@Module({
  imports: [SpesaModule, UserModule],
  controllers: [AppController, UserController, SpesaController, ControllersController],
  providers: [AppService, UserService, SpesService, SpesaService],
})
export class AppModule {}
