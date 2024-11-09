export enum AuthenticationStatus {
  INACTIVE = 'inactive',
  ACTIVE = 'active',
}

export interface Authentication {
  id: string;
  status: AuthenticationStatus;
  created_at: string;
  updated_at: string;
  browser: {
    mobile: boolean;
    name: string;
    version: string;
  };
}

export interface AuthenticationCreationRequest {
  user: {
    email: string;
    password: string;
  };
}

export interface AuthenticationCreationResponse {
  tokens: {
    access: string;
    refresh: string;
  };
}
