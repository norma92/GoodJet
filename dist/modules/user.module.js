"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const User_1 = require("../typeorm/entities/User");
const user_controller_1 = require("../controllers/user/user.controller");
const spesa_controller_1 = require("../controllers/spesa/spesa.controller");
const user_service_1 = require("../services/user/user.service");
const spesa_service_1 = require("../services/spesa/spesa.service");
const Spesa_1 = require("../typeorm/entities/Spesa");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([User_1.User, Spesa_1.Spesa])],
        controllers: [user_controller_1.UsersController, spesa_controller_1.SpeseController],
        providers: [user_service_1.UsersService, spesa_service_1.SpeseService]
    })
], UsersModule);
//# sourceMappingURL=user.module.js.map