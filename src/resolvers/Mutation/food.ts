import { Context } from "../../utils";
import { FoodCreateInput } from "../../generated/prisma-client";

export default {
    createFood: (parent, { data }: { data: FoodCreateInput }, ctx: Context) => ctx.prisma.createFood(data),
    updateFood: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateFood(args),
    deleteFood: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteFood(args.where)
}