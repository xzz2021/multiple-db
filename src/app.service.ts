import { Injectable } from '@nestjs/common';
import { PrismaService as mysqlService } from 'src/prisma/prisma.service';
import { PrismaService as pgService } from 'src/prisma/prisma2.service';
@Injectable()
export class AppService {
  constructor(
    private prisma: mysqlService,
    private prisma2: pgService,
  ) {}
  async getHello() {
    // 这里user换成你的数据库表名
    return await this.prisma.user.findMany();
  }

  async getHello2() {
    // 这里account_account换成你的数据库表名
    return await this.prisma2.account_account.findMany();
  }
}
