
## 说明

此脚手架为基于nestjs框架,配置多数据库连接使用的基础模版

##### 安装依赖

```bash
 pnpm install
```

#### 初始化prisma
1. 初始化prisma,会自动生成.env文件, 已有或自行设置可忽略跳过此命令
```bash
npx prisma init
# DATABASE_URL="mysql://user:password@yourhost/yourdatabase"
```
2. 如果都是新数据库,将schema.prisma和schema2.prisma里定义好model,执行下面的迁移命令,自动生成数据库表和客户端文件,注意确保user拥有数据库写入权限, 不要轻易执行migrate,避免覆写数据库
```bash
npx prisma migrate dev --schema prisma/schema.prisma --initmysqlname
npx prisma migrate dev --schema prisma/schema2.prisma --initpgname
```
3. 如果是已存在已有数据的数据库, 先pull自动生成model,然后执行generate生成客户端client
```bash
npx prisma db pull --schema  prisma/schema.prisma
npx prisma db pull --schema  prisma/schema2.prisma

npx prisma generate --schema prisma/schema.prisma
npx prisma generate --schema prisma/schema2.prisma
```
4. 详细步骤参考当前目录下`prisma的使用.md`

#### 启动运行

```bash
pnpm dev
```

