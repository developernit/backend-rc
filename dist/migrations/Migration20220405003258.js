"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220405003258 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220405003258 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
        this.addSql('alter table "post" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
        this.addSql('alter table "post" alter column "created_at" set default \'NOW()\';');
    }
    async down() {
        this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
        this.addSql('alter table "post" alter column "created_at" drop default;');
        this.addSql('alter table "post" alter column "created_at" type timestamptz using ("created_at"::timestamptz);');
    }
}
exports.Migration20220405003258 = Migration20220405003258;
//# sourceMappingURL=Migration20220405003258.js.map