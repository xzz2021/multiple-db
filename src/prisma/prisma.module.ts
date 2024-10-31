import { Module } from '@nestjs/common';
import { PrismaService as MysqlService } from './prisma.service';
// import { PrismaService as PgService } from './prisma2.service';

@Module({
  providers: [MysqlService],
  // providers: [MysqlService, PgService],
  exports: [MysqlService],
})
export class PrismaModule {}
