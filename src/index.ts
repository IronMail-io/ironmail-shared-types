// Namespace types
export interface Namespace {
  id: string;
  name: string;
  region: 'canada' | 'europe';
  awsRegion: string; // e.g., 'ca-central-1' for Canada, 'eu-west-1' for Europe
  cognitoUserPoolId: string;
  rootUserCognitoId: string;
  createdAt: number;
  updatedAt: number;
}

export interface CreateNamespaceInput {
  name: string;
  region: 'canada' | 'europe';
  rootUserEmail: string;
  rootUserPassword: string;
}

// Region to AWS region mapping
export const REGION_TO_AWS_REGION: Record<string, string> = {
  canada: 'ca-central-1',
  europe: 'eu-west-1', // Ireland as default EU region
};

// User types
export interface IronMailUser {
  id: string;
  namespaceId: string;
  cognitoUserId: string;
  email: string;
  role: 'root' | 'admin' | 'user';
  enabled: boolean;
  mfaEnabled: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface CreateUserInput {
  email: string;
  password: string;
  role: 'admin' | 'user';
  enableMFA?: boolean;
}

export interface UpdateUserInput {
  enabled?: boolean;
  role?: 'admin' | 'user';
}

// Authentication types
export interface AuthTokens {
  accessToken: string;
  idToken: string;
  refreshToken?: string;
  expiresIn: number;
}

export interface LoginInput {
  email: string;
  password: string;
  mfaCode?: string;
}

// Error types
export interface ApiError {
  code: string;
  message: string;
  statusCode: number;
  details?: Record<string, unknown>;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}
