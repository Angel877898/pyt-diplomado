import { Context } from "../../utils";
import { SeatCreateInput } from "../../generated/prisma-client";

export default {
    createSeat: (parent, { data }: { data: SeatCreateInput }, ctx: Context) => ctx.prisma.createSeat(data),
    updateSeat: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateSeat(args),
    deleteSeat: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteSeat(args.where)
}