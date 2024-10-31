import { Injectable } from '@nestjs/common';
//  在只有连接一个数据库的 情况下，prisma会自动生成默认数据库类型的client, 放在@prisma/client目录
//
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService extends PrismaClient {}
