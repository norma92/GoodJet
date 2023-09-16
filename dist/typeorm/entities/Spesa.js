"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spesa = void 0;
const typeorm_1 = require("typeorm");
const today = new Date();
let Spesa = class Spesa {
};
exports.Spesa = Spesa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Spesa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'categoria',
        nullable: false
    }),
    __metadata("design:type", String)
], Spesa.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data pagamento',
        nullable: false
    }),
    __metadata("design:type", Date)
], Spesa.prototype, "data_pagamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'importo',
        nullable: false
    }),
    __metadata("design:type", Number)
], Spesa.prototype, "importo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pagante',
        nullable: false,
        length: 50
    }),
    __metadata("design:type", String)
], Spesa.prototype, "pagante", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nota',
        nullable: true,
        length: 300
    }),
    __metadata("design:type", String)
], Spesa.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'data inserimento',
        default: () => "CURRENT_TIMESTAMP",
        nullable: true
    }),
    __metadata("design:type", Date)
], Spesa.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ultima modifica',
        default: () => "CURRENT_TIMESTAMP",
        nullable: true
    }),
    __metadata("design:type", Date)
], Spesa.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user',
        nullable: true
    }),
    __metadata("design:type", Number)
], Spesa.prototype, "user_id", void 0);
exports.Spesa = Spesa = __decorate([
    (0, typeorm_1.Entity)({ name: 'spesa' })
], Spesa);
//# sourceMappingURL=Spesa.js.map