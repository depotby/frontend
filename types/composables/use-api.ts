import type {
  AuthenticationCreationRequest,
  AuthenticationCreationResponse,
  AuthenticationRefreshRequest,
} from '~/types/models/authentication';
import type { User } from '~/types/models/user';

export interface Api {
  authentication: {
    create: (body: AuthenticationCreationRequest) => Promise<AuthenticationCreationResponse>;
    refresh: (body: AuthenticationRefreshRequest) => Promise<AuthenticationCreationResponse>;
  };
  user: {
    info: () => Promise<User>;
  };
}
