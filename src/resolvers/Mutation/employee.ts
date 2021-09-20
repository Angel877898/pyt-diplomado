import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { EmployeeCreateInput } from "../../generated/prisma-client";
import { Context } from "../../utils";

export default {
  async setPwd(parent, args, ctx: Context) {
    const { pwd, token } = args.data;
    const password = await bcrypt.hash(pwd, 10);
    return await ctx.prisma.updateEmployee({ data: { password }, where: { token }});
  },
  updateEmployee: (parent, args, ctx: Context) => ctx.prisma.updateEmployee(args),
  createEmployee: (parent, { data }: { data: EmployeeCreateInput}, ctx: Context) => {
    const token = jwt.sign({ employee: 'employee' }, 'secret');
    data = {
      token,
      ...data
    };
    return ctx.prisma.createEmployee(data);
  },
  deleteEmployee: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.deleteEmployee(args.data),
};
