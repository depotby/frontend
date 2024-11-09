import type {
  AuthenticationCreationRequest,
  AuthenticationCreationResponse,
} from '~/types/models/authentication';

export interface Api {
  authentication: {
    create: (body: AuthenticationCreationRequest) => Promise<AuthenticationCreationResponse>;
  };
}
