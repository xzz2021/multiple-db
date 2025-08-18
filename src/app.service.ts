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
    // 这里users换成你的数据库表名
    // const add = (a: number, b: number) => a + b;
    // add(1, 2);

    return await this.prisma.users.findMany();
  }

  async getHello2() {
    // dictionary
    return await this.prisma2.dictionary.findMany();
  }
}
