import { describe, it, expect } from 'vitest';
import { greet } from '../src/index';
describe('greet', () => { it('ok', () => { expect(greet('Kos')).toBe('hello, Kos'); }); });
