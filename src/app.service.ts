import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getHello() {
    // return 'Hello World!';
    return await this.prisma.test666.findMany();
  }
}
