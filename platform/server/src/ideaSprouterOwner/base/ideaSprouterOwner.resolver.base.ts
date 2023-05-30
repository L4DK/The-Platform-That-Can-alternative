/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteIdeaSprouterOwnerArgs } from "./DeleteIdeaSprouterOwnerArgs";
import { IdeaSprouterOwnerFindManyArgs } from "./IdeaSprouterOwnerFindManyArgs";
import { IdeaSprouterOwnerFindUniqueArgs } from "./IdeaSprouterOwnerFindUniqueArgs";
import { IdeaSprouterOwner } from "./IdeaSprouterOwner";
import { IdeaSprouterOwnerService } from "../ideaSprouterOwner.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IdeaSprouterOwner)
export class IdeaSprouterOwnerResolverBase {
  constructor(
    protected readonly service: IdeaSprouterOwnerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "IdeaSprouterOwner",
    action: "read",
    possession: "any",
  })
  async _ideaSprouterOwnersMeta(
    @graphql.Args() args: IdeaSprouterOwnerFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [IdeaSprouterOwner])
  @nestAccessControl.UseRoles({
    resource: "IdeaSprouterOwner",
    action: "read",
    possession: "any",
  })
  async ideaSprouterOwners(
    @graphql.Args() args: IdeaSprouterOwnerFindManyArgs
  ): Promise<IdeaSprouterOwner[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => IdeaSprouterOwner, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "IdeaSprouterOwner",
    action: "read",
    possession: "own",
  })
  async ideaSprouterOwner(
    @graphql.Args() args: IdeaSprouterOwnerFindUniqueArgs
  ): Promise<IdeaSprouterOwner | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => IdeaSprouterOwner)
  @nestAccessControl.UseRoles({
    resource: "IdeaSprouterOwner",
    action: "delete",
    possession: "any",
  })
  async deleteIdeaSprouterOwner(
    @graphql.Args() args: DeleteIdeaSprouterOwnerArgs
  ): Promise<IdeaSprouterOwner | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}