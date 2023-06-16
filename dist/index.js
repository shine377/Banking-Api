"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("./dataEntities/User");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield new typeorm_1.DataSource({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "Chlt*377",
            database: "typeorm",
            entities: [User_1.User],
            synchronize: true
        });
        console.log('connected to db');
    }
    catch (error) {
        console.error(error);
        throw new Error('unable to connect');
    }
});
main();
//# sourceMappingURL=index.js.map