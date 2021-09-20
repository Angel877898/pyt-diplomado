import { Context } from "../../utils";
import { TicketCreateInput } from "../../generated/prisma-client";

export default {
    createTicket: (parent, { data }: { data: TicketCreateInput }, ctx: Context) => ctx.prisma.createTicket(data),
    updateTicket: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateTicket(args),
    deleteTicket: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteTicket(args.where)
}