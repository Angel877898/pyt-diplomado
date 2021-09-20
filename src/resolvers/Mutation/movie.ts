import { Context } from "../../utils";
import { MovieCreateInput } from "../../generated/prisma-client";

export default {
    createMovie: (parent, { data }: { data: MovieCreateInput }, ctx: Context) => ctx.prisma.createMovie(data),
    updateMovie: (parent, args: { data: any, where: any }, ctx: Context) => ctx.prisma.updateMovie(args),
    deleteMovie: (parent, args: { where: any }, ctx: Context) => ctx.prisma.deleteMovie(args.where)
}