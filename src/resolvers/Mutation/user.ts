import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserCreateInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  async setPwd(parent, args, ctx: Context) {
    const { pwd, token } = args.data;
    const password = await bcrypt.hash(pwd, 10);
    return await ctx.prisma.updateUser({ data: { password }, where: { token }});
  },
  updateUser: (parent, args, ctx: Context) => ctx.prisma.updateUser(args),
  createUser: (parent, { data }: { data: UserCreateInput}, ctx: Context) => {
    const token = jwt.sign({ user: 'user' }, 'secret');
    data = {
      token,
      ...data
    };
    return ctx.prisma.createUser(data);
  },
  deleteUser: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.deleteUser(args.data),
};
