// ============================================================
//         JS TRICKY TYPES & COERCION - QUICK NOTES
// ============================================================

// RULE 1 — String conversion of [] and {}
// ---------------------------------------------------------------
// String([])   →  ""                (empty string)
// String({})   →  "[object Object]" (generic JS label)

// RULE 2 — [] + [] , [] + {} , {} + []
// ---------------------------------------------------------------
// Expression      What JS sees                  Result
// ------------    --------------------------    ----------------
// [] + []      →  "" + ""                    →  ""  (empty string)
// [] + {}      →  "" + "[object Object]"     →  "[object Object]"
// {} + []      →  "[object Object]" + ""     →  "[object Object]"  (in VS Code / Node)
// {} + []      →  {} ignored + +[]           →  0                  (in Browser Console only)

// RULE 3 — Why "[object Object]" has 2 words?
// ---------------------------------------------------------------
// [object Object]
//  ------  ------
//  |       |
//  |       └──  Type name  (Object)
//  └──────────  Category   (object)
// JS uses this as a generic label when it cant describe an object nicely

// RULE 4 — Arrays are Objects internally!
// ---------------------------------------------------------------
// typeof []   →  "object"   (arrays are objects internally!)
// typeof {}   →  "object"
// But they convert to string differently:
// String([])  →  ""
// String({})  →  "[object Object]"
// So [object Object] always comes from {} , never from []

// RULE 5 — {} behavior depends on WHERE you run it
// ---------------------------------------------------------------
// Location          {} meaning          {} + [] result
// --------------    ----------------    ----------------
// Browser Console → code block        → 0
// VS Code / Node  → object            → "[object Object]"

// ============================================================
//                      == vs ===
// ============================================================

// ==  (loose)  → converts types first, then compares  (AVOID!)
// === (strict) → never converts, type must also match (ALWAYS USE!)

// Expression         Result    Reason
// ----------------   -------   ----------------------------------
// 0    ==  false  →  true      both convert to 0
// 0    === false  →  false     number vs boolean
// ""   ==  false  →  true      both convert to 0
// ""   === false  →  false     string vs boolean
// null ==  undefined → true    special JS rule (only these two)
// null === undefined → false   different types (object vs undefined)

// ============================================================
//                   TYPEOF TRICKS
// ============================================================

// Value            typeof result     Surprise?
// -------------    ---------------   --------------------------
// null          →  "object"          YES! its a known JS bug
// NaN           →  "number"          YES! Not a Number is number
// []            →  "object"          yes, arrays are objects
// undefined     →  "undefined"       no surprise
// true/false    →  "boolean"         no surprise

// ============================================================
//              GOLDEN RULES TO REMEMBER
// ============================================================

// 1. Always use === instead of == to avoid coercion traps
// 2. null and undefined are only equal to each other (with ==)
// 3. [] becomes ""  and  {} becomes "[object Object]" in strings
// 4. typeof null is "object" — famous JS bug, never fixed
// 5. NaN is of type "number" — sounds wrong but its true!
// 6. Arrays are objects internally in JS