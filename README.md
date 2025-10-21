# @ironmail/shared-types

Shared TypeScript types and interfaces for all IronMail services.

## Installation

```bash
npm install @ironmail/shared-types
```

## Types

### Namespace
```typescript
interface Namespace {
  id: string;
  name: string;
  region: 'canada' | 'europe';
  awsRegion: string;
  cognitoUserPoolId: string;
  rootUserCognitoId: string;
  createdAt: number;
  updatedAt: number;
}
```

### User
```typescript
interface IronMailUser {
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
```

### Authentication
```typescript
interface AuthTokens {
  accessToken: string;
  idToken: string;
  refreshToken?: string;
  expiresIn: number;
}
```

### API Response
```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}
```

## Building

```bash
npm run build
```

## Contributing

See CONTRIBUTING.md

## License

MIT
