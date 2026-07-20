import { z } from 'zod';

// ==========================================
// 1. INVENTORY SCHEMAS (POST, PUT)
// ==========================================

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

// ==========================================
// 2. ROUTES SCHEMAS (POST, PUT)
// ==========================================

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

// ==========================================
// 3. DELIVERIES SCHEMAS (POST, PUT, PATCH)
// ==========================================

// If you have a POST endpoint to add a delivery to a route
export const deliveryCreateSchema = z.object({
  body: z.object({
    route_id: z.number().int().positive("Valid route ID is required"),
    address: z.string().min(1, "Address is required").max(255),
    status: z.enum(['Pending', 'Delivered', 'Failed']).optional()
  })
});

// If you have a PUT endpoint to update the whole delivery record
export const deliveryUpdateSchema = z.object({
  body: z.object({
    route_id: z.number().int().positive("Valid route ID is required"),
    address: z.string().min(1, "Address is required").max(255),
    status: z.enum(['Pending', 'Delivered', 'Failed'])
  })
});

// For your PATCH endpoint targeting just the status update
export const deliveryStatusSchema = z.object({
  body: z.object({
    status: z.enum(['Pending', 'Delivered', 'Failed'], {
      errorMap: () => ({ message: "Status must be 'Pending', 'Delivered', or 'Failed'" })
    })
  })
});