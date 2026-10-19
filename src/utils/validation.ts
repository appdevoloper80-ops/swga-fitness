/**
 * Pure utility functions for form validation, phone formatting,
 * pass generator calculations, and gym open status.
 */

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

/**
 * Validates a person's full name.
 * Requires at least 2 characters, only letters, spaces, hyphens and apostrophes.
 */
export function validateName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;
  const trimmed = name.trim();
  if (trimmed.length < 2 || trimmed.length > 80) return false;
  // Allow letters, spaces, hyphens, and apostrophes
  return /^[a-zA-Z\s'-]+$/.test(trimmed);
}

/**
 * Standard RFC-compliant email validation.
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  // Standard robust email pattern
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(trimmed);
}

/**
 * Formats a phone string into standard US (XXX) XXX-XXXX format as the user types.
 */
export function formatUSPhone(value: string): string {
  if (!value) return '';
  // Strip all non-digits
  const digits = value.replace(/\D/g, '');
  
  // Truncate to maximum 10 digits (or 11 if leading 1)
  const clean = digits.startsWith('1') && digits.length > 10 ? digits.slice(1, 11) : digits.slice(0, 10);

  if (clean.length === 0) return '';
  if (clean.length <= 3) return `(${clean}`;
  if (clean.length <= 6) return `(${clean.slice(0, 3)}) ${clean.slice(3)}`;
  return `(${clean.slice(0, 3)}) ${clean.slice(3, 6)}-${clean.slice(6, 10)}`;
}

/**
 * Validates if a phone number contains a valid 10-digit US telephone number.
 */
export function validateUSPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return true;
  if (digits.length === 11 && digits.startsWith('1')) return true;
  return false;
}

/**
 * Validates full day-pass request form fields.
 */
export function validateDayPassForm(values: { name: string; email: string; phone: string }): {
  isValid: boolean;
  errors: FormErrors;
} {
  const errors: FormErrors = {};

  if (!values.name || !validateName(values.name)) {
    errors.name = 'Please enter your full name (at least 2 letters).';
  }

  if (!values.email || !validateEmail(values.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!values.phone || !validateUSPhone(values.phone)) {
    errors.phone = 'Please provide a valid 10-digit US phone number.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates the contact form with optional message requirement.
 */
export function validateContactForm(values: {
  name: string;
  email: string;
  phone: string;
  message?: string;
}): {
  isValid: boolean;
  errors: FormErrors;
} {
  const base = validateDayPassForm(values);
  const errors = { ...base.errors };

  if (values.message !== undefined && values.message.trim().length > 0 && values.message.trim().length < 5) {
    errors.message = 'Please provide a brief message (at least 5 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Calculates a 24-hour pass validity window.
 */
export function calculatePassExpiry(baseDate: Date = new Date()): {
  passCode: string;
  validUntil: string;
  expiresInHours: number;
} {
  const expiry = new Date(baseDate.getTime() + 24 * 60 * 60 * 1000);
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const passCode = `SGFC-${baseDate.getFullYear()}-${randomSuffix}`;
  
  return {
    passCode,
    validUntil: expiry.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }),
    expiresInHours: 24,
  };
}

/**
 * Southwest Georgia Fitness Center is 24/7/365, so gym status is always open!
 */
export function getGymOpenStatus(): {
  isOpen: true;
  statusBadge: string;
  scheduleText: string;
} {
  return {
    isOpen: true,
    statusBadge: 'Open Now (24/7)',
    scheduleText: 'Open 24 Hours, 365 Days a Year',
  };
}
