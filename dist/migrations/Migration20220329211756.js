"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220329211756 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220329211756 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" jsonb not null, "update_at" jsonb not null, "title" varchar(255) not null);');
    }
    async down() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20220329211756 = Migration20220329211756;
//# sourceMappingURL=Migration20220329211756.js.map