import { Context } from "../../utils";
import { SalaCreateInput } from "../../generated/prisma-client";

export default {
    createSala: (parent, { data }: { data: SalaCreateInput }, ctx: Context) => ctx.prisma.createSala(data),
    updateSala: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateSala(args),
    deleteSala: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteSala(args.where)
}