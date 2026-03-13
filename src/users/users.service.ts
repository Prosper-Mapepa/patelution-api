import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export type SafeUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users.map(this.toSafeUser);
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return this.toSafeUser(user);
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) {
    const passwordHash = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        firstName: data.firstName,
        lastName: data.lastName,
      },
    });
    return this.toSafeUser(user);
  }

  async update(id: string, data: Partial<{ firstName: string; lastName: string }>) {
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    return this.toSafeUser(user);
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }

  private toSafeUser(user: any): SafeUser {
    const { id, email, firstName, lastName } = user;
    return { id, email, firstName, lastName };
  }
}

