import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { isCPF } from 'validation-br';

@ValidatorConstraint({ name: 'validCpf', async: false })
export class ConstraintValidCpf implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return isCPF(text);
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'O CPF informado não é válido!';
  }
}
