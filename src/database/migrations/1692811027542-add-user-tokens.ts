import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserTokens1692811027542 implements MigrationInterface {
  name = 'AddUserTokens1692811027542';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "refresh_token" character varying NOT NULL, "user_id" uuid NOT NULL, "revoked" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_63764db9d9aaa4af33e07b2f4bf" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user_tokens"`);
  }
}
