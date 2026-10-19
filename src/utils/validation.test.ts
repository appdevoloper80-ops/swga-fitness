import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateName,
  validateEmail,
  formatUSPhone,
  validateUSPhone,
  validateDayPassForm,
  calculatePassExpiry,
  getGymOpenStatus,
} from './validation.ts';

test('validateName accepts realistic names and rejects empty/invalid strings', () => {
  assert.equal(validateName('Marcus Turner'), true);
  assert.equal(validateName("Savannah O'Connor"), true);
  assert.equal(validateName('Mary-Jane Watson'), true);
  assert.equal(validateName(''), false);
  assert.equal(validateName('A'), false); // Too short
  assert.equal(validateName('Marcus123'), false); // Numbers not allowed
});

test('validateEmail checks standard email syntax', () => {
  assert.equal(validateEmail('test@example.com'), true);
  assert.equal(validateEmail('athlete.marcus@gmail.com'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('user@'), false);
  assert.equal(validateEmail('@domain.com'), false);
});

test('formatUSPhone properly formats 10-digit US phone numbers', () => {
  assert.equal(formatUSPhone('229'), '(229');
  assert.equal(formatUSPhone('229924'), '(229) 924');
  assert.equal(formatUSPhone('2299246869'), '(229) 924-6869');
  assert.equal(formatUSPhone('12299246869'), '(229) 924-6869');
});

test('validateUSPhone validates 10-digit and 11-digit leading-1 US numbers', () => {
  assert.equal(validateUSPhone('(229) 924-6869'), true);
  assert.equal(validateUSPhone('2299246869'), true);
  assert.equal(validateUSPhone('+1 229-924-6869'), true);
  assert.equal(validateUSPhone('22992'), false); // Too short
  assert.equal(validateUSPhone('abcdefghij'), false);
});

test('validateDayPassForm returns valid state when all inputs are correct', () => {
  const result = validateDayPassForm({
    name: 'Marcus Turner',
    email: 'marcus@example.com',
    phone: '(229) 924-6869',
  });
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateDayPassForm returns descriptive errors when inputs are missing or invalid', () => {
  const result = validateDayPassForm({
    name: '',
    email: 'bademail',
    phone: '123',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
});

test('calculatePassExpiry generates unique code and 24-hour validity', () => {
  const base = new Date('2026-10-18T12:00:00Z');
  const pass = calculatePassExpiry(base);
  assert.ok(pass.passCode.startsWith('SGFC-2026-'));
  assert.equal(pass.expiresInHours, 24);
  assert.ok(pass.validUntil.length > 0);
});

test('getGymOpenStatus reflects 24/7/365 active gym status', () => {
  const status = getGymOpenStatus();
  assert.equal(status.isOpen, true);
  assert.ok(status.statusBadge.includes('Open Now'));
});
