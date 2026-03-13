import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    const adapter = new PrismaPg(pool);
    // Prisma 7 requires an adapter for relational databases.
    super({ adapter } as never);
  }

  async onModuleInit() {
    // @ts-ignore runtime client has $connect
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    // @ts-ignore runtime client has $on
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

