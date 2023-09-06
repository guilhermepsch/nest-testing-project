import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CriaUsuarioDto {
  @IsString({ message: 'Nome precisa ser uma string' })
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  @IsEmail(undefined, { message: 'Email inválido' })
  email: string;
  @MinLength(6)
  senha: string;
}
