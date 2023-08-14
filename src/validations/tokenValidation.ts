import { z } from 'zod';

export const tokenValidation = z.object({
  cardNumber: z.number().min(13).max(16),
  cvv: z.number().min(3).max(4),
  expirationMonth: z.string().min(1).max(2),
  expirationYear: z.string().min(4).max(4),
  email: z.string().min(5).max(100).email(),
});

