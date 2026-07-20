import { z } from 'zod';

export const validate = (schema) => (req, res, next) => {
  if (!schema || typeof schema.parse !== 'function') {
    console.error("Validation Error: The provided schema is undefined or invalid.");
    return res.status(500).json({ status: "error", message: "Internal server validation misconfiguration" });
  }

  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Use error.issues directly to guarantee safety
      const issueArray = error.issues || error.errors || [];
      
      return res.status(400).json({
        status: "fail",
        errors: issueArray.map(err => ({
          field: err.path[1] || err.path[0] || "field", // Handles path fallback gracefully
          message: err.message
        }))
      });
    }
    
    console.error("Non-Zod Error caught in validation middleware:", error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};