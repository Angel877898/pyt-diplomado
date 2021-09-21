import * as bcrypt from "bcryptjs";
import * as randomstring from "randomstring";
import { UserCreateInput } from "../../generated/prisma-client";
import { Context } from "../../utils";


async function setPwd( pwd ) {
  const password = await bcrypt.hash(pwd, 10);
  return password
}

export default {
  
  updateUser: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateUser(args),
  createUser: (parent, { data }: { data: UserCreateInput}, ctx: Context) => {
    const token = randomstring.generate(8).toUpperCase();
    const salt = bcrypt.genSaltSync(10)
    const password = bcrypt.hashSync(data.password, salt)
    data = {
      token,
      ...data,
      password
    };
    return ctx.prisma.createUser(data)
  },
};