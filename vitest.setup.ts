import '@testing-library/jest-dom';

import { beforeAll, afterEach, afterAll } from 'vitest';

import { server } from '@mocks/server';

beforeAll(() => { return server.listen(); });
afterEach(() => { return server.resetHandlers(); });
afterAll(() => { return server.close(); });
