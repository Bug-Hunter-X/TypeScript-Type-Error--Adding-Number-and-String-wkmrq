# TypeScript Type Error: Adding Number and String

This example demonstrates a common type error in TypeScript that occurs when attempting to perform an arithmetic operation (addition in this case) between a number and a string.  TypeScript's type system prevents this operation at compile time because the addition operator (+) is overloaded, performing either numeric or string concatenation based on the operand types.

The bug.ts file contains the code that produces the type error.  The bugSolution.ts file demonstrates a solution using type guards or type assertions (used carefully).