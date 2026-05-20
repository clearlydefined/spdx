// Copyright (c) Microsoft Corporation and others. Licensed under the MIT license.
// SPDX-License-Identifier: MIT

/** Represents a parsed SPDX license expression as an Abstract Syntax Tree (AST) */
export interface SpdxExpression {
  /** The SPDX license identifier (e.g., 'MIT', 'Apache-2.0') */
  license?: string
  /** Whether the license allows later versions (indicated by '+' suffix) */
  plus?: boolean
  /** License exception identifier (e.g., 'Classpath-exception-2.0') */
  exception?: string
  /** Logical conjunction operator ('and' or 'or') */
  conjunction?: 'and' | 'or'
  /** Left operand in a binary expression */
  left?: SpdxExpression
  /** Right operand in a binary expression */
  right?: SpdxExpression
  /** Indicates this is a NOASSERTION expression */
  noassertion?: boolean | null
}

/**
 * Visitor function type for processing license nodes during parsing
 *
 * @param license - The license identifier to process
 * @returns The normalized license identifier or null if invalid
 */
export type LicenseVisitor = (license: string) => string | null

/**
 * Lookup function type for resolving license references
 *
 * @param licenseRef - The license reference to resolve
 * @returns The resolved license identifier or null if not found
 */
export type LicenseRefLookup = (licenseRef: string) => string | null

/** Mode for merging license expressions */
export type MergeMode = 'OR' | 'AND'

/**
 * Parses an SPDX expression into an Abstract Syntax Tree (AST) and corrects each node
 *
 * @param expression - SPDX expression string to parse
 * @param licenseVisitor - Optional visitor function to clean each license node
 * @param licenseRefLookup - Optional lookup function to resolve license references
 * @returns The AST representing the parsed expression
 */
export function parse(
  expression: string | SpdxExpression,
  licenseVisitor?: LicenseVisitor,
  licenseRefLookup?: LicenseRefLookup
): SpdxExpression

/**
 * Converts a parsed expression AST back into an SPDX expression string
 *
 * @param obj - An AST representing the parsed expression
 * @returns The SPDX expression string
 */
export function stringify(obj: SpdxExpression): string

/**
 * Normalizes and returns back a given SPDX expression. Corrects case and formatting inconsistencies.
 *
 * @param expression - SPDX expression to normalize
 * @returns The normalized SPDX expression or null if invalid/empty
 */
export function normalize(expression: string | null | undefined): string | null

/**
 * Normalizes and returns back a single SPDX license identifier
 *
 * @param license - Single license identifier to normalize
 * @returns The normalized SPDX license identifier or null if invalid
 */
export function normalizeSingle(license: string | null | undefined): string | null

/**
 * Checks if the first expression satisfies the second expression
 *
 * @param expression1 - First SPDX expression
 * @param expression2 - Second SPDX expression to check against
 * @returns True if expression1 satisfies expression2
 */
export function satisfies(expression1: string, expression2: string): boolean

/**
 * Looks up an SPDX identifier by the full license name. Case insensitive matching.
 *
 * @param licenseName - Full name of the license
 * @returns SPDX identifier or null if not found
 */
export function lookupByName(licenseName: string | null | undefined): string | null

/**
 * Merges the proposed expression into the base expression
 *
 * @param proposed - The proposed license expression to merge
 * @param base - The base license expression to merge into
 * @param mode - Merge mode, either 'OR' (default) or 'AND'
 * @returns The merged license expression
 */
export function merge(
  proposed: string | SpdxExpression | null | undefined,
  base: string | SpdxExpression | null | undefined,
  mode?: MergeMode
): string | SpdxExpression | null | undefined

/**
 * Expands the given expression into an equivalent array where each member is an array of licenses AND'd together and
 * the members are OR'd together
 *
 * @param expression - An SPDX license expression in string or object form
 * @returns The normalized list of license expression leaves equivalent to the input
 */
export function expand(expression: string | SpdxExpression): string[][]

/**
 * Flattens the given expression into an array of all licenses mentioned in the expression
 *
 * @param expression - An SPDX license expression in string or object form
 * @returns An array of all license identifiers in the expression
 */
export function flatten(expression: string | SpdxExpression): string[] | undefined
