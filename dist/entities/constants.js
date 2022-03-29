"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const src_1 = require("src");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: [],
        dbName: 'lireddit',
        type: 'postgresql',
        debug: !src_1.__prod__
    });
};
main();
//# sourceMappingURL=constants.js.map