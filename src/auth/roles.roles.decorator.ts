import { SetMetadata } from "@nestjs/common";
import { Role } from "src/roles/roles.model";

export const ROLES_KEY = 'roles';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);