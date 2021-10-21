import { Buffer } from "buffer";

export const environment = {
  production: true,
  token: Buffer.from('dG9rZW4gZ2hwX1loOXk2Y1FjYzVWMHhpUmE4bW1ySTIya0J0WmFuZjA2UG8xZA==', 'base64').toString(),
};
