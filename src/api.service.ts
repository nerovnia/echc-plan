import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  getReferenceBooks(): Array<object> {
    return [{ id: '5022', admin: 'password' }];
  }
}
