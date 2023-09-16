"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeseModule = void 0;
const common_1 = require("@nestjs/common");
const Spesa_1 = require("../typeorm/entities/Spesa");
const typeorm_1 = require("@nestjs/typeorm");
const spesa_controller_1 = require("../controllers/spesa/spesa.controller");
const spesa_service_1 = require("../services/spesa/spesa.service");
let SpeseModule = class SpeseModule {
};
exports.SpeseModule = SpeseModule;
exports.SpeseModule = SpeseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Spesa_1.Spesa])],
        controllers: [spesa_controller_1.SpeseController],
        providers: [spesa_service_1.SpeseService]
    })
], SpeseModule);
//# sourceMappingURL=spesa.module.js.map