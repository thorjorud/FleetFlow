import { z } from 'zod';

export const inventoryCreateSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").max(100),
    quantity: z.number().int().nonnegative("Quantity cannot be negative").optional(), // Has DB default 0
    status: z.string().max(50).optional() // Has DB default 'In Stock'
  })
});

export const inventoryUpdateSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").max(100),
    quantity: z.number().int().nonnegative("Quantity cannot be negative"),
    status: z.string().max(50)
  })
});

export const routeCreateSchema = z.object({
  body: z.object({
    route_number: z.string().min(1, "Route number is required").max(50),
    status: z.enum(['Pending', 'In Progress', 'Completed']).optional() // Matches your CHECK constraint
  })
});

export const routeUpdateSchema = z.object({
  body: z.object({
    route_number: z.string().min(1, "Route number is required").max(50),
    status: z.enum(['Pending', 'In Progress', 'Completed'])
  })
});

export const deliveryCreateSchema = z.object({
  body: z.object({
    route_id: z.number().int().positive("Valid route ID is required"),
    address: z.string().min(1, "Address is required").max(255),
    status: z.enum(['Pending', 'Delivered', 'Failed']).optional()
  })
});

export const deliveryUpdateSchema = z.object({
  body: z.object({
    route_id: z.number().int().positive("Valid route ID is required"),
    address: z.string().min(1, "Address is required").max(255),
    status: z.enum(['Pending', 'Delivered', 'Failed'])
  })
});

export const deliveryStatusSchema = z.object({
  body: z.object({
    status: z.enum(['Pending', 'Delivered', 'Failed'], {
      errorMap: () => ({ message: "Status must be 'Pending', 'Delivered', or 'Failed'" })
    })
  })
});