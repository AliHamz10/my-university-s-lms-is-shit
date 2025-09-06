
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model ProfileRole
 * 
 */
export type ProfileRole = $Result.DefaultSelection<Prisma.$ProfileRolePayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Term
 * 
 */
export type Term = $Result.DefaultSelection<Prisma.$TermPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseOffering
 * 
 */
export type CourseOffering = $Result.DefaultSelection<Prisma.$CourseOfferingPayload>
/**
 * Model TeachingAssignment
 * 
 */
export type TeachingAssignment = $Result.DefaultSelection<Prisma.$TeachingAssignmentPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  active: 'active',
  inactive: 'inactive',
  suspended: 'suspended',
  pending: 'pending'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const UserLocale: {
  en: 'en',
  es: 'es',
  fr: 'fr',
  de: 'de',
  ar: 'ar',
  ur: 'ur'
};

export type UserLocale = (typeof UserLocale)[keyof typeof UserLocale]


export const ModalityType: {
  in_person: 'in_person',
  online: 'online',
  hybrid: 'hybrid'
};

export type ModalityType = (typeof ModalityType)[keyof typeof ModalityType]


export const EnrollmentStatus: {
  enrolled: 'enrolled',
  waitlisted: 'waitlisted',
  dropped: 'dropped',
  completed: 'completed'
};

export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus]


export const TeachingRole: {
  primary: 'primary',
  co_instructor: 'co_instructor',
  ta: 'ta'
};

export type TeachingRole = (typeof TeachingRole)[keyof typeof TeachingRole]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type UserLocale = $Enums.UserLocale

export const UserLocale: typeof $Enums.UserLocale

export type ModalityType = $Enums.ModalityType

export const ModalityType: typeof $Enums.ModalityType

export type EnrollmentStatus = $Enums.EnrollmentStatus

export const EnrollmentStatus: typeof $Enums.EnrollmentStatus

export type TeachingRole = $Enums.TeachingRole

export const TeachingRole: typeof $Enums.TeachingRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileRole`: Exposes CRUD operations for the **ProfileRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileRoles
    * const profileRoles = await prisma.profileRole.findMany()
    * ```
    */
  get profileRole(): Prisma.ProfileRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.term`: Exposes CRUD operations for the **Term** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Terms
    * const terms = await prisma.term.findMany()
    * ```
    */
  get term(): Prisma.TermDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseOffering`: Exposes CRUD operations for the **CourseOffering** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseOfferings
    * const courseOfferings = await prisma.courseOffering.findMany()
    * ```
    */
  get courseOffering(): Prisma.CourseOfferingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingAssignment`: Exposes CRUD operations for the **TeachingAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingAssignments
    * const teachingAssignments = await prisma.teachingAssignment.findMany()
    * ```
    */
  get teachingAssignment(): Prisma.TeachingAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    Profile: 'Profile',
    ProfileRole: 'ProfileRole',
    Department: 'Department',
    Term: 'Term',
    Course: 'Course',
    CourseOffering: 'CourseOffering',
    TeachingAssignment: 'TeachingAssignment',
    Enrollment: 'Enrollment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "profile" | "profileRole" | "department" | "term" | "course" | "courseOffering" | "teachingAssignment" | "enrollment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      ProfileRole: {
        payload: Prisma.$ProfileRolePayload<ExtArgs>
        fields: Prisma.ProfileRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload>
          }
          findFirst: {
            args: Prisma.ProfileRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload>
          }
          findMany: {
            args: Prisma.ProfileRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload>[]
          }
          create: {
            args: Prisma.ProfileRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload>
          }
          createMany: {
            args: Prisma.ProfileRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload>[]
          }
          delete: {
            args: Prisma.ProfileRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload>
          }
          update: {
            args: Prisma.ProfileRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload>
          }
          deleteMany: {
            args: Prisma.ProfileRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload>[]
          }
          upsert: {
            args: Prisma.ProfileRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileRolePayload>
          }
          aggregate: {
            args: Prisma.ProfileRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileRole>
          }
          groupBy: {
            args: Prisma.ProfileRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileRoleCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileRoleCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Term: {
        payload: Prisma.$TermPayload<ExtArgs>
        fields: Prisma.TermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          findFirst: {
            args: Prisma.TermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          findMany: {
            args: Prisma.TermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>[]
          }
          create: {
            args: Prisma.TermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          createMany: {
            args: Prisma.TermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TermCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>[]
          }
          delete: {
            args: Prisma.TermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          update: {
            args: Prisma.TermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          deleteMany: {
            args: Prisma.TermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TermUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>[]
          }
          upsert: {
            args: Prisma.TermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          aggregate: {
            args: Prisma.TermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerm>
          }
          groupBy: {
            args: Prisma.TermGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermCountArgs<ExtArgs>
            result: $Utils.Optional<TermCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseOffering: {
        payload: Prisma.$CourseOfferingPayload<ExtArgs>
        fields: Prisma.CourseOfferingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseOfferingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseOfferingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          findFirst: {
            args: Prisma.CourseOfferingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseOfferingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          findMany: {
            args: Prisma.CourseOfferingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          create: {
            args: Prisma.CourseOfferingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          createMany: {
            args: Prisma.CourseOfferingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseOfferingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          delete: {
            args: Prisma.CourseOfferingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          update: {
            args: Prisma.CourseOfferingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          deleteMany: {
            args: Prisma.CourseOfferingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseOfferingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseOfferingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          upsert: {
            args: Prisma.CourseOfferingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          aggregate: {
            args: Prisma.CourseOfferingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseOffering>
          }
          groupBy: {
            args: Prisma.CourseOfferingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseOfferingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseOfferingCountArgs<ExtArgs>
            result: $Utils.Optional<CourseOfferingCountAggregateOutputType> | number
          }
        }
      }
      TeachingAssignment: {
        payload: Prisma.$TeachingAssignmentPayload<ExtArgs>
        fields: Prisma.TeachingAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          findFirst: {
            args: Prisma.TeachingAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          findMany: {
            args: Prisma.TeachingAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[]
          }
          create: {
            args: Prisma.TeachingAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          createMany: {
            args: Prisma.TeachingAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[]
          }
          delete: {
            args: Prisma.TeachingAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          update: {
            args: Prisma.TeachingAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.TeachingAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.TeachingAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          aggregate: {
            args: Prisma.TeachingAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingAssignment>
          }
          groupBy: {
            args: Prisma.TeachingAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    profile?: ProfileOmit
    profileRole?: ProfileRoleOmit
    department?: DepartmentOmit
    term?: TermOmit
    course?: CourseOmit
    courseOffering?: CourseOfferingOmit
    teachingAssignment?: TeachingAssignmentOmit
    enrollment?: EnrollmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    profileRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profileRoles?: boolean | RoleCountOutputTypeCountProfileRolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountProfileRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileRoleWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    profileRoles: number
    createdCourses: number
    teachingAssignments: number
    enrollments: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profileRoles?: boolean | ProfileCountOutputTypeCountProfileRolesArgs
    createdCourses?: boolean | ProfileCountOutputTypeCountCreatedCoursesArgs
    teachingAssignments?: boolean | ProfileCountOutputTypeCountTeachingAssignmentsArgs
    enrollments?: boolean | ProfileCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountProfileRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileRoleWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCreatedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountTeachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssignmentWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    courses: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | DepartmentCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type TermCountOutputType
   */

  export type TermCountOutputType = {
    courseOfferings: number
  }

  export type TermCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOfferings?: boolean | TermCountOutputTypeCountCourseOfferingsArgs
  }

  // Custom InputTypes
  /**
   * TermCountOutputType without action
   */
  export type TermCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermCountOutputType
     */
    select?: TermCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TermCountOutputType without action
   */
  export type TermCountOutputTypeCountCourseOfferingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseOfferingWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    courseOfferings: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOfferings?: boolean | CourseCountOutputTypeCountCourseOfferingsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseOfferingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseOfferingWhereInput
  }


  /**
   * Count Type CourseOfferingCountOutputType
   */

  export type CourseOfferingCountOutputType = {
    teachingAssignments: number
    enrollments: number
  }

  export type CourseOfferingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachingAssignments?: boolean | CourseOfferingCountOutputTypeCountTeachingAssignmentsArgs
    enrollments?: boolean | CourseOfferingCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * CourseOfferingCountOutputType without action
   */
  export type CourseOfferingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOfferingCountOutputType
     */
    select?: CourseOfferingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseOfferingCountOutputType without action
   */
  export type CourseOfferingCountOutputTypeCountTeachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssignmentWhereInput
  }

  /**
   * CourseOfferingCountOutputType without action
   */
  export type CourseOfferingCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    key: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    key: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profileRoles?: boolean | Role$profileRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name" | "description" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profileRoles?: boolean | Role$profileRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      profileRoles: Prisma.$ProfileRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profileRoles<T extends Role$profileRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$profileRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly key: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly deletedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.profileRoles
   */
  export type Role$profileRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    where?: ProfileRoleWhereInput
    orderBy?: ProfileRoleOrderByWithRelationInput | ProfileRoleOrderByWithRelationInput[]
    cursor?: ProfileRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileRoleScalarFieldEnum | ProfileRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    failedLoginAttempts: number | null
  }

  export type ProfileSumAggregateOutputType = {
    failedLoginAttempts: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    avatarUrl: string | null
    status: $Enums.UserStatus | null
    locale: $Enums.UserLocale | null
    emailVerifiedAt: Date | null
    failedLoginAttempts: number | null
    lockedUntil: Date | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    avatarUrl: string | null
    status: $Enums.UserStatus | null
    locale: $Enums.UserLocale | null
    emailVerifiedAt: Date | null
    failedLoginAttempts: number | null
    lockedUntil: Date | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    orgId: number
    email: number
    firstName: number
    lastName: number
    username: number
    avatarUrl: number
    status: number
    locale: number
    emailVerifiedAt: number
    failedLoginAttempts: number
    lockedUntil: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    failedLoginAttempts?: true
  }

  export type ProfileSumAggregateInputType = {
    failedLoginAttempts?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    orgId?: true
    email?: true
    firstName?: true
    lastName?: true
    username?: true
    avatarUrl?: true
    status?: true
    locale?: true
    emailVerifiedAt?: true
    failedLoginAttempts?: true
    lockedUntil?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    orgId?: true
    email?: true
    firstName?: true
    lastName?: true
    username?: true
    avatarUrl?: true
    status?: true
    locale?: true
    emailVerifiedAt?: true
    failedLoginAttempts?: true
    lockedUntil?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    orgId?: true
    email?: true
    firstName?: true
    lastName?: true
    username?: true
    avatarUrl?: true
    status?: true
    locale?: true
    emailVerifiedAt?: true
    failedLoginAttempts?: true
    lockedUntil?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    orgId: string | null
    email: string
    firstName: string
    lastName: string
    username: string | null
    avatarUrl: string | null
    status: $Enums.UserStatus
    locale: $Enums.UserLocale
    emailVerifiedAt: Date | null
    failedLoginAttempts: number
    lockedUntil: Date | null
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    avatarUrl?: boolean
    status?: boolean
    locale?: boolean
    emailVerifiedAt?: boolean
    failedLoginAttempts?: boolean
    lockedUntil?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profileRoles?: boolean | Profile$profileRolesArgs<ExtArgs>
    createdCourses?: boolean | Profile$createdCoursesArgs<ExtArgs>
    teachingAssignments?: boolean | Profile$teachingAssignmentsArgs<ExtArgs>
    enrollments?: boolean | Profile$enrollmentsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    avatarUrl?: boolean
    status?: boolean
    locale?: boolean
    emailVerifiedAt?: boolean
    failedLoginAttempts?: boolean
    lockedUntil?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    avatarUrl?: boolean
    status?: boolean
    locale?: boolean
    emailVerifiedAt?: boolean
    failedLoginAttempts?: boolean
    lockedUntil?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    orgId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    avatarUrl?: boolean
    status?: boolean
    locale?: boolean
    emailVerifiedAt?: boolean
    failedLoginAttempts?: boolean
    lockedUntil?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "email" | "firstName" | "lastName" | "username" | "avatarUrl" | "status" | "locale" | "emailVerifiedAt" | "failedLoginAttempts" | "lockedUntil" | "lastLoginAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profileRoles?: boolean | Profile$profileRolesArgs<ExtArgs>
    createdCourses?: boolean | Profile$createdCoursesArgs<ExtArgs>
    teachingAssignments?: boolean | Profile$teachingAssignmentsArgs<ExtArgs>
    enrollments?: boolean | Profile$enrollmentsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      profileRoles: Prisma.$ProfileRolePayload<ExtArgs>[]
      createdCourses: Prisma.$CoursePayload<ExtArgs>[]
      teachingAssignments: Prisma.$TeachingAssignmentPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string | null
      email: string
      firstName: string
      lastName: string
      username: string | null
      avatarUrl: string | null
      status: $Enums.UserStatus
      locale: $Enums.UserLocale
      emailVerifiedAt: Date | null
      failedLoginAttempts: number
      lockedUntil: Date | null
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profileRoles<T extends Profile$profileRolesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$profileRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdCourses<T extends Profile$createdCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$createdCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachingAssignments<T extends Profile$teachingAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$teachingAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Profile$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly orgId: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
    readonly username: FieldRef<"Profile", 'String'>
    readonly avatarUrl: FieldRef<"Profile", 'String'>
    readonly status: FieldRef<"Profile", 'UserStatus'>
    readonly locale: FieldRef<"Profile", 'UserLocale'>
    readonly emailVerifiedAt: FieldRef<"Profile", 'DateTime'>
    readonly failedLoginAttempts: FieldRef<"Profile", 'Int'>
    readonly lockedUntil: FieldRef<"Profile", 'DateTime'>
    readonly lastLoginAt: FieldRef<"Profile", 'DateTime'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly deletedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.profileRoles
   */
  export type Profile$profileRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    where?: ProfileRoleWhereInput
    orderBy?: ProfileRoleOrderByWithRelationInput | ProfileRoleOrderByWithRelationInput[]
    cursor?: ProfileRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileRoleScalarFieldEnum | ProfileRoleScalarFieldEnum[]
  }

  /**
   * Profile.createdCourses
   */
  export type Profile$createdCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Profile.teachingAssignments
   */
  export type Profile$teachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    where?: TeachingAssignmentWhereInput
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    cursor?: TeachingAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * Profile.enrollments
   */
  export type Profile$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model ProfileRole
   */

  export type AggregateProfileRole = {
    _count: ProfileRoleCountAggregateOutputType | null
    _min: ProfileRoleMinAggregateOutputType | null
    _max: ProfileRoleMaxAggregateOutputType | null
  }

  export type ProfileRoleMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    roleId: string | null
    orgId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileRoleMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    roleId: string | null
    orgId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileRoleCountAggregateOutputType = {
    id: number
    profileId: number
    roleId: number
    orgId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProfileRoleMinAggregateInputType = {
    id?: true
    profileId?: true
    roleId?: true
    orgId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProfileRoleMaxAggregateInputType = {
    id?: true
    profileId?: true
    roleId?: true
    orgId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProfileRoleCountAggregateInputType = {
    id?: true
    profileId?: true
    roleId?: true
    orgId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProfileRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileRole to aggregate.
     */
    where?: ProfileRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileRoles to fetch.
     */
    orderBy?: ProfileRoleOrderByWithRelationInput | ProfileRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileRoles
    **/
    _count?: true | ProfileRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileRoleMaxAggregateInputType
  }

  export type GetProfileRoleAggregateType<T extends ProfileRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileRole[P]>
      : GetScalarType<T[P], AggregateProfileRole[P]>
  }




  export type ProfileRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileRoleWhereInput
    orderBy?: ProfileRoleOrderByWithAggregationInput | ProfileRoleOrderByWithAggregationInput[]
    by: ProfileRoleScalarFieldEnum[] | ProfileRoleScalarFieldEnum
    having?: ProfileRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileRoleCountAggregateInputType | true
    _min?: ProfileRoleMinAggregateInputType
    _max?: ProfileRoleMaxAggregateInputType
  }

  export type ProfileRoleGroupByOutputType = {
    id: string
    profileId: string
    roleId: string
    orgId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProfileRoleCountAggregateOutputType | null
    _min: ProfileRoleMinAggregateOutputType | null
    _max: ProfileRoleMaxAggregateOutputType | null
  }

  type GetProfileRoleGroupByPayload<T extends ProfileRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileRoleGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileRoleGroupByOutputType[P]>
        }
      >
    >


  export type ProfileRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    roleId?: boolean
    orgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileRole"]>

  export type ProfileRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    roleId?: boolean
    orgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileRole"]>

  export type ProfileRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    roleId?: boolean
    orgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileRole"]>

  export type ProfileRoleSelectScalar = {
    id?: boolean
    profileId?: boolean
    roleId?: boolean
    orgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProfileRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "roleId" | "orgId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["profileRole"]>
  export type ProfileRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type ProfileRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type ProfileRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $ProfileRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileRole"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      roleId: string
      orgId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["profileRole"]>
    composites: {}
  }

  type ProfileRoleGetPayload<S extends boolean | null | undefined | ProfileRoleDefaultArgs> = $Result.GetResult<Prisma.$ProfileRolePayload, S>

  type ProfileRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileRoleCountAggregateInputType | true
    }

  export interface ProfileRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileRole'], meta: { name: 'ProfileRole' } }
    /**
     * Find zero or one ProfileRole that matches the filter.
     * @param {ProfileRoleFindUniqueArgs} args - Arguments to find a ProfileRole
     * @example
     * // Get one ProfileRole
     * const profileRole = await prisma.profileRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileRoleFindUniqueArgs>(args: SelectSubset<T, ProfileRoleFindUniqueArgs<ExtArgs>>): Prisma__ProfileRoleClient<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileRoleFindUniqueOrThrowArgs} args - Arguments to find a ProfileRole
     * @example
     * // Get one ProfileRole
     * const profileRole = await prisma.profileRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileRoleClient<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileRoleFindFirstArgs} args - Arguments to find a ProfileRole
     * @example
     * // Get one ProfileRole
     * const profileRole = await prisma.profileRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileRoleFindFirstArgs>(args?: SelectSubset<T, ProfileRoleFindFirstArgs<ExtArgs>>): Prisma__ProfileRoleClient<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileRoleFindFirstOrThrowArgs} args - Arguments to find a ProfileRole
     * @example
     * // Get one ProfileRole
     * const profileRole = await prisma.profileRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileRoleClient<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileRoles
     * const profileRoles = await prisma.profileRole.findMany()
     * 
     * // Get first 10 ProfileRoles
     * const profileRoles = await prisma.profileRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileRoleWithIdOnly = await prisma.profileRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileRoleFindManyArgs>(args?: SelectSubset<T, ProfileRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileRole.
     * @param {ProfileRoleCreateArgs} args - Arguments to create a ProfileRole.
     * @example
     * // Create one ProfileRole
     * const ProfileRole = await prisma.profileRole.create({
     *   data: {
     *     // ... data to create a ProfileRole
     *   }
     * })
     * 
     */
    create<T extends ProfileRoleCreateArgs>(args: SelectSubset<T, ProfileRoleCreateArgs<ExtArgs>>): Prisma__ProfileRoleClient<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileRoles.
     * @param {ProfileRoleCreateManyArgs} args - Arguments to create many ProfileRoles.
     * @example
     * // Create many ProfileRoles
     * const profileRole = await prisma.profileRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileRoleCreateManyArgs>(args?: SelectSubset<T, ProfileRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileRoles and returns the data saved in the database.
     * @param {ProfileRoleCreateManyAndReturnArgs} args - Arguments to create many ProfileRoles.
     * @example
     * // Create many ProfileRoles
     * const profileRole = await prisma.profileRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileRoles and only return the `id`
     * const profileRoleWithIdOnly = await prisma.profileRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfileRole.
     * @param {ProfileRoleDeleteArgs} args - Arguments to delete one ProfileRole.
     * @example
     * // Delete one ProfileRole
     * const ProfileRole = await prisma.profileRole.delete({
     *   where: {
     *     // ... filter to delete one ProfileRole
     *   }
     * })
     * 
     */
    delete<T extends ProfileRoleDeleteArgs>(args: SelectSubset<T, ProfileRoleDeleteArgs<ExtArgs>>): Prisma__ProfileRoleClient<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileRole.
     * @param {ProfileRoleUpdateArgs} args - Arguments to update one ProfileRole.
     * @example
     * // Update one ProfileRole
     * const profileRole = await prisma.profileRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileRoleUpdateArgs>(args: SelectSubset<T, ProfileRoleUpdateArgs<ExtArgs>>): Prisma__ProfileRoleClient<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileRoles.
     * @param {ProfileRoleDeleteManyArgs} args - Arguments to filter ProfileRoles to delete.
     * @example
     * // Delete a few ProfileRoles
     * const { count } = await prisma.profileRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileRoleDeleteManyArgs>(args?: SelectSubset<T, ProfileRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileRoles
     * const profileRole = await prisma.profileRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileRoleUpdateManyArgs>(args: SelectSubset<T, ProfileRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileRoles and returns the data updated in the database.
     * @param {ProfileRoleUpdateManyAndReturnArgs} args - Arguments to update many ProfileRoles.
     * @example
     * // Update many ProfileRoles
     * const profileRole = await prisma.profileRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileRoles and only return the `id`
     * const profileRoleWithIdOnly = await prisma.profileRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfileRole.
     * @param {ProfileRoleUpsertArgs} args - Arguments to update or create a ProfileRole.
     * @example
     * // Update or create a ProfileRole
     * const profileRole = await prisma.profileRole.upsert({
     *   create: {
     *     // ... data to create a ProfileRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileRole we want to update
     *   }
     * })
     */
    upsert<T extends ProfileRoleUpsertArgs>(args: SelectSubset<T, ProfileRoleUpsertArgs<ExtArgs>>): Prisma__ProfileRoleClient<$Result.GetResult<Prisma.$ProfileRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileRoleCountArgs} args - Arguments to filter ProfileRoles to count.
     * @example
     * // Count the number of ProfileRoles
     * const count = await prisma.profileRole.count({
     *   where: {
     *     // ... the filter for the ProfileRoles we want to count
     *   }
     * })
    **/
    count<T extends ProfileRoleCountArgs>(
      args?: Subset<T, ProfileRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileRoleAggregateArgs>(args: Subset<T, ProfileRoleAggregateArgs>): Prisma.PrismaPromise<GetProfileRoleAggregateType<T>>

    /**
     * Group by ProfileRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileRoleGroupByArgs['orderBy'] }
        : { orderBy?: ProfileRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileRole model
   */
  readonly fields: ProfileRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileRole model
   */
  interface ProfileRoleFieldRefs {
    readonly id: FieldRef<"ProfileRole", 'String'>
    readonly profileId: FieldRef<"ProfileRole", 'String'>
    readonly roleId: FieldRef<"ProfileRole", 'String'>
    readonly orgId: FieldRef<"ProfileRole", 'String'>
    readonly createdAt: FieldRef<"ProfileRole", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfileRole", 'DateTime'>
    readonly deletedAt: FieldRef<"ProfileRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileRole findUnique
   */
  export type ProfileRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProfileRole to fetch.
     */
    where: ProfileRoleWhereUniqueInput
  }

  /**
   * ProfileRole findUniqueOrThrow
   */
  export type ProfileRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProfileRole to fetch.
     */
    where: ProfileRoleWhereUniqueInput
  }

  /**
   * ProfileRole findFirst
   */
  export type ProfileRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProfileRole to fetch.
     */
    where?: ProfileRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileRoles to fetch.
     */
    orderBy?: ProfileRoleOrderByWithRelationInput | ProfileRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileRoles.
     */
    cursor?: ProfileRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileRoles.
     */
    distinct?: ProfileRoleScalarFieldEnum | ProfileRoleScalarFieldEnum[]
  }

  /**
   * ProfileRole findFirstOrThrow
   */
  export type ProfileRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProfileRole to fetch.
     */
    where?: ProfileRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileRoles to fetch.
     */
    orderBy?: ProfileRoleOrderByWithRelationInput | ProfileRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileRoles.
     */
    cursor?: ProfileRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileRoles.
     */
    distinct?: ProfileRoleScalarFieldEnum | ProfileRoleScalarFieldEnum[]
  }

  /**
   * ProfileRole findMany
   */
  export type ProfileRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProfileRoles to fetch.
     */
    where?: ProfileRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileRoles to fetch.
     */
    orderBy?: ProfileRoleOrderByWithRelationInput | ProfileRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileRoles.
     */
    cursor?: ProfileRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileRoles.
     */
    skip?: number
    distinct?: ProfileRoleScalarFieldEnum | ProfileRoleScalarFieldEnum[]
  }

  /**
   * ProfileRole create
   */
  export type ProfileRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileRole.
     */
    data: XOR<ProfileRoleCreateInput, ProfileRoleUncheckedCreateInput>
  }

  /**
   * ProfileRole createMany
   */
  export type ProfileRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileRoles.
     */
    data: ProfileRoleCreateManyInput | ProfileRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileRole createManyAndReturn
   */
  export type ProfileRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileRoles.
     */
    data: ProfileRoleCreateManyInput | ProfileRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileRole update
   */
  export type ProfileRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileRole.
     */
    data: XOR<ProfileRoleUpdateInput, ProfileRoleUncheckedUpdateInput>
    /**
     * Choose, which ProfileRole to update.
     */
    where: ProfileRoleWhereUniqueInput
  }

  /**
   * ProfileRole updateMany
   */
  export type ProfileRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileRoles.
     */
    data: XOR<ProfileRoleUpdateManyMutationInput, ProfileRoleUncheckedUpdateManyInput>
    /**
     * Filter which ProfileRoles to update
     */
    where?: ProfileRoleWhereInput
    /**
     * Limit how many ProfileRoles to update.
     */
    limit?: number
  }

  /**
   * ProfileRole updateManyAndReturn
   */
  export type ProfileRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * The data used to update ProfileRoles.
     */
    data: XOR<ProfileRoleUpdateManyMutationInput, ProfileRoleUncheckedUpdateManyInput>
    /**
     * Filter which ProfileRoles to update
     */
    where?: ProfileRoleWhereInput
    /**
     * Limit how many ProfileRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileRole upsert
   */
  export type ProfileRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileRole to update in case it exists.
     */
    where: ProfileRoleWhereUniqueInput
    /**
     * In case the ProfileRole found by the `where` argument doesn't exist, create a new ProfileRole with this data.
     */
    create: XOR<ProfileRoleCreateInput, ProfileRoleUncheckedCreateInput>
    /**
     * In case the ProfileRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileRoleUpdateInput, ProfileRoleUncheckedUpdateInput>
  }

  /**
   * ProfileRole delete
   */
  export type ProfileRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
    /**
     * Filter which ProfileRole to delete.
     */
    where: ProfileRoleWhereUniqueInput
  }

  /**
   * ProfileRole deleteMany
   */
  export type ProfileRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileRoles to delete
     */
    where?: ProfileRoleWhereInput
    /**
     * Limit how many ProfileRoles to delete.
     */
    limit?: number
  }

  /**
   * ProfileRole without action
   */
  export type ProfileRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileRole
     */
    select?: ProfileRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileRole
     */
    omit?: ProfileRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileRoleInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    code: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    code: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    orgId: number
    code: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    orgId?: true
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    orgId?: true
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    orgId?: true
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    orgId: string
    code: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courses?: boolean | Department$coursesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    orgId?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "code" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Department$coursesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      code: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Department$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Department$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly orgId: FieldRef<"Department", 'String'>
    readonly code: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.courses
   */
  export type Department$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Term
   */

  export type AggregateTerm = {
    _count: TermCountAggregateOutputType | null
    _min: TermMinAggregateOutputType | null
    _max: TermMaxAggregateOutputType | null
  }

  export type TermMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    code: string | null
    name: string | null
    dateStart: Date | null
    dateEnd: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    code: string | null
    name: string | null
    dateStart: Date | null
    dateEnd: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermCountAggregateOutputType = {
    id: number
    orgId: number
    code: number
    name: number
    dateStart: number
    dateEnd: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TermMinAggregateInputType = {
    id?: true
    orgId?: true
    code?: true
    name?: true
    dateStart?: true
    dateEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermMaxAggregateInputType = {
    id?: true
    orgId?: true
    code?: true
    name?: true
    dateStart?: true
    dateEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermCountAggregateInputType = {
    id?: true
    orgId?: true
    code?: true
    name?: true
    dateStart?: true
    dateEnd?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Term to aggregate.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Terms
    **/
    _count?: true | TermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermMaxAggregateInputType
  }

  export type GetTermAggregateType<T extends TermAggregateArgs> = {
        [P in keyof T & keyof AggregateTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerm[P]>
      : GetScalarType<T[P], AggregateTerm[P]>
  }




  export type TermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermWhereInput
    orderBy?: TermOrderByWithAggregationInput | TermOrderByWithAggregationInput[]
    by: TermScalarFieldEnum[] | TermScalarFieldEnum
    having?: TermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermCountAggregateInputType | true
    _min?: TermMinAggregateInputType
    _max?: TermMaxAggregateInputType
  }

  export type TermGroupByOutputType = {
    id: string
    orgId: string
    code: string
    name: string
    dateStart: Date
    dateEnd: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TermCountAggregateOutputType | null
    _min: TermMinAggregateOutputType | null
    _max: TermMaxAggregateOutputType | null
  }

  type GetTermGroupByPayload<T extends TermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermGroupByOutputType[P]>
            : GetScalarType<T[P], TermGroupByOutputType[P]>
        }
      >
    >


  export type TermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    code?: boolean
    name?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseOfferings?: boolean | Term$courseOfferingsArgs<ExtArgs>
    _count?: boolean | TermCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["term"]>

  export type TermSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    code?: boolean
    name?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["term"]>

  export type TermSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    code?: boolean
    name?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["term"]>

  export type TermSelectScalar = {
    id?: boolean
    orgId?: boolean
    code?: boolean
    name?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TermOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "code" | "name" | "dateStart" | "dateEnd" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["term"]>
  export type TermInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOfferings?: boolean | Term$courseOfferingsArgs<ExtArgs>
    _count?: boolean | TermCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TermIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TermIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Term"
    objects: {
      courseOfferings: Prisma.$CourseOfferingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      code: string
      name: string
      dateStart: Date
      dateEnd: Date
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["term"]>
    composites: {}
  }

  type TermGetPayload<S extends boolean | null | undefined | TermDefaultArgs> = $Result.GetResult<Prisma.$TermPayload, S>

  type TermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TermFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TermCountAggregateInputType | true
    }

  export interface TermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Term'], meta: { name: 'Term' } }
    /**
     * Find zero or one Term that matches the filter.
     * @param {TermFindUniqueArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermFindUniqueArgs>(args: SelectSubset<T, TermFindUniqueArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Term that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TermFindUniqueOrThrowArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermFindUniqueOrThrowArgs>(args: SelectSubset<T, TermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Term that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindFirstArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermFindFirstArgs>(args?: SelectSubset<T, TermFindFirstArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Term that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindFirstOrThrowArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermFindFirstOrThrowArgs>(args?: SelectSubset<T, TermFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Terms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Terms
     * const terms = await prisma.term.findMany()
     * 
     * // Get first 10 Terms
     * const terms = await prisma.term.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termWithIdOnly = await prisma.term.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermFindManyArgs>(args?: SelectSubset<T, TermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Term.
     * @param {TermCreateArgs} args - Arguments to create a Term.
     * @example
     * // Create one Term
     * const Term = await prisma.term.create({
     *   data: {
     *     // ... data to create a Term
     *   }
     * })
     * 
     */
    create<T extends TermCreateArgs>(args: SelectSubset<T, TermCreateArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Terms.
     * @param {TermCreateManyArgs} args - Arguments to create many Terms.
     * @example
     * // Create many Terms
     * const term = await prisma.term.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermCreateManyArgs>(args?: SelectSubset<T, TermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Terms and returns the data saved in the database.
     * @param {TermCreateManyAndReturnArgs} args - Arguments to create many Terms.
     * @example
     * // Create many Terms
     * const term = await prisma.term.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Terms and only return the `id`
     * const termWithIdOnly = await prisma.term.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TermCreateManyAndReturnArgs>(args?: SelectSubset<T, TermCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Term.
     * @param {TermDeleteArgs} args - Arguments to delete one Term.
     * @example
     * // Delete one Term
     * const Term = await prisma.term.delete({
     *   where: {
     *     // ... filter to delete one Term
     *   }
     * })
     * 
     */
    delete<T extends TermDeleteArgs>(args: SelectSubset<T, TermDeleteArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Term.
     * @param {TermUpdateArgs} args - Arguments to update one Term.
     * @example
     * // Update one Term
     * const term = await prisma.term.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermUpdateArgs>(args: SelectSubset<T, TermUpdateArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Terms.
     * @param {TermDeleteManyArgs} args - Arguments to filter Terms to delete.
     * @example
     * // Delete a few Terms
     * const { count } = await prisma.term.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermDeleteManyArgs>(args?: SelectSubset<T, TermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Terms
     * const term = await prisma.term.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermUpdateManyArgs>(args: SelectSubset<T, TermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terms and returns the data updated in the database.
     * @param {TermUpdateManyAndReturnArgs} args - Arguments to update many Terms.
     * @example
     * // Update many Terms
     * const term = await prisma.term.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Terms and only return the `id`
     * const termWithIdOnly = await prisma.term.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TermUpdateManyAndReturnArgs>(args: SelectSubset<T, TermUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Term.
     * @param {TermUpsertArgs} args - Arguments to update or create a Term.
     * @example
     * // Update or create a Term
     * const term = await prisma.term.upsert({
     *   create: {
     *     // ... data to create a Term
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Term we want to update
     *   }
     * })
     */
    upsert<T extends TermUpsertArgs>(args: SelectSubset<T, TermUpsertArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermCountArgs} args - Arguments to filter Terms to count.
     * @example
     * // Count the number of Terms
     * const count = await prisma.term.count({
     *   where: {
     *     // ... the filter for the Terms we want to count
     *   }
     * })
    **/
    count<T extends TermCountArgs>(
      args?: Subset<T, TermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Term.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TermAggregateArgs>(args: Subset<T, TermAggregateArgs>): Prisma.PrismaPromise<GetTermAggregateType<T>>

    /**
     * Group by Term.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermGroupByArgs['orderBy'] }
        : { orderBy?: TermGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Term model
   */
  readonly fields: TermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Term.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseOfferings<T extends Term$courseOfferingsArgs<ExtArgs> = {}>(args?: Subset<T, Term$courseOfferingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Term model
   */
  interface TermFieldRefs {
    readonly id: FieldRef<"Term", 'String'>
    readonly orgId: FieldRef<"Term", 'String'>
    readonly code: FieldRef<"Term", 'String'>
    readonly name: FieldRef<"Term", 'String'>
    readonly dateStart: FieldRef<"Term", 'DateTime'>
    readonly dateEnd: FieldRef<"Term", 'DateTime'>
    readonly isActive: FieldRef<"Term", 'Boolean'>
    readonly createdAt: FieldRef<"Term", 'DateTime'>
    readonly updatedAt: FieldRef<"Term", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Term findUnique
   */
  export type TermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term findUniqueOrThrow
   */
  export type TermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term findFirst
   */
  export type TermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terms.
     */
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term findFirstOrThrow
   */
  export type TermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terms.
     */
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term findMany
   */
  export type TermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Terms to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term create
   */
  export type TermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * The data needed to create a Term.
     */
    data: XOR<TermCreateInput, TermUncheckedCreateInput>
  }

  /**
   * Term createMany
   */
  export type TermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Terms.
     */
    data: TermCreateManyInput | TermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Term createManyAndReturn
   */
  export type TermCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * The data used to create many Terms.
     */
    data: TermCreateManyInput | TermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Term update
   */
  export type TermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * The data needed to update a Term.
     */
    data: XOR<TermUpdateInput, TermUncheckedUpdateInput>
    /**
     * Choose, which Term to update.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term updateMany
   */
  export type TermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Terms.
     */
    data: XOR<TermUpdateManyMutationInput, TermUncheckedUpdateManyInput>
    /**
     * Filter which Terms to update
     */
    where?: TermWhereInput
    /**
     * Limit how many Terms to update.
     */
    limit?: number
  }

  /**
   * Term updateManyAndReturn
   */
  export type TermUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * The data used to update Terms.
     */
    data: XOR<TermUpdateManyMutationInput, TermUncheckedUpdateManyInput>
    /**
     * Filter which Terms to update
     */
    where?: TermWhereInput
    /**
     * Limit how many Terms to update.
     */
    limit?: number
  }

  /**
   * Term upsert
   */
  export type TermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * The filter to search for the Term to update in case it exists.
     */
    where: TermWhereUniqueInput
    /**
     * In case the Term found by the `where` argument doesn't exist, create a new Term with this data.
     */
    create: XOR<TermCreateInput, TermUncheckedCreateInput>
    /**
     * In case the Term was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermUpdateInput, TermUncheckedUpdateInput>
  }

  /**
   * Term delete
   */
  export type TermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter which Term to delete.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term deleteMany
   */
  export type TermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terms to delete
     */
    where?: TermWhereInput
    /**
     * Limit how many Terms to delete.
     */
    limit?: number
  }

  /**
   * Term.courseOfferings
   */
  export type Term$courseOfferingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    where?: CourseOfferingWhereInput
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    cursor?: CourseOfferingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * Term without action
   */
  export type TermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    creditHours: number | null
  }

  export type CourseSumAggregateOutputType = {
    creditHours: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    departmentId: string | null
    code: string | null
    title: string | null
    description: string | null
    creditHours: number | null
    createdById: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    departmentId: string | null
    code: string | null
    title: string | null
    description: string | null
    creditHours: number | null
    createdById: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    orgId: number
    departmentId: number
    code: number
    title: number
    description: number
    creditHours: number
    createdById: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    creditHours?: true
  }

  export type CourseSumAggregateInputType = {
    creditHours?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    orgId?: true
    departmentId?: true
    code?: true
    title?: true
    description?: true
    creditHours?: true
    createdById?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    orgId?: true
    departmentId?: true
    code?: true
    title?: true
    description?: true
    creditHours?: true
    createdById?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    orgId?: true
    departmentId?: true
    code?: true
    title?: true
    description?: true
    creditHours?: true
    createdById?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    orgId: string
    departmentId: string | null
    code: string
    title: string
    description: string | null
    creditHours: number | null
    createdById: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    departmentId?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    creditHours?: boolean
    createdById?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | Course$departmentArgs<ExtArgs>
    createdBy?: boolean | Course$createdByArgs<ExtArgs>
    courseOfferings?: boolean | Course$courseOfferingsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    departmentId?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    creditHours?: boolean
    createdById?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | Course$departmentArgs<ExtArgs>
    createdBy?: boolean | Course$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    departmentId?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    creditHours?: boolean
    createdById?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | Course$departmentArgs<ExtArgs>
    createdBy?: boolean | Course$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    orgId?: boolean
    departmentId?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    creditHours?: boolean
    createdById?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "departmentId" | "code" | "title" | "description" | "creditHours" | "createdById" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Course$departmentArgs<ExtArgs>
    createdBy?: boolean | Course$createdByArgs<ExtArgs>
    courseOfferings?: boolean | Course$courseOfferingsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Course$departmentArgs<ExtArgs>
    createdBy?: boolean | Course$createdByArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Course$departmentArgs<ExtArgs>
    createdBy?: boolean | Course$createdByArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      createdBy: Prisma.$ProfilePayload<ExtArgs> | null
      courseOfferings: Prisma.$CourseOfferingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      departmentId: string | null
      code: string
      title: string
      description: string | null
      creditHours: number | null
      createdById: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends Course$departmentArgs<ExtArgs> = {}>(args?: Subset<T, Course$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Course$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Course$createdByArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    courseOfferings<T extends Course$courseOfferingsArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseOfferingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly orgId: FieldRef<"Course", 'String'>
    readonly departmentId: FieldRef<"Course", 'String'>
    readonly code: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly creditHours: FieldRef<"Course", 'Int'>
    readonly createdById: FieldRef<"Course", 'String'>
    readonly isActive: FieldRef<"Course", 'Boolean'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.department
   */
  export type Course$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Course.createdBy
   */
  export type Course$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * Course.courseOfferings
   */
  export type Course$courseOfferingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    where?: CourseOfferingWhereInput
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    cursor?: CourseOfferingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseOffering
   */

  export type AggregateCourseOffering = {
    _count: CourseOfferingCountAggregateOutputType | null
    _avg: CourseOfferingAvgAggregateOutputType | null
    _sum: CourseOfferingSumAggregateOutputType | null
    _min: CourseOfferingMinAggregateOutputType | null
    _max: CourseOfferingMaxAggregateOutputType | null
  }

  export type CourseOfferingAvgAggregateOutputType = {
    capacity: number | null
    waitlistCapacity: number | null
  }

  export type CourseOfferingSumAggregateOutputType = {
    capacity: number | null
    waitlistCapacity: number | null
  }

  export type CourseOfferingMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    courseId: string | null
    termId: string | null
    sectionCode: string | null
    modality: $Enums.ModalityType | null
    capacity: number | null
    waitlistCapacity: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseOfferingMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    courseId: string | null
    termId: string | null
    sectionCode: string | null
    modality: $Enums.ModalityType | null
    capacity: number | null
    waitlistCapacity: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseOfferingCountAggregateOutputType = {
    id: number
    orgId: number
    courseId: number
    termId: number
    sectionCode: number
    modality: number
    capacity: number
    waitlistCapacity: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseOfferingAvgAggregateInputType = {
    capacity?: true
    waitlistCapacity?: true
  }

  export type CourseOfferingSumAggregateInputType = {
    capacity?: true
    waitlistCapacity?: true
  }

  export type CourseOfferingMinAggregateInputType = {
    id?: true
    orgId?: true
    courseId?: true
    termId?: true
    sectionCode?: true
    modality?: true
    capacity?: true
    waitlistCapacity?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseOfferingMaxAggregateInputType = {
    id?: true
    orgId?: true
    courseId?: true
    termId?: true
    sectionCode?: true
    modality?: true
    capacity?: true
    waitlistCapacity?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseOfferingCountAggregateInputType = {
    id?: true
    orgId?: true
    courseId?: true
    termId?: true
    sectionCode?: true
    modality?: true
    capacity?: true
    waitlistCapacity?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseOfferingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseOffering to aggregate.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseOfferings
    **/
    _count?: true | CourseOfferingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseOfferingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseOfferingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseOfferingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseOfferingMaxAggregateInputType
  }

  export type GetCourseOfferingAggregateType<T extends CourseOfferingAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseOffering]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseOffering[P]>
      : GetScalarType<T[P], AggregateCourseOffering[P]>
  }




  export type CourseOfferingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseOfferingWhereInput
    orderBy?: CourseOfferingOrderByWithAggregationInput | CourseOfferingOrderByWithAggregationInput[]
    by: CourseOfferingScalarFieldEnum[] | CourseOfferingScalarFieldEnum
    having?: CourseOfferingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseOfferingCountAggregateInputType | true
    _avg?: CourseOfferingAvgAggregateInputType
    _sum?: CourseOfferingSumAggregateInputType
    _min?: CourseOfferingMinAggregateInputType
    _max?: CourseOfferingMaxAggregateInputType
  }

  export type CourseOfferingGroupByOutputType = {
    id: string
    orgId: string
    courseId: string
    termId: string
    sectionCode: string
    modality: $Enums.ModalityType
    capacity: number
    waitlistCapacity: number
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: CourseOfferingCountAggregateOutputType | null
    _avg: CourseOfferingAvgAggregateOutputType | null
    _sum: CourseOfferingSumAggregateOutputType | null
    _min: CourseOfferingMinAggregateOutputType | null
    _max: CourseOfferingMaxAggregateOutputType | null
  }

  type GetCourseOfferingGroupByPayload<T extends CourseOfferingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseOfferingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseOfferingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseOfferingGroupByOutputType[P]>
            : GetScalarType<T[P], CourseOfferingGroupByOutputType[P]>
        }
      >
    >


  export type CourseOfferingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    courseId?: boolean
    termId?: boolean
    sectionCode?: boolean
    modality?: boolean
    capacity?: boolean
    waitlistCapacity?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    term?: boolean | TermDefaultArgs<ExtArgs>
    teachingAssignments?: boolean | CourseOffering$teachingAssignmentsArgs<ExtArgs>
    enrollments?: boolean | CourseOffering$enrollmentsArgs<ExtArgs>
    _count?: boolean | CourseOfferingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    courseId?: boolean
    termId?: boolean
    sectionCode?: boolean
    modality?: boolean
    capacity?: boolean
    waitlistCapacity?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    term?: boolean | TermDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    courseId?: boolean
    termId?: boolean
    sectionCode?: boolean
    modality?: boolean
    capacity?: boolean
    waitlistCapacity?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    term?: boolean | TermDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectScalar = {
    id?: boolean
    orgId?: boolean
    courseId?: boolean
    termId?: boolean
    sectionCode?: boolean
    modality?: boolean
    capacity?: boolean
    waitlistCapacity?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOfferingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "courseId" | "termId" | "sectionCode" | "modality" | "capacity" | "waitlistCapacity" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["courseOffering"]>
  export type CourseOfferingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    term?: boolean | TermDefaultArgs<ExtArgs>
    teachingAssignments?: boolean | CourseOffering$teachingAssignmentsArgs<ExtArgs>
    enrollments?: boolean | CourseOffering$enrollmentsArgs<ExtArgs>
    _count?: boolean | CourseOfferingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseOfferingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    term?: boolean | TermDefaultArgs<ExtArgs>
  }
  export type CourseOfferingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    term?: boolean | TermDefaultArgs<ExtArgs>
  }

  export type $CourseOfferingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseOffering"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      term: Prisma.$TermPayload<ExtArgs>
      teachingAssignments: Prisma.$TeachingAssignmentPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      courseId: string
      termId: string
      sectionCode: string
      modality: $Enums.ModalityType
      capacity: number
      waitlistCapacity: number
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseOffering"]>
    composites: {}
  }

  type CourseOfferingGetPayload<S extends boolean | null | undefined | CourseOfferingDefaultArgs> = $Result.GetResult<Prisma.$CourseOfferingPayload, S>

  type CourseOfferingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseOfferingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseOfferingCountAggregateInputType | true
    }

  export interface CourseOfferingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseOffering'], meta: { name: 'CourseOffering' } }
    /**
     * Find zero or one CourseOffering that matches the filter.
     * @param {CourseOfferingFindUniqueArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseOfferingFindUniqueArgs>(args: SelectSubset<T, CourseOfferingFindUniqueArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseOffering that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseOfferingFindUniqueOrThrowArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseOfferingFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseOfferingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseOffering that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindFirstArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseOfferingFindFirstArgs>(args?: SelectSubset<T, CourseOfferingFindFirstArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseOffering that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindFirstOrThrowArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseOfferingFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseOfferingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseOfferings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseOfferings
     * const courseOfferings = await prisma.courseOffering.findMany()
     * 
     * // Get first 10 CourseOfferings
     * const courseOfferings = await prisma.courseOffering.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseOfferingFindManyArgs>(args?: SelectSubset<T, CourseOfferingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseOffering.
     * @param {CourseOfferingCreateArgs} args - Arguments to create a CourseOffering.
     * @example
     * // Create one CourseOffering
     * const CourseOffering = await prisma.courseOffering.create({
     *   data: {
     *     // ... data to create a CourseOffering
     *   }
     * })
     * 
     */
    create<T extends CourseOfferingCreateArgs>(args: SelectSubset<T, CourseOfferingCreateArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseOfferings.
     * @param {CourseOfferingCreateManyArgs} args - Arguments to create many CourseOfferings.
     * @example
     * // Create many CourseOfferings
     * const courseOffering = await prisma.courseOffering.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseOfferingCreateManyArgs>(args?: SelectSubset<T, CourseOfferingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseOfferings and returns the data saved in the database.
     * @param {CourseOfferingCreateManyAndReturnArgs} args - Arguments to create many CourseOfferings.
     * @example
     * // Create many CourseOfferings
     * const courseOffering = await prisma.courseOffering.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseOfferings and only return the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseOfferingCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseOfferingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseOffering.
     * @param {CourseOfferingDeleteArgs} args - Arguments to delete one CourseOffering.
     * @example
     * // Delete one CourseOffering
     * const CourseOffering = await prisma.courseOffering.delete({
     *   where: {
     *     // ... filter to delete one CourseOffering
     *   }
     * })
     * 
     */
    delete<T extends CourseOfferingDeleteArgs>(args: SelectSubset<T, CourseOfferingDeleteArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseOffering.
     * @param {CourseOfferingUpdateArgs} args - Arguments to update one CourseOffering.
     * @example
     * // Update one CourseOffering
     * const courseOffering = await prisma.courseOffering.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseOfferingUpdateArgs>(args: SelectSubset<T, CourseOfferingUpdateArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseOfferings.
     * @param {CourseOfferingDeleteManyArgs} args - Arguments to filter CourseOfferings to delete.
     * @example
     * // Delete a few CourseOfferings
     * const { count } = await prisma.courseOffering.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseOfferingDeleteManyArgs>(args?: SelectSubset<T, CourseOfferingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseOfferings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseOfferings
     * const courseOffering = await prisma.courseOffering.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseOfferingUpdateManyArgs>(args: SelectSubset<T, CourseOfferingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseOfferings and returns the data updated in the database.
     * @param {CourseOfferingUpdateManyAndReturnArgs} args - Arguments to update many CourseOfferings.
     * @example
     * // Update many CourseOfferings
     * const courseOffering = await prisma.courseOffering.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseOfferings and only return the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseOfferingUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseOfferingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseOffering.
     * @param {CourseOfferingUpsertArgs} args - Arguments to update or create a CourseOffering.
     * @example
     * // Update or create a CourseOffering
     * const courseOffering = await prisma.courseOffering.upsert({
     *   create: {
     *     // ... data to create a CourseOffering
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseOffering we want to update
     *   }
     * })
     */
    upsert<T extends CourseOfferingUpsertArgs>(args: SelectSubset<T, CourseOfferingUpsertArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseOfferings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingCountArgs} args - Arguments to filter CourseOfferings to count.
     * @example
     * // Count the number of CourseOfferings
     * const count = await prisma.courseOffering.count({
     *   where: {
     *     // ... the filter for the CourseOfferings we want to count
     *   }
     * })
    **/
    count<T extends CourseOfferingCountArgs>(
      args?: Subset<T, CourseOfferingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseOfferingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseOffering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseOfferingAggregateArgs>(args: Subset<T, CourseOfferingAggregateArgs>): Prisma.PrismaPromise<GetCourseOfferingAggregateType<T>>

    /**
     * Group by CourseOffering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseOfferingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseOfferingGroupByArgs['orderBy'] }
        : { orderBy?: CourseOfferingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseOfferingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseOfferingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseOffering model
   */
  readonly fields: CourseOfferingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseOffering.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseOfferingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    term<T extends TermDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TermDefaultArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teachingAssignments<T extends CourseOffering$teachingAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, CourseOffering$teachingAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends CourseOffering$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, CourseOffering$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseOffering model
   */
  interface CourseOfferingFieldRefs {
    readonly id: FieldRef<"CourseOffering", 'String'>
    readonly orgId: FieldRef<"CourseOffering", 'String'>
    readonly courseId: FieldRef<"CourseOffering", 'String'>
    readonly termId: FieldRef<"CourseOffering", 'String'>
    readonly sectionCode: FieldRef<"CourseOffering", 'String'>
    readonly modality: FieldRef<"CourseOffering", 'ModalityType'>
    readonly capacity: FieldRef<"CourseOffering", 'Int'>
    readonly waitlistCapacity: FieldRef<"CourseOffering", 'Int'>
    readonly isPublished: FieldRef<"CourseOffering", 'Boolean'>
    readonly createdAt: FieldRef<"CourseOffering", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseOffering", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseOffering findUnique
   */
  export type CourseOfferingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering findUniqueOrThrow
   */
  export type CourseOfferingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering findFirst
   */
  export type CourseOfferingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseOfferings.
     */
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering findFirstOrThrow
   */
  export type CourseOfferingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseOfferings.
     */
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering findMany
   */
  export type CourseOfferingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOfferings to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering create
   */
  export type CourseOfferingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseOffering.
     */
    data: XOR<CourseOfferingCreateInput, CourseOfferingUncheckedCreateInput>
  }

  /**
   * CourseOffering createMany
   */
  export type CourseOfferingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseOfferings.
     */
    data: CourseOfferingCreateManyInput | CourseOfferingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseOffering createManyAndReturn
   */
  export type CourseOfferingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * The data used to create many CourseOfferings.
     */
    data: CourseOfferingCreateManyInput | CourseOfferingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseOffering update
   */
  export type CourseOfferingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseOffering.
     */
    data: XOR<CourseOfferingUpdateInput, CourseOfferingUncheckedUpdateInput>
    /**
     * Choose, which CourseOffering to update.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering updateMany
   */
  export type CourseOfferingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseOfferings.
     */
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyInput>
    /**
     * Filter which CourseOfferings to update
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to update.
     */
    limit?: number
  }

  /**
   * CourseOffering updateManyAndReturn
   */
  export type CourseOfferingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * The data used to update CourseOfferings.
     */
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyInput>
    /**
     * Filter which CourseOfferings to update
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseOffering upsert
   */
  export type CourseOfferingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseOffering to update in case it exists.
     */
    where: CourseOfferingWhereUniqueInput
    /**
     * In case the CourseOffering found by the `where` argument doesn't exist, create a new CourseOffering with this data.
     */
    create: XOR<CourseOfferingCreateInput, CourseOfferingUncheckedCreateInput>
    /**
     * In case the CourseOffering was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseOfferingUpdateInput, CourseOfferingUncheckedUpdateInput>
  }

  /**
   * CourseOffering delete
   */
  export type CourseOfferingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter which CourseOffering to delete.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering deleteMany
   */
  export type CourseOfferingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseOfferings to delete
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to delete.
     */
    limit?: number
  }

  /**
   * CourseOffering.teachingAssignments
   */
  export type CourseOffering$teachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    where?: TeachingAssignmentWhereInput
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    cursor?: TeachingAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * CourseOffering.enrollments
   */
  export type CourseOffering$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * CourseOffering without action
   */
  export type CourseOfferingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
  }


  /**
   * Model TeachingAssignment
   */

  export type AggregateTeachingAssignment = {
    _count: TeachingAssignmentCountAggregateOutputType | null
    _min: TeachingAssignmentMinAggregateOutputType | null
    _max: TeachingAssignmentMaxAggregateOutputType | null
  }

  export type TeachingAssignmentMinAggregateOutputType = {
    id: string | null
    courseOfferingId: string | null
    instructorProfileId: string | null
    role: $Enums.TeachingRole | null
    createdAt: Date | null
  }

  export type TeachingAssignmentMaxAggregateOutputType = {
    id: string | null
    courseOfferingId: string | null
    instructorProfileId: string | null
    role: $Enums.TeachingRole | null
    createdAt: Date | null
  }

  export type TeachingAssignmentCountAggregateOutputType = {
    id: number
    courseOfferingId: number
    instructorProfileId: number
    role: number
    createdAt: number
    _all: number
  }


  export type TeachingAssignmentMinAggregateInputType = {
    id?: true
    courseOfferingId?: true
    instructorProfileId?: true
    role?: true
    createdAt?: true
  }

  export type TeachingAssignmentMaxAggregateInputType = {
    id?: true
    courseOfferingId?: true
    instructorProfileId?: true
    role?: true
    createdAt?: true
  }

  export type TeachingAssignmentCountAggregateInputType = {
    id?: true
    courseOfferingId?: true
    instructorProfileId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type TeachingAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingAssignment to aggregate.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingAssignments
    **/
    _count?: true | TeachingAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingAssignmentMaxAggregateInputType
  }

  export type GetTeachingAssignmentAggregateType<T extends TeachingAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingAssignment[P]>
      : GetScalarType<T[P], AggregateTeachingAssignment[P]>
  }




  export type TeachingAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssignmentWhereInput
    orderBy?: TeachingAssignmentOrderByWithAggregationInput | TeachingAssignmentOrderByWithAggregationInput[]
    by: TeachingAssignmentScalarFieldEnum[] | TeachingAssignmentScalarFieldEnum
    having?: TeachingAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingAssignmentCountAggregateInputType | true
    _min?: TeachingAssignmentMinAggregateInputType
    _max?: TeachingAssignmentMaxAggregateInputType
  }

  export type TeachingAssignmentGroupByOutputType = {
    id: string
    courseOfferingId: string
    instructorProfileId: string
    role: $Enums.TeachingRole
    createdAt: Date
    _count: TeachingAssignmentCountAggregateOutputType | null
    _min: TeachingAssignmentMinAggregateOutputType | null
    _max: TeachingAssignmentMaxAggregateOutputType | null
  }

  type GetTeachingAssignmentGroupByPayload<T extends TeachingAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type TeachingAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseOfferingId?: boolean
    instructorProfileId?: boolean
    role?: boolean
    createdAt?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    instructorProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAssignment"]>

  export type TeachingAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseOfferingId?: boolean
    instructorProfileId?: boolean
    role?: boolean
    createdAt?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    instructorProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAssignment"]>

  export type TeachingAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseOfferingId?: boolean
    instructorProfileId?: boolean
    role?: boolean
    createdAt?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    instructorProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAssignment"]>

  export type TeachingAssignmentSelectScalar = {
    id?: boolean
    courseOfferingId?: boolean
    instructorProfileId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type TeachingAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseOfferingId" | "instructorProfileId" | "role" | "createdAt", ExtArgs["result"]["teachingAssignment"]>
  export type TeachingAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    instructorProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type TeachingAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    instructorProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type TeachingAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    instructorProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $TeachingAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingAssignment"
    objects: {
      courseOffering: Prisma.$CourseOfferingPayload<ExtArgs>
      instructorProfile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseOfferingId: string
      instructorProfileId: string
      role: $Enums.TeachingRole
      createdAt: Date
    }, ExtArgs["result"]["teachingAssignment"]>
    composites: {}
  }

  type TeachingAssignmentGetPayload<S extends boolean | null | undefined | TeachingAssignmentDefaultArgs> = $Result.GetResult<Prisma.$TeachingAssignmentPayload, S>

  type TeachingAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingAssignmentCountAggregateInputType | true
    }

  export interface TeachingAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingAssignment'], meta: { name: 'TeachingAssignment' } }
    /**
     * Find zero or one TeachingAssignment that matches the filter.
     * @param {TeachingAssignmentFindUniqueArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingAssignmentFindUniqueArgs>(args: SelectSubset<T, TeachingAssignmentFindUniqueArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingAssignmentFindUniqueOrThrowArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentFindFirstArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingAssignmentFindFirstArgs>(args?: SelectSubset<T, TeachingAssignmentFindFirstArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentFindFirstOrThrowArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingAssignments
     * const teachingAssignments = await prisma.teachingAssignment.findMany()
     * 
     * // Get first 10 TeachingAssignments
     * const teachingAssignments = await prisma.teachingAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingAssignmentWithIdOnly = await prisma.teachingAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingAssignmentFindManyArgs>(args?: SelectSubset<T, TeachingAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingAssignment.
     * @param {TeachingAssignmentCreateArgs} args - Arguments to create a TeachingAssignment.
     * @example
     * // Create one TeachingAssignment
     * const TeachingAssignment = await prisma.teachingAssignment.create({
     *   data: {
     *     // ... data to create a TeachingAssignment
     *   }
     * })
     * 
     */
    create<T extends TeachingAssignmentCreateArgs>(args: SelectSubset<T, TeachingAssignmentCreateArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingAssignments.
     * @param {TeachingAssignmentCreateManyArgs} args - Arguments to create many TeachingAssignments.
     * @example
     * // Create many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingAssignmentCreateManyArgs>(args?: SelectSubset<T, TeachingAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeachingAssignments and returns the data saved in the database.
     * @param {TeachingAssignmentCreateManyAndReturnArgs} args - Arguments to create many TeachingAssignments.
     * @example
     * // Create many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeachingAssignments and only return the `id`
     * const teachingAssignmentWithIdOnly = await prisma.teachingAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeachingAssignment.
     * @param {TeachingAssignmentDeleteArgs} args - Arguments to delete one TeachingAssignment.
     * @example
     * // Delete one TeachingAssignment
     * const TeachingAssignment = await prisma.teachingAssignment.delete({
     *   where: {
     *     // ... filter to delete one TeachingAssignment
     *   }
     * })
     * 
     */
    delete<T extends TeachingAssignmentDeleteArgs>(args: SelectSubset<T, TeachingAssignmentDeleteArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingAssignment.
     * @param {TeachingAssignmentUpdateArgs} args - Arguments to update one TeachingAssignment.
     * @example
     * // Update one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingAssignmentUpdateArgs>(args: SelectSubset<T, TeachingAssignmentUpdateArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingAssignments.
     * @param {TeachingAssignmentDeleteManyArgs} args - Arguments to filter TeachingAssignments to delete.
     * @example
     * // Delete a few TeachingAssignments
     * const { count } = await prisma.teachingAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingAssignmentDeleteManyArgs>(args?: SelectSubset<T, TeachingAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingAssignmentUpdateManyArgs>(args: SelectSubset<T, TeachingAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingAssignments and returns the data updated in the database.
     * @param {TeachingAssignmentUpdateManyAndReturnArgs} args - Arguments to update many TeachingAssignments.
     * @example
     * // Update many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeachingAssignments and only return the `id`
     * const teachingAssignmentWithIdOnly = await prisma.teachingAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeachingAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeachingAssignment.
     * @param {TeachingAssignmentUpsertArgs} args - Arguments to update or create a TeachingAssignment.
     * @example
     * // Update or create a TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.upsert({
     *   create: {
     *     // ... data to create a TeachingAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingAssignment we want to update
     *   }
     * })
     */
    upsert<T extends TeachingAssignmentUpsertArgs>(args: SelectSubset<T, TeachingAssignmentUpsertArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentCountArgs} args - Arguments to filter TeachingAssignments to count.
     * @example
     * // Count the number of TeachingAssignments
     * const count = await prisma.teachingAssignment.count({
     *   where: {
     *     // ... the filter for the TeachingAssignments we want to count
     *   }
     * })
    **/
    count<T extends TeachingAssignmentCountArgs>(
      args?: Subset<T, TeachingAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeachingAssignmentAggregateArgs>(args: Subset<T, TeachingAssignmentAggregateArgs>): Prisma.PrismaPromise<GetTeachingAssignmentAggregateType<T>>

    /**
     * Group by TeachingAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeachingAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: TeachingAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeachingAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingAssignment model
   */
  readonly fields: TeachingAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseOffering<T extends CourseOfferingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseOfferingDefaultArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructorProfile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeachingAssignment model
   */
  interface TeachingAssignmentFieldRefs {
    readonly id: FieldRef<"TeachingAssignment", 'String'>
    readonly courseOfferingId: FieldRef<"TeachingAssignment", 'String'>
    readonly instructorProfileId: FieldRef<"TeachingAssignment", 'String'>
    readonly role: FieldRef<"TeachingAssignment", 'TeachingRole'>
    readonly createdAt: FieldRef<"TeachingAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeachingAssignment findUnique
   */
  export type TeachingAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment findUniqueOrThrow
   */
  export type TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment findFirst
   */
  export type TeachingAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingAssignments.
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAssignments.
     */
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * TeachingAssignment findFirstOrThrow
   */
  export type TeachingAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingAssignments.
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAssignments.
     */
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * TeachingAssignment findMany
   */
  export type TeachingAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignments to fetch.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingAssignments.
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * TeachingAssignment create
   */
  export type TeachingAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TeachingAssignment.
     */
    data: XOR<TeachingAssignmentCreateInput, TeachingAssignmentUncheckedCreateInput>
  }

  /**
   * TeachingAssignment createMany
   */
  export type TeachingAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingAssignments.
     */
    data: TeachingAssignmentCreateManyInput | TeachingAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingAssignment createManyAndReturn
   */
  export type TeachingAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many TeachingAssignments.
     */
    data: TeachingAssignmentCreateManyInput | TeachingAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeachingAssignment update
   */
  export type TeachingAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TeachingAssignment.
     */
    data: XOR<TeachingAssignmentUpdateInput, TeachingAssignmentUncheckedUpdateInput>
    /**
     * Choose, which TeachingAssignment to update.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment updateMany
   */
  export type TeachingAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingAssignments.
     */
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TeachingAssignments to update
     */
    where?: TeachingAssignmentWhereInput
    /**
     * Limit how many TeachingAssignments to update.
     */
    limit?: number
  }

  /**
   * TeachingAssignment updateManyAndReturn
   */
  export type TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update TeachingAssignments.
     */
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TeachingAssignments to update
     */
    where?: TeachingAssignmentWhereInput
    /**
     * Limit how many TeachingAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeachingAssignment upsert
   */
  export type TeachingAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TeachingAssignment to update in case it exists.
     */
    where: TeachingAssignmentWhereUniqueInput
    /**
     * In case the TeachingAssignment found by the `where` argument doesn't exist, create a new TeachingAssignment with this data.
     */
    create: XOR<TeachingAssignmentCreateInput, TeachingAssignmentUncheckedCreateInput>
    /**
     * In case the TeachingAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingAssignmentUpdateInput, TeachingAssignmentUncheckedUpdateInput>
  }

  /**
   * TeachingAssignment delete
   */
  export type TeachingAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter which TeachingAssignment to delete.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment deleteMany
   */
  export type TeachingAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingAssignments to delete
     */
    where?: TeachingAssignmentWhereInput
    /**
     * Limit how many TeachingAssignments to delete.
     */
    limit?: number
  }

  /**
   * TeachingAssignment without action
   */
  export type TeachingAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    courseOfferingId: string | null
    studentProfileId: string | null
    status: $Enums.EnrollmentStatus | null
    gradeScheme: string | null
    gradeValue: string | null
    enrolledAt: Date | null
    droppedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    courseOfferingId: string | null
    studentProfileId: string | null
    status: $Enums.EnrollmentStatus | null
    gradeScheme: string | null
    gradeValue: string | null
    enrolledAt: Date | null
    droppedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    courseOfferingId: number
    studentProfileId: number
    status: number
    gradeScheme: number
    gradeValue: number
    enrolledAt: number
    droppedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnrollmentMinAggregateInputType = {
    id?: true
    courseOfferingId?: true
    studentProfileId?: true
    status?: true
    gradeScheme?: true
    gradeValue?: true
    enrolledAt?: true
    droppedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    courseOfferingId?: true
    studentProfileId?: true
    status?: true
    gradeScheme?: true
    gradeValue?: true
    enrolledAt?: true
    droppedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    courseOfferingId?: true
    studentProfileId?: true
    status?: true
    gradeScheme?: true
    gradeValue?: true
    enrolledAt?: true
    droppedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    courseOfferingId: string
    studentProfileId: string
    status: $Enums.EnrollmentStatus
    gradeScheme: string | null
    gradeValue: string | null
    enrolledAt: Date
    droppedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseOfferingId?: boolean
    studentProfileId?: boolean
    status?: boolean
    gradeScheme?: boolean
    gradeValue?: boolean
    enrolledAt?: boolean
    droppedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    studentProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseOfferingId?: boolean
    studentProfileId?: boolean
    status?: boolean
    gradeScheme?: boolean
    gradeValue?: boolean
    enrolledAt?: boolean
    droppedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    studentProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseOfferingId?: boolean
    studentProfileId?: boolean
    status?: boolean
    gradeScheme?: boolean
    gradeValue?: boolean
    enrolledAt?: boolean
    droppedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    studentProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    courseOfferingId?: boolean
    studentProfileId?: boolean
    status?: boolean
    gradeScheme?: boolean
    gradeValue?: boolean
    enrolledAt?: boolean
    droppedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseOfferingId" | "studentProfileId" | "status" | "gradeScheme" | "gradeValue" | "enrolledAt" | "droppedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    studentProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    studentProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    studentProfile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      courseOffering: Prisma.$CourseOfferingPayload<ExtArgs>
      studentProfile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseOfferingId: string
      studentProfileId: string
      status: $Enums.EnrollmentStatus
      gradeScheme: string | null
      gradeValue: string | null
      enrolledAt: Date
      droppedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseOffering<T extends CourseOfferingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseOfferingDefaultArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentProfile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'String'>
    readonly courseOfferingId: FieldRef<"Enrollment", 'String'>
    readonly studentProfileId: FieldRef<"Enrollment", 'String'>
    readonly status: FieldRef<"Enrollment", 'EnrollmentStatus'>
    readonly gradeScheme: FieldRef<"Enrollment", 'String'>
    readonly gradeValue: FieldRef<"Enrollment", 'String'>
    readonly enrolledAt: FieldRef<"Enrollment", 'DateTime'>
    readonly droppedAt: FieldRef<"Enrollment", 'DateTime'>
    readonly createdAt: FieldRef<"Enrollment", 'DateTime'>
    readonly updatedAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    avatarUrl: 'avatarUrl',
    status: 'status',
    locale: 'locale',
    emailVerifiedAt: 'emailVerifiedAt',
    failedLoginAttempts: 'failedLoginAttempts',
    lockedUntil: 'lockedUntil',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ProfileRoleScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    roleId: 'roleId',
    orgId: 'orgId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProfileRoleScalarFieldEnum = (typeof ProfileRoleScalarFieldEnum)[keyof typeof ProfileRoleScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    code: 'code',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const TermScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    code: 'code',
    name: 'name',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TermScalarFieldEnum = (typeof TermScalarFieldEnum)[keyof typeof TermScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    departmentId: 'departmentId',
    code: 'code',
    title: 'title',
    description: 'description',
    creditHours: 'creditHours',
    createdById: 'createdById',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseOfferingScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    courseId: 'courseId',
    termId: 'termId',
    sectionCode: 'sectionCode',
    modality: 'modality',
    capacity: 'capacity',
    waitlistCapacity: 'waitlistCapacity',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseOfferingScalarFieldEnum = (typeof CourseOfferingScalarFieldEnum)[keyof typeof CourseOfferingScalarFieldEnum]


  export const TeachingAssignmentScalarFieldEnum: {
    id: 'id',
    courseOfferingId: 'courseOfferingId',
    instructorProfileId: 'instructorProfileId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type TeachingAssignmentScalarFieldEnum = (typeof TeachingAssignmentScalarFieldEnum)[keyof typeof TeachingAssignmentScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    courseOfferingId: 'courseOfferingId',
    studentProfileId: 'studentProfileId',
    status: 'status',
    gradeScheme: 'gradeScheme',
    gradeValue: 'gradeValue',
    enrolledAt: 'enrolledAt',
    droppedAt: 'droppedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'UserLocale'
   */
  export type EnumUserLocaleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserLocale'>
    


  /**
   * Reference to a field of type 'UserLocale[]'
   */
  export type ListEnumUserLocaleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserLocale[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ModalityType'
   */
  export type EnumModalityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModalityType'>
    


  /**
   * Reference to a field of type 'ModalityType[]'
   */
  export type ListEnumModalityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModalityType[]'>
    


  /**
   * Reference to a field of type 'TeachingRole'
   */
  export type EnumTeachingRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeachingRole'>
    


  /**
   * Reference to a field of type 'TeachingRole[]'
   */
  export type ListEnumTeachingRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeachingRole[]'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus'
   */
  export type EnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus[]'
   */
  export type ListEnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    key?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    profileRoles?: ProfileRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profileRoles?: ProfileRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    profileRoles?: ProfileRoleListRelationFilter
  }, "id" | "key">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    key?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    orgId?: StringNullableFilter<"Profile"> | string | null
    email?: StringFilter<"Profile"> | string
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    username?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    status?: EnumUserStatusFilter<"Profile"> | $Enums.UserStatus
    locale?: EnumUserLocaleFilter<"Profile"> | $Enums.UserLocale
    emailVerifiedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    failedLoginAttempts?: IntFilter<"Profile"> | number
    lockedUntil?: DateTimeNullableFilter<"Profile"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    profileRoles?: ProfileRoleListRelationFilter
    createdCourses?: CourseListRelationFilter
    teachingAssignments?: TeachingAssignmentListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    locale?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    failedLoginAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profileRoles?: ProfileRoleOrderByRelationAggregateInput
    createdCourses?: CourseOrderByRelationAggregateInput
    teachingAssignments?: TeachingAssignmentOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    orgId?: StringNullableFilter<"Profile"> | string | null
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    status?: EnumUserStatusFilter<"Profile"> | $Enums.UserStatus
    locale?: EnumUserLocaleFilter<"Profile"> | $Enums.UserLocale
    emailVerifiedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    failedLoginAttempts?: IntFilter<"Profile"> | number
    lockedUntil?: DateTimeNullableFilter<"Profile"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    profileRoles?: ProfileRoleListRelationFilter
    createdCourses?: CourseListRelationFilter
    teachingAssignments?: TeachingAssignmentListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }, "id" | "email" | "username">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    locale?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    failedLoginAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    orgId?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    email?: StringWithAggregatesFilter<"Profile"> | string
    firstName?: StringWithAggregatesFilter<"Profile"> | string
    lastName?: StringWithAggregatesFilter<"Profile"> | string
    username?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"Profile"> | $Enums.UserStatus
    locale?: EnumUserLocaleWithAggregatesFilter<"Profile"> | $Enums.UserLocale
    emailVerifiedAt?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    failedLoginAttempts?: IntWithAggregatesFilter<"Profile"> | number
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
  }

  export type ProfileRoleWhereInput = {
    AND?: ProfileRoleWhereInput | ProfileRoleWhereInput[]
    OR?: ProfileRoleWhereInput[]
    NOT?: ProfileRoleWhereInput | ProfileRoleWhereInput[]
    id?: StringFilter<"ProfileRole"> | string
    profileId?: StringFilter<"ProfileRole"> | string
    roleId?: StringFilter<"ProfileRole"> | string
    orgId?: StringNullableFilter<"ProfileRole"> | string | null
    createdAt?: DateTimeFilter<"ProfileRole"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileRole"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProfileRole"> | Date | string | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type ProfileRoleOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    roleId?: SortOrder
    orgId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profile?: ProfileOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type ProfileRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId_roleId_orgId?: ProfileRoleProfileIdRoleIdOrgIdCompoundUniqueInput
    AND?: ProfileRoleWhereInput | ProfileRoleWhereInput[]
    OR?: ProfileRoleWhereInput[]
    NOT?: ProfileRoleWhereInput | ProfileRoleWhereInput[]
    profileId?: StringFilter<"ProfileRole"> | string
    roleId?: StringFilter<"ProfileRole"> | string
    orgId?: StringNullableFilter<"ProfileRole"> | string | null
    createdAt?: DateTimeFilter<"ProfileRole"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileRole"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProfileRole"> | Date | string | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "profileId_roleId_orgId">

  export type ProfileRoleOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    roleId?: SortOrder
    orgId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProfileRoleCountOrderByAggregateInput
    _max?: ProfileRoleMaxOrderByAggregateInput
    _min?: ProfileRoleMinOrderByAggregateInput
  }

  export type ProfileRoleScalarWhereWithAggregatesInput = {
    AND?: ProfileRoleScalarWhereWithAggregatesInput | ProfileRoleScalarWhereWithAggregatesInput[]
    OR?: ProfileRoleScalarWhereWithAggregatesInput[]
    NOT?: ProfileRoleScalarWhereWithAggregatesInput | ProfileRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfileRole"> | string
    profileId?: StringWithAggregatesFilter<"ProfileRole"> | string
    roleId?: StringWithAggregatesFilter<"ProfileRole"> | string
    orgId?: StringNullableWithAggregatesFilter<"ProfileRole"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProfileRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfileRole"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ProfileRole"> | Date | string | null
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    orgId?: StringFilter<"Department"> | string
    code?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    courses?: CourseListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_code?: DepartmentOrgIdCodeCompoundUniqueInput
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    orgId?: StringFilter<"Department"> | string
    code?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    courses?: CourseListRelationFilter
  }, "id" | "orgId_code">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    orgId?: StringWithAggregatesFilter<"Department"> | string
    code?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type TermWhereInput = {
    AND?: TermWhereInput | TermWhereInput[]
    OR?: TermWhereInput[]
    NOT?: TermWhereInput | TermWhereInput[]
    id?: StringFilter<"Term"> | string
    orgId?: StringFilter<"Term"> | string
    code?: StringFilter<"Term"> | string
    name?: StringFilter<"Term"> | string
    dateStart?: DateTimeFilter<"Term"> | Date | string
    dateEnd?: DateTimeFilter<"Term"> | Date | string
    isActive?: BoolFilter<"Term"> | boolean
    createdAt?: DateTimeFilter<"Term"> | Date | string
    updatedAt?: DateTimeFilter<"Term"> | Date | string
    courseOfferings?: CourseOfferingListRelationFilter
  }

  export type TermOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseOfferings?: CourseOfferingOrderByRelationAggregateInput
  }

  export type TermWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_code?: TermOrgIdCodeCompoundUniqueInput
    AND?: TermWhereInput | TermWhereInput[]
    OR?: TermWhereInput[]
    NOT?: TermWhereInput | TermWhereInput[]
    orgId?: StringFilter<"Term"> | string
    code?: StringFilter<"Term"> | string
    name?: StringFilter<"Term"> | string
    dateStart?: DateTimeFilter<"Term"> | Date | string
    dateEnd?: DateTimeFilter<"Term"> | Date | string
    isActive?: BoolFilter<"Term"> | boolean
    createdAt?: DateTimeFilter<"Term"> | Date | string
    updatedAt?: DateTimeFilter<"Term"> | Date | string
    courseOfferings?: CourseOfferingListRelationFilter
  }, "id" | "orgId_code">

  export type TermOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TermCountOrderByAggregateInput
    _max?: TermMaxOrderByAggregateInput
    _min?: TermMinOrderByAggregateInput
  }

  export type TermScalarWhereWithAggregatesInput = {
    AND?: TermScalarWhereWithAggregatesInput | TermScalarWhereWithAggregatesInput[]
    OR?: TermScalarWhereWithAggregatesInput[]
    NOT?: TermScalarWhereWithAggregatesInput | TermScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Term"> | string
    orgId?: StringWithAggregatesFilter<"Term"> | string
    code?: StringWithAggregatesFilter<"Term"> | string
    name?: StringWithAggregatesFilter<"Term"> | string
    dateStart?: DateTimeWithAggregatesFilter<"Term"> | Date | string
    dateEnd?: DateTimeWithAggregatesFilter<"Term"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Term"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Term"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Term"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    orgId?: StringFilter<"Course"> | string
    departmentId?: StringNullableFilter<"Course"> | string | null
    code?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    creditHours?: IntNullableFilter<"Course"> | number | null
    createdById?: StringNullableFilter<"Course"> | string | null
    isActive?: BoolFilter<"Course"> | boolean
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    createdBy?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    courseOfferings?: CourseOfferingListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    creditHours?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    createdBy?: ProfileOrderByWithRelationInput
    courseOfferings?: CourseOfferingOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_code?: CourseOrgIdCodeCompoundUniqueInput
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    orgId?: StringFilter<"Course"> | string
    departmentId?: StringNullableFilter<"Course"> | string | null
    code?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    creditHours?: IntNullableFilter<"Course"> | number | null
    createdById?: StringNullableFilter<"Course"> | string | null
    isActive?: BoolFilter<"Course"> | boolean
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    createdBy?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    courseOfferings?: CourseOfferingListRelationFilter
  }, "id" | "orgId_code">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    creditHours?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    orgId?: StringWithAggregatesFilter<"Course"> | string
    departmentId?: StringNullableWithAggregatesFilter<"Course"> | string | null
    code?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    creditHours?: IntNullableWithAggregatesFilter<"Course"> | number | null
    createdById?: StringNullableWithAggregatesFilter<"Course"> | string | null
    isActive?: BoolWithAggregatesFilter<"Course"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type CourseOfferingWhereInput = {
    AND?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    OR?: CourseOfferingWhereInput[]
    NOT?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    id?: StringFilter<"CourseOffering"> | string
    orgId?: StringFilter<"CourseOffering"> | string
    courseId?: StringFilter<"CourseOffering"> | string
    termId?: StringFilter<"CourseOffering"> | string
    sectionCode?: StringFilter<"CourseOffering"> | string
    modality?: EnumModalityTypeFilter<"CourseOffering"> | $Enums.ModalityType
    capacity?: IntFilter<"CourseOffering"> | number
    waitlistCapacity?: IntFilter<"CourseOffering"> | number
    isPublished?: BoolFilter<"CourseOffering"> | boolean
    createdAt?: DateTimeFilter<"CourseOffering"> | Date | string
    updatedAt?: DateTimeFilter<"CourseOffering"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    term?: XOR<TermScalarRelationFilter, TermWhereInput>
    teachingAssignments?: TeachingAssignmentListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }

  export type CourseOfferingOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    courseId?: SortOrder
    termId?: SortOrder
    sectionCode?: SortOrder
    modality?: SortOrder
    capacity?: SortOrder
    waitlistCapacity?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    term?: TermOrderByWithRelationInput
    teachingAssignments?: TeachingAssignmentOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type CourseOfferingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_termId_sectionCode?: CourseOfferingCourseIdTermIdSectionCodeCompoundUniqueInput
    AND?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    OR?: CourseOfferingWhereInput[]
    NOT?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    orgId?: StringFilter<"CourseOffering"> | string
    courseId?: StringFilter<"CourseOffering"> | string
    termId?: StringFilter<"CourseOffering"> | string
    sectionCode?: StringFilter<"CourseOffering"> | string
    modality?: EnumModalityTypeFilter<"CourseOffering"> | $Enums.ModalityType
    capacity?: IntFilter<"CourseOffering"> | number
    waitlistCapacity?: IntFilter<"CourseOffering"> | number
    isPublished?: BoolFilter<"CourseOffering"> | boolean
    createdAt?: DateTimeFilter<"CourseOffering"> | Date | string
    updatedAt?: DateTimeFilter<"CourseOffering"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    term?: XOR<TermScalarRelationFilter, TermWhereInput>
    teachingAssignments?: TeachingAssignmentListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }, "id" | "courseId_termId_sectionCode">

  export type CourseOfferingOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    courseId?: SortOrder
    termId?: SortOrder
    sectionCode?: SortOrder
    modality?: SortOrder
    capacity?: SortOrder
    waitlistCapacity?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseOfferingCountOrderByAggregateInput
    _avg?: CourseOfferingAvgOrderByAggregateInput
    _max?: CourseOfferingMaxOrderByAggregateInput
    _min?: CourseOfferingMinOrderByAggregateInput
    _sum?: CourseOfferingSumOrderByAggregateInput
  }

  export type CourseOfferingScalarWhereWithAggregatesInput = {
    AND?: CourseOfferingScalarWhereWithAggregatesInput | CourseOfferingScalarWhereWithAggregatesInput[]
    OR?: CourseOfferingScalarWhereWithAggregatesInput[]
    NOT?: CourseOfferingScalarWhereWithAggregatesInput | CourseOfferingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseOffering"> | string
    orgId?: StringWithAggregatesFilter<"CourseOffering"> | string
    courseId?: StringWithAggregatesFilter<"CourseOffering"> | string
    termId?: StringWithAggregatesFilter<"CourseOffering"> | string
    sectionCode?: StringWithAggregatesFilter<"CourseOffering"> | string
    modality?: EnumModalityTypeWithAggregatesFilter<"CourseOffering"> | $Enums.ModalityType
    capacity?: IntWithAggregatesFilter<"CourseOffering"> | number
    waitlistCapacity?: IntWithAggregatesFilter<"CourseOffering"> | number
    isPublished?: BoolWithAggregatesFilter<"CourseOffering"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CourseOffering"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseOffering"> | Date | string
  }

  export type TeachingAssignmentWhereInput = {
    AND?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    OR?: TeachingAssignmentWhereInput[]
    NOT?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    id?: StringFilter<"TeachingAssignment"> | string
    courseOfferingId?: StringFilter<"TeachingAssignment"> | string
    instructorProfileId?: StringFilter<"TeachingAssignment"> | string
    role?: EnumTeachingRoleFilter<"TeachingAssignment"> | $Enums.TeachingRole
    createdAt?: DateTimeFilter<"TeachingAssignment"> | Date | string
    courseOffering?: XOR<CourseOfferingScalarRelationFilter, CourseOfferingWhereInput>
    instructorProfile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type TeachingAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
    instructorProfileId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    courseOffering?: CourseOfferingOrderByWithRelationInput
    instructorProfile?: ProfileOrderByWithRelationInput
  }

  export type TeachingAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseOfferingId_instructorProfileId?: TeachingAssignmentCourseOfferingIdInstructorProfileIdCompoundUniqueInput
    AND?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    OR?: TeachingAssignmentWhereInput[]
    NOT?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    courseOfferingId?: StringFilter<"TeachingAssignment"> | string
    instructorProfileId?: StringFilter<"TeachingAssignment"> | string
    role?: EnumTeachingRoleFilter<"TeachingAssignment"> | $Enums.TeachingRole
    createdAt?: DateTimeFilter<"TeachingAssignment"> | Date | string
    courseOffering?: XOR<CourseOfferingScalarRelationFilter, CourseOfferingWhereInput>
    instructorProfile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "courseOfferingId_instructorProfileId">

  export type TeachingAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
    instructorProfileId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: TeachingAssignmentCountOrderByAggregateInput
    _max?: TeachingAssignmentMaxOrderByAggregateInput
    _min?: TeachingAssignmentMinOrderByAggregateInput
  }

  export type TeachingAssignmentScalarWhereWithAggregatesInput = {
    AND?: TeachingAssignmentScalarWhereWithAggregatesInput | TeachingAssignmentScalarWhereWithAggregatesInput[]
    OR?: TeachingAssignmentScalarWhereWithAggregatesInput[]
    NOT?: TeachingAssignmentScalarWhereWithAggregatesInput | TeachingAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    courseOfferingId?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    instructorProfileId?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    role?: EnumTeachingRoleWithAggregatesFilter<"TeachingAssignment"> | $Enums.TeachingRole
    createdAt?: DateTimeWithAggregatesFilter<"TeachingAssignment"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    courseOfferingId?: StringFilter<"Enrollment"> | string
    studentProfileId?: StringFilter<"Enrollment"> | string
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    gradeScheme?: StringNullableFilter<"Enrollment"> | string | null
    gradeValue?: StringNullableFilter<"Enrollment"> | string | null
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    droppedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    courseOffering?: XOR<CourseOfferingScalarRelationFilter, CourseOfferingWhereInput>
    studentProfile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
    studentProfileId?: SortOrder
    status?: SortOrder
    gradeScheme?: SortOrderInput | SortOrder
    gradeValue?: SortOrderInput | SortOrder
    enrolledAt?: SortOrder
    droppedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseOffering?: CourseOfferingOrderByWithRelationInput
    studentProfile?: ProfileOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseOfferingId_studentProfileId?: EnrollmentCourseOfferingIdStudentProfileIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    courseOfferingId?: StringFilter<"Enrollment"> | string
    studentProfileId?: StringFilter<"Enrollment"> | string
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    gradeScheme?: StringNullableFilter<"Enrollment"> | string | null
    gradeValue?: StringNullableFilter<"Enrollment"> | string | null
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    droppedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    courseOffering?: XOR<CourseOfferingScalarRelationFilter, CourseOfferingWhereInput>
    studentProfile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "courseOfferingId_studentProfileId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
    studentProfileId?: SortOrder
    status?: SortOrder
    gradeScheme?: SortOrderInput | SortOrder
    gradeValue?: SortOrderInput | SortOrder
    enrolledAt?: SortOrder
    droppedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollment"> | string
    courseOfferingId?: StringWithAggregatesFilter<"Enrollment"> | string
    studentProfileId?: StringWithAggregatesFilter<"Enrollment"> | string
    status?: EnumEnrollmentStatusWithAggregatesFilter<"Enrollment"> | $Enums.EnrollmentStatus
    gradeScheme?: StringNullableWithAggregatesFilter<"Enrollment"> | string | null
    gradeValue?: StringNullableWithAggregatesFilter<"Enrollment"> | string | null
    enrolledAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    droppedAt?: DateTimeNullableWithAggregatesFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    key: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileRoles?: ProfileRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    key: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileRoles?: ProfileRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileRoles?: ProfileRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileRoles?: ProfileRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    key: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileCreateInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileRoles?: ProfileRoleCreateNestedManyWithoutProfileInput
    createdCourses?: CourseCreateNestedManyWithoutCreatedByInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutInstructorProfileInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileRoles?: ProfileRoleUncheckedCreateNestedManyWithoutProfileInput
    createdCourses?: CourseUncheckedCreateNestedManyWithoutCreatedByInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutInstructorProfileInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileRoles?: ProfileRoleUpdateManyWithoutProfileNestedInput
    createdCourses?: CourseUpdateManyWithoutCreatedByNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutInstructorProfileNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileRoles?: ProfileRoleUncheckedUpdateManyWithoutProfileNestedInput
    createdCourses?: CourseUncheckedUpdateManyWithoutCreatedByNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutInstructorProfileNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileRoleCreateInput = {
    id?: string
    orgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile: ProfileCreateNestedOneWithoutProfileRolesInput
    role: RoleCreateNestedOneWithoutProfileRolesInput
  }

  export type ProfileRoleUncheckedCreateInput = {
    id?: string
    profileId: string
    roleId: string
    orgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUpdateOneRequiredWithoutProfileRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutProfileRolesNestedInput
  }

  export type ProfileRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileRoleCreateManyInput = {
    id?: string
    profileId: string
    roleId: string
    orgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepartmentCreateInput = {
    id?: string
    orgId: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    orgId: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    orgId: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermCreateInput = {
    id?: string
    orgId: string
    code: string
    name: string
    dateStart: Date | string
    dateEnd: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseOfferings?: CourseOfferingCreateNestedManyWithoutTermInput
  }

  export type TermUncheckedCreateInput = {
    id?: string
    orgId: string
    code: string
    name: string
    dateStart: Date | string
    dateEnd: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseOfferings?: CourseOfferingUncheckedCreateNestedManyWithoutTermInput
  }

  export type TermUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseOfferings?: CourseOfferingUpdateManyWithoutTermNestedInput
  }

  export type TermUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseOfferings?: CourseOfferingUncheckedUpdateManyWithoutTermNestedInput
  }

  export type TermCreateManyInput = {
    id?: string
    orgId: string
    code: string
    name: string
    dateStart: Date | string
    dateEnd: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    orgId: string
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutCoursesInput
    createdBy?: ProfileCreateNestedOneWithoutCreatedCoursesInput
    courseOfferings?: CourseOfferingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    orgId: string
    departmentId?: string | null
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    createdById?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseOfferings?: CourseOfferingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutCoursesNestedInput
    createdBy?: ProfileUpdateOneWithoutCreatedCoursesNestedInput
    courseOfferings?: CourseOfferingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseOfferings?: CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    orgId: string
    departmentId?: string | null
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    createdById?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseOfferingCreateInput = {
    id?: string
    orgId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseOfferingsInput
    term: TermCreateNestedOneWithoutCourseOfferingsInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutCourseOfferingInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateInput = {
    id?: string
    orgId: string
    courseId: string
    termId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutCourseOfferingInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseOfferingsNestedInput
    term?: TermUpdateOneRequiredWithoutCourseOfferingsNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutCourseOfferingNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    termId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutCourseOfferingNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingCreateManyInput = {
    id?: string
    orgId: string
    courseId: string
    termId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseOfferingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseOfferingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    termId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentCreateInput = {
    id?: string
    role?: $Enums.TeachingRole
    createdAt?: Date | string
    courseOffering: CourseOfferingCreateNestedOneWithoutTeachingAssignmentsInput
    instructorProfile: ProfileCreateNestedOneWithoutTeachingAssignmentsInput
  }

  export type TeachingAssignmentUncheckedCreateInput = {
    id?: string
    courseOfferingId: string
    instructorProfileId: string
    role?: $Enums.TeachingRole
    createdAt?: Date | string
  }

  export type TeachingAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeachingRoleFieldUpdateOperationsInput | $Enums.TeachingRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseOffering?: CourseOfferingUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
    instructorProfile?: ProfileUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
  }

  export type TeachingAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseOfferingId?: StringFieldUpdateOperationsInput | string
    instructorProfileId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeachingRoleFieldUpdateOperationsInput | $Enums.TeachingRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentCreateManyInput = {
    id?: string
    courseOfferingId: string
    instructorProfileId: string
    role?: $Enums.TeachingRole
    createdAt?: Date | string
  }

  export type TeachingAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeachingRoleFieldUpdateOperationsInput | $Enums.TeachingRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseOfferingId?: StringFieldUpdateOperationsInput | string
    instructorProfileId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeachingRoleFieldUpdateOperationsInput | $Enums.TeachingRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    gradeScheme?: string | null
    gradeValue?: string | null
    enrolledAt?: Date | string
    droppedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseOffering: CourseOfferingCreateNestedOneWithoutEnrollmentsInput
    studentProfile: ProfileCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: string
    courseOfferingId: string
    studentProfileId: string
    status?: $Enums.EnrollmentStatus
    gradeScheme?: string | null
    gradeValue?: string | null
    enrolledAt?: Date | string
    droppedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    gradeScheme?: NullableStringFieldUpdateOperationsInput | string | null
    gradeValue?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    droppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseOffering?: CourseOfferingUpdateOneRequiredWithoutEnrollmentsNestedInput
    studentProfile?: ProfileUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseOfferingId?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    gradeScheme?: NullableStringFieldUpdateOperationsInput | string | null
    gradeValue?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    droppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    id?: string
    courseOfferingId: string
    studentProfileId: string
    status?: $Enums.EnrollmentStatus
    gradeScheme?: string | null
    gradeValue?: string | null
    enrolledAt?: Date | string
    droppedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    gradeScheme?: NullableStringFieldUpdateOperationsInput | string | null
    gradeValue?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    droppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseOfferingId?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    gradeScheme?: NullableStringFieldUpdateOperationsInput | string | null
    gradeValue?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    droppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProfileRoleListRelationFilter = {
    every?: ProfileRoleWhereInput
    some?: ProfileRoleWhereInput
    none?: ProfileRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumUserLocaleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLocale | EnumUserLocaleFieldRefInput<$PrismaModel>
    in?: $Enums.UserLocale[] | ListEnumUserLocaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLocale[] | ListEnumUserLocaleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLocaleFilter<$PrismaModel> | $Enums.UserLocale
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type TeachingAssignmentListRelationFilter = {
    every?: TeachingAssignmentWhereInput
    some?: TeachingAssignmentWhereInput
    none?: TeachingAssignmentWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeachingAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    status?: SortOrder
    locale?: SortOrder
    emailVerifiedAt?: SortOrder
    failedLoginAttempts?: SortOrder
    lockedUntil?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    failedLoginAttempts?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    status?: SortOrder
    locale?: SortOrder
    emailVerifiedAt?: SortOrder
    failedLoginAttempts?: SortOrder
    lockedUntil?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    status?: SortOrder
    locale?: SortOrder
    emailVerifiedAt?: SortOrder
    failedLoginAttempts?: SortOrder
    lockedUntil?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    failedLoginAttempts?: SortOrder
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumUserLocaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLocale | EnumUserLocaleFieldRefInput<$PrismaModel>
    in?: $Enums.UserLocale[] | ListEnumUserLocaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLocale[] | ListEnumUserLocaleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLocaleWithAggregatesFilter<$PrismaModel> | $Enums.UserLocale
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserLocaleFilter<$PrismaModel>
    _max?: NestedEnumUserLocaleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ProfileRoleProfileIdRoleIdOrgIdCompoundUniqueInput = {
    profileId: string
    roleId: string
    orgId: string
  }

  export type ProfileRoleCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    roleId?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProfileRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    roleId?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProfileRoleMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    roleId?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepartmentOrgIdCodeCompoundUniqueInput = {
    orgId: string
    code: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CourseOfferingListRelationFilter = {
    every?: CourseOfferingWhereInput
    some?: CourseOfferingWhereInput
    none?: CourseOfferingWhereInput
  }

  export type CourseOfferingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TermOrgIdCodeCompoundUniqueInput = {
    orgId: string
    code: string
  }

  export type TermCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type CourseOrgIdCodeCompoundUniqueInput = {
    orgId: string
    code: string
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    departmentId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creditHours?: SortOrder
    createdById?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    creditHours?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    departmentId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creditHours?: SortOrder
    createdById?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    departmentId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creditHours?: SortOrder
    createdById?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    creditHours?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumModalityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ModalityType | EnumModalityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModalityType[] | ListEnumModalityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModalityType[] | ListEnumModalityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModalityTypeFilter<$PrismaModel> | $Enums.ModalityType
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type TermScalarRelationFilter = {
    is?: TermWhereInput
    isNot?: TermWhereInput
  }

  export type CourseOfferingCourseIdTermIdSectionCodeCompoundUniqueInput = {
    courseId: string
    termId: string
    sectionCode: string
  }

  export type CourseOfferingCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    courseId?: SortOrder
    termId?: SortOrder
    sectionCode?: SortOrder
    modality?: SortOrder
    capacity?: SortOrder
    waitlistCapacity?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseOfferingAvgOrderByAggregateInput = {
    capacity?: SortOrder
    waitlistCapacity?: SortOrder
  }

  export type CourseOfferingMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    courseId?: SortOrder
    termId?: SortOrder
    sectionCode?: SortOrder
    modality?: SortOrder
    capacity?: SortOrder
    waitlistCapacity?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseOfferingMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    courseId?: SortOrder
    termId?: SortOrder
    sectionCode?: SortOrder
    modality?: SortOrder
    capacity?: SortOrder
    waitlistCapacity?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseOfferingSumOrderByAggregateInput = {
    capacity?: SortOrder
    waitlistCapacity?: SortOrder
  }

  export type EnumModalityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModalityType | EnumModalityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModalityType[] | ListEnumModalityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModalityType[] | ListEnumModalityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModalityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ModalityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModalityTypeFilter<$PrismaModel>
    _max?: NestedEnumModalityTypeFilter<$PrismaModel>
  }

  export type EnumTeachingRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingRole | EnumTeachingRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingRole[] | ListEnumTeachingRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingRole[] | ListEnumTeachingRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingRoleFilter<$PrismaModel> | $Enums.TeachingRole
  }

  export type CourseOfferingScalarRelationFilter = {
    is?: CourseOfferingWhereInput
    isNot?: CourseOfferingWhereInput
  }

  export type TeachingAssignmentCourseOfferingIdInstructorProfileIdCompoundUniqueInput = {
    courseOfferingId: string
    instructorProfileId: string
  }

  export type TeachingAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
    instructorProfileId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type TeachingAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
    instructorProfileId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type TeachingAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
    instructorProfileId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTeachingRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingRole | EnumTeachingRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingRole[] | ListEnumTeachingRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingRole[] | ListEnumTeachingRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeachingRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeachingRoleFilter<$PrismaModel>
    _max?: NestedEnumTeachingRoleFilter<$PrismaModel>
  }

  export type EnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type EnrollmentCourseOfferingIdStudentProfileIdCompoundUniqueInput = {
    courseOfferingId: string
    studentProfileId: string
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
    studentProfileId?: SortOrder
    status?: SortOrder
    gradeScheme?: SortOrder
    gradeValue?: SortOrder
    enrolledAt?: SortOrder
    droppedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
    studentProfileId?: SortOrder
    status?: SortOrder
    gradeScheme?: SortOrder
    gradeValue?: SortOrder
    enrolledAt?: SortOrder
    droppedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
    studentProfileId?: SortOrder
    status?: SortOrder
    gradeScheme?: SortOrder
    gradeValue?: SortOrder
    enrolledAt?: SortOrder
    droppedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type ProfileRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<ProfileRoleCreateWithoutRoleInput, ProfileRoleUncheckedCreateWithoutRoleInput> | ProfileRoleCreateWithoutRoleInput[] | ProfileRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProfileRoleCreateOrConnectWithoutRoleInput | ProfileRoleCreateOrConnectWithoutRoleInput[]
    createMany?: ProfileRoleCreateManyRoleInputEnvelope
    connect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
  }

  export type ProfileRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ProfileRoleCreateWithoutRoleInput, ProfileRoleUncheckedCreateWithoutRoleInput> | ProfileRoleCreateWithoutRoleInput[] | ProfileRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProfileRoleCreateOrConnectWithoutRoleInput | ProfileRoleCreateOrConnectWithoutRoleInput[]
    createMany?: ProfileRoleCreateManyRoleInputEnvelope
    connect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProfileRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ProfileRoleCreateWithoutRoleInput, ProfileRoleUncheckedCreateWithoutRoleInput> | ProfileRoleCreateWithoutRoleInput[] | ProfileRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProfileRoleCreateOrConnectWithoutRoleInput | ProfileRoleCreateOrConnectWithoutRoleInput[]
    upsert?: ProfileRoleUpsertWithWhereUniqueWithoutRoleInput | ProfileRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ProfileRoleCreateManyRoleInputEnvelope
    set?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    disconnect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    delete?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    connect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    update?: ProfileRoleUpdateWithWhereUniqueWithoutRoleInput | ProfileRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ProfileRoleUpdateManyWithWhereWithoutRoleInput | ProfileRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ProfileRoleScalarWhereInput | ProfileRoleScalarWhereInput[]
  }

  export type ProfileRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ProfileRoleCreateWithoutRoleInput, ProfileRoleUncheckedCreateWithoutRoleInput> | ProfileRoleCreateWithoutRoleInput[] | ProfileRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProfileRoleCreateOrConnectWithoutRoleInput | ProfileRoleCreateOrConnectWithoutRoleInput[]
    upsert?: ProfileRoleUpsertWithWhereUniqueWithoutRoleInput | ProfileRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ProfileRoleCreateManyRoleInputEnvelope
    set?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    disconnect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    delete?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    connect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    update?: ProfileRoleUpdateWithWhereUniqueWithoutRoleInput | ProfileRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ProfileRoleUpdateManyWithWhereWithoutRoleInput | ProfileRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ProfileRoleScalarWhereInput | ProfileRoleScalarWhereInput[]
  }

  export type ProfileRoleCreateNestedManyWithoutProfileInput = {
    create?: XOR<ProfileRoleCreateWithoutProfileInput, ProfileRoleUncheckedCreateWithoutProfileInput> | ProfileRoleCreateWithoutProfileInput[] | ProfileRoleUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProfileRoleCreateOrConnectWithoutProfileInput | ProfileRoleCreateOrConnectWithoutProfileInput[]
    createMany?: ProfileRoleCreateManyProfileInputEnvelope
    connect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput> | CourseCreateWithoutCreatedByInput[] | CourseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatedByInput | CourseCreateOrConnectWithoutCreatedByInput[]
    createMany?: CourseCreateManyCreatedByInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type TeachingAssignmentCreateNestedManyWithoutInstructorProfileInput = {
    create?: XOR<TeachingAssignmentCreateWithoutInstructorProfileInput, TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput> | TeachingAssignmentCreateWithoutInstructorProfileInput[] | TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutInstructorProfileInput | TeachingAssignmentCreateOrConnectWithoutInstructorProfileInput[]
    createMany?: TeachingAssignmentCreateManyInstructorProfileInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutStudentProfileInput = {
    create?: XOR<EnrollmentCreateWithoutStudentProfileInput, EnrollmentUncheckedCreateWithoutStudentProfileInput> | EnrollmentCreateWithoutStudentProfileInput[] | EnrollmentUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentProfileInput | EnrollmentCreateOrConnectWithoutStudentProfileInput[]
    createMany?: EnrollmentCreateManyStudentProfileInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type ProfileRoleUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ProfileRoleCreateWithoutProfileInput, ProfileRoleUncheckedCreateWithoutProfileInput> | ProfileRoleCreateWithoutProfileInput[] | ProfileRoleUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProfileRoleCreateOrConnectWithoutProfileInput | ProfileRoleCreateOrConnectWithoutProfileInput[]
    createMany?: ProfileRoleCreateManyProfileInputEnvelope
    connect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput> | CourseCreateWithoutCreatedByInput[] | CourseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatedByInput | CourseCreateOrConnectWithoutCreatedByInput[]
    createMany?: CourseCreateManyCreatedByInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type TeachingAssignmentUncheckedCreateNestedManyWithoutInstructorProfileInput = {
    create?: XOR<TeachingAssignmentCreateWithoutInstructorProfileInput, TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput> | TeachingAssignmentCreateWithoutInstructorProfileInput[] | TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutInstructorProfileInput | TeachingAssignmentCreateOrConnectWithoutInstructorProfileInput[]
    createMany?: TeachingAssignmentCreateManyInstructorProfileInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutStudentProfileInput = {
    create?: XOR<EnrollmentCreateWithoutStudentProfileInput, EnrollmentUncheckedCreateWithoutStudentProfileInput> | EnrollmentCreateWithoutStudentProfileInput[] | EnrollmentUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentProfileInput | EnrollmentCreateOrConnectWithoutStudentProfileInput[]
    createMany?: EnrollmentCreateManyStudentProfileInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumUserLocaleFieldUpdateOperationsInput = {
    set?: $Enums.UserLocale
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileRoleUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ProfileRoleCreateWithoutProfileInput, ProfileRoleUncheckedCreateWithoutProfileInput> | ProfileRoleCreateWithoutProfileInput[] | ProfileRoleUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProfileRoleCreateOrConnectWithoutProfileInput | ProfileRoleCreateOrConnectWithoutProfileInput[]
    upsert?: ProfileRoleUpsertWithWhereUniqueWithoutProfileInput | ProfileRoleUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ProfileRoleCreateManyProfileInputEnvelope
    set?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    disconnect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    delete?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    connect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    update?: ProfileRoleUpdateWithWhereUniqueWithoutProfileInput | ProfileRoleUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ProfileRoleUpdateManyWithWhereWithoutProfileInput | ProfileRoleUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ProfileRoleScalarWhereInput | ProfileRoleScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput> | CourseCreateWithoutCreatedByInput[] | CourseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatedByInput | CourseCreateOrConnectWithoutCreatedByInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCreatedByInput | CourseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CourseCreateManyCreatedByInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCreatedByInput | CourseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCreatedByInput | CourseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type TeachingAssignmentUpdateManyWithoutInstructorProfileNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutInstructorProfileInput, TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput> | TeachingAssignmentCreateWithoutInstructorProfileInput[] | TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutInstructorProfileInput | TeachingAssignmentCreateOrConnectWithoutInstructorProfileInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutInstructorProfileInput | TeachingAssignmentUpsertWithWhereUniqueWithoutInstructorProfileInput[]
    createMany?: TeachingAssignmentCreateManyInstructorProfileInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutInstructorProfileInput | TeachingAssignmentUpdateWithWhereUniqueWithoutInstructorProfileInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutInstructorProfileInput | TeachingAssignmentUpdateManyWithWhereWithoutInstructorProfileInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutStudentProfileNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentProfileInput, EnrollmentUncheckedCreateWithoutStudentProfileInput> | EnrollmentCreateWithoutStudentProfileInput[] | EnrollmentUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentProfileInput | EnrollmentCreateOrConnectWithoutStudentProfileInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentProfileInput | EnrollmentUpsertWithWhereUniqueWithoutStudentProfileInput[]
    createMany?: EnrollmentCreateManyStudentProfileInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentProfileInput | EnrollmentUpdateWithWhereUniqueWithoutStudentProfileInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentProfileInput | EnrollmentUpdateManyWithWhereWithoutStudentProfileInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ProfileRoleUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ProfileRoleCreateWithoutProfileInput, ProfileRoleUncheckedCreateWithoutProfileInput> | ProfileRoleCreateWithoutProfileInput[] | ProfileRoleUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProfileRoleCreateOrConnectWithoutProfileInput | ProfileRoleCreateOrConnectWithoutProfileInput[]
    upsert?: ProfileRoleUpsertWithWhereUniqueWithoutProfileInput | ProfileRoleUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ProfileRoleCreateManyProfileInputEnvelope
    set?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    disconnect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    delete?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    connect?: ProfileRoleWhereUniqueInput | ProfileRoleWhereUniqueInput[]
    update?: ProfileRoleUpdateWithWhereUniqueWithoutProfileInput | ProfileRoleUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ProfileRoleUpdateManyWithWhereWithoutProfileInput | ProfileRoleUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ProfileRoleScalarWhereInput | ProfileRoleScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput> | CourseCreateWithoutCreatedByInput[] | CourseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatedByInput | CourseCreateOrConnectWithoutCreatedByInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCreatedByInput | CourseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CourseCreateManyCreatedByInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCreatedByInput | CourseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCreatedByInput | CourseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutInstructorProfileNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutInstructorProfileInput, TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput> | TeachingAssignmentCreateWithoutInstructorProfileInput[] | TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutInstructorProfileInput | TeachingAssignmentCreateOrConnectWithoutInstructorProfileInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutInstructorProfileInput | TeachingAssignmentUpsertWithWhereUniqueWithoutInstructorProfileInput[]
    createMany?: TeachingAssignmentCreateManyInstructorProfileInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutInstructorProfileInput | TeachingAssignmentUpdateWithWhereUniqueWithoutInstructorProfileInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutInstructorProfileInput | TeachingAssignmentUpdateManyWithWhereWithoutInstructorProfileInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentProfileNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentProfileInput, EnrollmentUncheckedCreateWithoutStudentProfileInput> | EnrollmentCreateWithoutStudentProfileInput[] | EnrollmentUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentProfileInput | EnrollmentCreateOrConnectWithoutStudentProfileInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentProfileInput | EnrollmentUpsertWithWhereUniqueWithoutStudentProfileInput[]
    createMany?: EnrollmentCreateManyStudentProfileInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentProfileInput | EnrollmentUpdateWithWhereUniqueWithoutStudentProfileInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentProfileInput | EnrollmentUpdateManyWithWhereWithoutStudentProfileInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutProfileRolesInput = {
    create?: XOR<ProfileCreateWithoutProfileRolesInput, ProfileUncheckedCreateWithoutProfileRolesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutProfileRolesInput
    connect?: ProfileWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutProfileRolesInput = {
    create?: XOR<RoleCreateWithoutProfileRolesInput, RoleUncheckedCreateWithoutProfileRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutProfileRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutProfileRolesNestedInput = {
    create?: XOR<ProfileCreateWithoutProfileRolesInput, ProfileUncheckedCreateWithoutProfileRolesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutProfileRolesInput
    upsert?: ProfileUpsertWithoutProfileRolesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutProfileRolesInput, ProfileUpdateWithoutProfileRolesInput>, ProfileUncheckedUpdateWithoutProfileRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutProfileRolesNestedInput = {
    create?: XOR<RoleCreateWithoutProfileRolesInput, RoleUncheckedCreateWithoutProfileRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutProfileRolesInput
    upsert?: RoleUpsertWithoutProfileRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutProfileRolesInput, RoleUpdateWithoutProfileRolesInput>, RoleUncheckedUpdateWithoutProfileRolesInput>
  }

  export type CourseCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseOfferingCreateNestedManyWithoutTermInput = {
    create?: XOR<CourseOfferingCreateWithoutTermInput, CourseOfferingUncheckedCreateWithoutTermInput> | CourseOfferingCreateWithoutTermInput[] | CourseOfferingUncheckedCreateWithoutTermInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutTermInput | CourseOfferingCreateOrConnectWithoutTermInput[]
    createMany?: CourseOfferingCreateManyTermInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type CourseOfferingUncheckedCreateNestedManyWithoutTermInput = {
    create?: XOR<CourseOfferingCreateWithoutTermInput, CourseOfferingUncheckedCreateWithoutTermInput> | CourseOfferingCreateWithoutTermInput[] | CourseOfferingUncheckedCreateWithoutTermInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutTermInput | CourseOfferingCreateOrConnectWithoutTermInput[]
    createMany?: CourseOfferingCreateManyTermInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CourseOfferingUpdateManyWithoutTermNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutTermInput, CourseOfferingUncheckedCreateWithoutTermInput> | CourseOfferingCreateWithoutTermInput[] | CourseOfferingUncheckedCreateWithoutTermInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutTermInput | CourseOfferingCreateOrConnectWithoutTermInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutTermInput | CourseOfferingUpsertWithWhereUniqueWithoutTermInput[]
    createMany?: CourseOfferingCreateManyTermInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutTermInput | CourseOfferingUpdateWithWhereUniqueWithoutTermInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutTermInput | CourseOfferingUpdateManyWithWhereWithoutTermInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type CourseOfferingUncheckedUpdateManyWithoutTermNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutTermInput, CourseOfferingUncheckedCreateWithoutTermInput> | CourseOfferingCreateWithoutTermInput[] | CourseOfferingUncheckedCreateWithoutTermInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutTermInput | CourseOfferingCreateOrConnectWithoutTermInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutTermInput | CourseOfferingUpsertWithWhereUniqueWithoutTermInput[]
    createMany?: CourseOfferingCreateManyTermInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutTermInput | CourseOfferingUpdateWithWhereUniqueWithoutTermInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutTermInput | CourseOfferingUpdateManyWithWhereWithoutTermInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutCoursesInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutCreatedCoursesInput = {
    create?: XOR<ProfileCreateWithoutCreatedCoursesInput, ProfileUncheckedCreateWithoutCreatedCoursesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCreatedCoursesInput
    connect?: ProfileWhereUniqueInput
  }

  export type CourseOfferingCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type CourseOfferingUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DepartmentUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    upsert?: DepartmentUpsertWithoutCoursesInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutCoursesInput, DepartmentUpdateWithoutCoursesInput>, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type ProfileUpdateOneWithoutCreatedCoursesNestedInput = {
    create?: XOR<ProfileCreateWithoutCreatedCoursesInput, ProfileUncheckedCreateWithoutCreatedCoursesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCreatedCoursesInput
    upsert?: ProfileUpsertWithoutCreatedCoursesInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCreatedCoursesInput, ProfileUpdateWithoutCreatedCoursesInput>, ProfileUncheckedUpdateWithoutCreatedCoursesInput>
  }

  export type CourseOfferingUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutCourseInput | CourseOfferingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutCourseInput | CourseOfferingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutCourseInput | CourseOfferingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutCourseInput | CourseOfferingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutCourseInput | CourseOfferingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutCourseInput | CourseOfferingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutCourseOfferingsInput = {
    create?: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseOfferingsInput
    connect?: CourseWhereUniqueInput
  }

  export type TermCreateNestedOneWithoutCourseOfferingsInput = {
    create?: XOR<TermCreateWithoutCourseOfferingsInput, TermUncheckedCreateWithoutCourseOfferingsInput>
    connectOrCreate?: TermCreateOrConnectWithoutCourseOfferingsInput
    connect?: TermWhereUniqueInput
  }

  export type TeachingAssignmentCreateNestedManyWithoutCourseOfferingInput = {
    create?: XOR<TeachingAssignmentCreateWithoutCourseOfferingInput, TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput> | TeachingAssignmentCreateWithoutCourseOfferingInput[] | TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutCourseOfferingInput | TeachingAssignmentCreateOrConnectWithoutCourseOfferingInput[]
    createMany?: TeachingAssignmentCreateManyCourseOfferingInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutCourseOfferingInput = {
    create?: XOR<EnrollmentCreateWithoutCourseOfferingInput, EnrollmentUncheckedCreateWithoutCourseOfferingInput> | EnrollmentCreateWithoutCourseOfferingInput[] | EnrollmentUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseOfferingInput | EnrollmentCreateOrConnectWithoutCourseOfferingInput[]
    createMany?: EnrollmentCreateManyCourseOfferingInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type TeachingAssignmentUncheckedCreateNestedManyWithoutCourseOfferingInput = {
    create?: XOR<TeachingAssignmentCreateWithoutCourseOfferingInput, TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput> | TeachingAssignmentCreateWithoutCourseOfferingInput[] | TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutCourseOfferingInput | TeachingAssignmentCreateOrConnectWithoutCourseOfferingInput[]
    createMany?: TeachingAssignmentCreateManyCourseOfferingInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseOfferingInput = {
    create?: XOR<EnrollmentCreateWithoutCourseOfferingInput, EnrollmentUncheckedCreateWithoutCourseOfferingInput> | EnrollmentCreateWithoutCourseOfferingInput[] | EnrollmentUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseOfferingInput | EnrollmentCreateOrConnectWithoutCourseOfferingInput[]
    createMany?: EnrollmentCreateManyCourseOfferingInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EnumModalityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ModalityType
  }

  export type CourseUpdateOneRequiredWithoutCourseOfferingsNestedInput = {
    create?: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseOfferingsInput
    upsert?: CourseUpsertWithoutCourseOfferingsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseOfferingsInput, CourseUpdateWithoutCourseOfferingsInput>, CourseUncheckedUpdateWithoutCourseOfferingsInput>
  }

  export type TermUpdateOneRequiredWithoutCourseOfferingsNestedInput = {
    create?: XOR<TermCreateWithoutCourseOfferingsInput, TermUncheckedCreateWithoutCourseOfferingsInput>
    connectOrCreate?: TermCreateOrConnectWithoutCourseOfferingsInput
    upsert?: TermUpsertWithoutCourseOfferingsInput
    connect?: TermWhereUniqueInput
    update?: XOR<XOR<TermUpdateToOneWithWhereWithoutCourseOfferingsInput, TermUpdateWithoutCourseOfferingsInput>, TermUncheckedUpdateWithoutCourseOfferingsInput>
  }

  export type TeachingAssignmentUpdateManyWithoutCourseOfferingNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutCourseOfferingInput, TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput> | TeachingAssignmentCreateWithoutCourseOfferingInput[] | TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutCourseOfferingInput | TeachingAssignmentCreateOrConnectWithoutCourseOfferingInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutCourseOfferingInput | TeachingAssignmentUpsertWithWhereUniqueWithoutCourseOfferingInput[]
    createMany?: TeachingAssignmentCreateManyCourseOfferingInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutCourseOfferingInput | TeachingAssignmentUpdateWithWhereUniqueWithoutCourseOfferingInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutCourseOfferingInput | TeachingAssignmentUpdateManyWithWhereWithoutCourseOfferingInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutCourseOfferingNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseOfferingInput, EnrollmentUncheckedCreateWithoutCourseOfferingInput> | EnrollmentCreateWithoutCourseOfferingInput[] | EnrollmentUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseOfferingInput | EnrollmentCreateOrConnectWithoutCourseOfferingInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseOfferingInput | EnrollmentUpsertWithWhereUniqueWithoutCourseOfferingInput[]
    createMany?: EnrollmentCreateManyCourseOfferingInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseOfferingInput | EnrollmentUpdateWithWhereUniqueWithoutCourseOfferingInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseOfferingInput | EnrollmentUpdateManyWithWhereWithoutCourseOfferingInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutCourseOfferingNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutCourseOfferingInput, TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput> | TeachingAssignmentCreateWithoutCourseOfferingInput[] | TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutCourseOfferingInput | TeachingAssignmentCreateOrConnectWithoutCourseOfferingInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutCourseOfferingInput | TeachingAssignmentUpsertWithWhereUniqueWithoutCourseOfferingInput[]
    createMany?: TeachingAssignmentCreateManyCourseOfferingInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutCourseOfferingInput | TeachingAssignmentUpdateWithWhereUniqueWithoutCourseOfferingInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutCourseOfferingInput | TeachingAssignmentUpdateManyWithWhereWithoutCourseOfferingInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseOfferingNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseOfferingInput, EnrollmentUncheckedCreateWithoutCourseOfferingInput> | EnrollmentCreateWithoutCourseOfferingInput[] | EnrollmentUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseOfferingInput | EnrollmentCreateOrConnectWithoutCourseOfferingInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseOfferingInput | EnrollmentUpsertWithWhereUniqueWithoutCourseOfferingInput[]
    createMany?: EnrollmentCreateManyCourseOfferingInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseOfferingInput | EnrollmentUpdateWithWhereUniqueWithoutCourseOfferingInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseOfferingInput | EnrollmentUpdateManyWithWhereWithoutCourseOfferingInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CourseOfferingCreateNestedOneWithoutTeachingAssignmentsInput = {
    create?: XOR<CourseOfferingCreateWithoutTeachingAssignmentsInput, CourseOfferingUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutTeachingAssignmentsInput
    connect?: CourseOfferingWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutTeachingAssignmentsInput = {
    create?: XOR<ProfileCreateWithoutTeachingAssignmentsInput, ProfileUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTeachingAssignmentsInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumTeachingRoleFieldUpdateOperationsInput = {
    set?: $Enums.TeachingRole
  }

  export type CourseOfferingUpdateOneRequiredWithoutTeachingAssignmentsNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutTeachingAssignmentsInput, CourseOfferingUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutTeachingAssignmentsInput
    upsert?: CourseOfferingUpsertWithoutTeachingAssignmentsInput
    connect?: CourseOfferingWhereUniqueInput
    update?: XOR<XOR<CourseOfferingUpdateToOneWithWhereWithoutTeachingAssignmentsInput, CourseOfferingUpdateWithoutTeachingAssignmentsInput>, CourseOfferingUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type ProfileUpdateOneRequiredWithoutTeachingAssignmentsNestedInput = {
    create?: XOR<ProfileCreateWithoutTeachingAssignmentsInput, ProfileUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTeachingAssignmentsInput
    upsert?: ProfileUpsertWithoutTeachingAssignmentsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutTeachingAssignmentsInput, ProfileUpdateWithoutTeachingAssignmentsInput>, ProfileUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type CourseOfferingCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseOfferingCreateWithoutEnrollmentsInput, CourseOfferingUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseOfferingWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<ProfileCreateWithoutEnrollmentsInput, ProfileUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutEnrollmentsInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumEnrollmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EnrollmentStatus
  }

  export type CourseOfferingUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutEnrollmentsInput, CourseOfferingUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseOfferingUpsertWithoutEnrollmentsInput
    connect?: CourseOfferingWhereUniqueInput
    update?: XOR<XOR<CourseOfferingUpdateToOneWithWhereWithoutEnrollmentsInput, CourseOfferingUpdateWithoutEnrollmentsInput>, CourseOfferingUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ProfileUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<ProfileCreateWithoutEnrollmentsInput, ProfileUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutEnrollmentsInput
    upsert?: ProfileUpsertWithoutEnrollmentsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutEnrollmentsInput, ProfileUpdateWithoutEnrollmentsInput>, ProfileUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserLocaleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLocale | EnumUserLocaleFieldRefInput<$PrismaModel>
    in?: $Enums.UserLocale[] | ListEnumUserLocaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLocale[] | ListEnumUserLocaleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLocaleFilter<$PrismaModel> | $Enums.UserLocale
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserLocaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLocale | EnumUserLocaleFieldRefInput<$PrismaModel>
    in?: $Enums.UserLocale[] | ListEnumUserLocaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLocale[] | ListEnumUserLocaleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLocaleWithAggregatesFilter<$PrismaModel> | $Enums.UserLocale
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserLocaleFilter<$PrismaModel>
    _max?: NestedEnumUserLocaleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumModalityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ModalityType | EnumModalityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModalityType[] | ListEnumModalityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModalityType[] | ListEnumModalityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModalityTypeFilter<$PrismaModel> | $Enums.ModalityType
  }

  export type NestedEnumModalityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModalityType | EnumModalityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModalityType[] | ListEnumModalityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModalityType[] | ListEnumModalityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModalityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ModalityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModalityTypeFilter<$PrismaModel>
    _max?: NestedEnumModalityTypeFilter<$PrismaModel>
  }

  export type NestedEnumTeachingRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingRole | EnumTeachingRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingRole[] | ListEnumTeachingRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingRole[] | ListEnumTeachingRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingRoleFilter<$PrismaModel> | $Enums.TeachingRole
  }

  export type NestedEnumTeachingRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingRole | EnumTeachingRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingRole[] | ListEnumTeachingRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingRole[] | ListEnumTeachingRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeachingRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeachingRoleFilter<$PrismaModel>
    _max?: NestedEnumTeachingRoleFilter<$PrismaModel>
  }

  export type NestedEnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type ProfileRoleCreateWithoutRoleInput = {
    id?: string
    orgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile: ProfileCreateNestedOneWithoutProfileRolesInput
  }

  export type ProfileRoleUncheckedCreateWithoutRoleInput = {
    id?: string
    profileId: string
    orgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileRoleCreateOrConnectWithoutRoleInput = {
    where: ProfileRoleWhereUniqueInput
    create: XOR<ProfileRoleCreateWithoutRoleInput, ProfileRoleUncheckedCreateWithoutRoleInput>
  }

  export type ProfileRoleCreateManyRoleInputEnvelope = {
    data: ProfileRoleCreateManyRoleInput | ProfileRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ProfileRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: ProfileRoleWhereUniqueInput
    update: XOR<ProfileRoleUpdateWithoutRoleInput, ProfileRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<ProfileRoleCreateWithoutRoleInput, ProfileRoleUncheckedCreateWithoutRoleInput>
  }

  export type ProfileRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: ProfileRoleWhereUniqueInput
    data: XOR<ProfileRoleUpdateWithoutRoleInput, ProfileRoleUncheckedUpdateWithoutRoleInput>
  }

  export type ProfileRoleUpdateManyWithWhereWithoutRoleInput = {
    where: ProfileRoleScalarWhereInput
    data: XOR<ProfileRoleUpdateManyMutationInput, ProfileRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type ProfileRoleScalarWhereInput = {
    AND?: ProfileRoleScalarWhereInput | ProfileRoleScalarWhereInput[]
    OR?: ProfileRoleScalarWhereInput[]
    NOT?: ProfileRoleScalarWhereInput | ProfileRoleScalarWhereInput[]
    id?: StringFilter<"ProfileRole"> | string
    profileId?: StringFilter<"ProfileRole"> | string
    roleId?: StringFilter<"ProfileRole"> | string
    orgId?: StringNullableFilter<"ProfileRole"> | string | null
    createdAt?: DateTimeFilter<"ProfileRole"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileRole"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ProfileRole"> | Date | string | null
  }

  export type ProfileRoleCreateWithoutProfileInput = {
    id?: string
    orgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutProfileRolesInput
  }

  export type ProfileRoleUncheckedCreateWithoutProfileInput = {
    id?: string
    roleId: string
    orgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileRoleCreateOrConnectWithoutProfileInput = {
    where: ProfileRoleWhereUniqueInput
    create: XOR<ProfileRoleCreateWithoutProfileInput, ProfileRoleUncheckedCreateWithoutProfileInput>
  }

  export type ProfileRoleCreateManyProfileInputEnvelope = {
    data: ProfileRoleCreateManyProfileInput | ProfileRoleCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutCreatedByInput = {
    id?: string
    orgId: string
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutCoursesInput
    courseOfferings?: CourseOfferingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCreatedByInput = {
    id?: string
    orgId: string
    departmentId?: string | null
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseOfferings?: CourseOfferingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCreatedByInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput>
  }

  export type CourseCreateManyCreatedByInputEnvelope = {
    data: CourseCreateManyCreatedByInput | CourseCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TeachingAssignmentCreateWithoutInstructorProfileInput = {
    id?: string
    role?: $Enums.TeachingRole
    createdAt?: Date | string
    courseOffering: CourseOfferingCreateNestedOneWithoutTeachingAssignmentsInput
  }

  export type TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput = {
    id?: string
    courseOfferingId: string
    role?: $Enums.TeachingRole
    createdAt?: Date | string
  }

  export type TeachingAssignmentCreateOrConnectWithoutInstructorProfileInput = {
    where: TeachingAssignmentWhereUniqueInput
    create: XOR<TeachingAssignmentCreateWithoutInstructorProfileInput, TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput>
  }

  export type TeachingAssignmentCreateManyInstructorProfileInputEnvelope = {
    data: TeachingAssignmentCreateManyInstructorProfileInput | TeachingAssignmentCreateManyInstructorProfileInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutStudentProfileInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    gradeScheme?: string | null
    gradeValue?: string | null
    enrolledAt?: Date | string
    droppedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseOffering: CourseOfferingCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutStudentProfileInput = {
    id?: string
    courseOfferingId: string
    status?: $Enums.EnrollmentStatus
    gradeScheme?: string | null
    gradeValue?: string | null
    enrolledAt?: Date | string
    droppedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutStudentProfileInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutStudentProfileInput, EnrollmentUncheckedCreateWithoutStudentProfileInput>
  }

  export type EnrollmentCreateManyStudentProfileInputEnvelope = {
    data: EnrollmentCreateManyStudentProfileInput | EnrollmentCreateManyStudentProfileInput[]
    skipDuplicates?: boolean
  }

  export type ProfileRoleUpsertWithWhereUniqueWithoutProfileInput = {
    where: ProfileRoleWhereUniqueInput
    update: XOR<ProfileRoleUpdateWithoutProfileInput, ProfileRoleUncheckedUpdateWithoutProfileInput>
    create: XOR<ProfileRoleCreateWithoutProfileInput, ProfileRoleUncheckedCreateWithoutProfileInput>
  }

  export type ProfileRoleUpdateWithWhereUniqueWithoutProfileInput = {
    where: ProfileRoleWhereUniqueInput
    data: XOR<ProfileRoleUpdateWithoutProfileInput, ProfileRoleUncheckedUpdateWithoutProfileInput>
  }

  export type ProfileRoleUpdateManyWithWhereWithoutProfileInput = {
    where: ProfileRoleScalarWhereInput
    data: XOR<ProfileRoleUpdateManyMutationInput, ProfileRoleUncheckedUpdateManyWithoutProfileInput>
  }

  export type CourseUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCreatedByInput, CourseUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCreatedByInput, CourseUncheckedUpdateWithoutCreatedByInput>
  }

  export type CourseUpdateManyWithWhereWithoutCreatedByInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    orgId?: StringFilter<"Course"> | string
    departmentId?: StringNullableFilter<"Course"> | string | null
    code?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    creditHours?: IntNullableFilter<"Course"> | number | null
    createdById?: StringNullableFilter<"Course"> | string | null
    isActive?: BoolFilter<"Course"> | boolean
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type TeachingAssignmentUpsertWithWhereUniqueWithoutInstructorProfileInput = {
    where: TeachingAssignmentWhereUniqueInput
    update: XOR<TeachingAssignmentUpdateWithoutInstructorProfileInput, TeachingAssignmentUncheckedUpdateWithoutInstructorProfileInput>
    create: XOR<TeachingAssignmentCreateWithoutInstructorProfileInput, TeachingAssignmentUncheckedCreateWithoutInstructorProfileInput>
  }

  export type TeachingAssignmentUpdateWithWhereUniqueWithoutInstructorProfileInput = {
    where: TeachingAssignmentWhereUniqueInput
    data: XOR<TeachingAssignmentUpdateWithoutInstructorProfileInput, TeachingAssignmentUncheckedUpdateWithoutInstructorProfileInput>
  }

  export type TeachingAssignmentUpdateManyWithWhereWithoutInstructorProfileInput = {
    where: TeachingAssignmentScalarWhereInput
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyWithoutInstructorProfileInput>
  }

  export type TeachingAssignmentScalarWhereInput = {
    AND?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
    OR?: TeachingAssignmentScalarWhereInput[]
    NOT?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
    id?: StringFilter<"TeachingAssignment"> | string
    courseOfferingId?: StringFilter<"TeachingAssignment"> | string
    instructorProfileId?: StringFilter<"TeachingAssignment"> | string
    role?: EnumTeachingRoleFilter<"TeachingAssignment"> | $Enums.TeachingRole
    createdAt?: DateTimeFilter<"TeachingAssignment"> | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutStudentProfileInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutStudentProfileInput, EnrollmentUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<EnrollmentCreateWithoutStudentProfileInput, EnrollmentUncheckedCreateWithoutStudentProfileInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutStudentProfileInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutStudentProfileInput, EnrollmentUncheckedUpdateWithoutStudentProfileInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutStudentProfileInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutStudentProfileInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    courseOfferingId?: StringFilter<"Enrollment"> | string
    studentProfileId?: StringFilter<"Enrollment"> | string
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    gradeScheme?: StringNullableFilter<"Enrollment"> | string | null
    gradeValue?: StringNullableFilter<"Enrollment"> | string | null
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    droppedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
  }

  export type ProfileCreateWithoutProfileRolesInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdCourses?: CourseCreateNestedManyWithoutCreatedByInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutInstructorProfileInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentProfileInput
  }

  export type ProfileUncheckedCreateWithoutProfileRolesInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdCourses?: CourseUncheckedCreateNestedManyWithoutCreatedByInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutInstructorProfileInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentProfileInput
  }

  export type ProfileCreateOrConnectWithoutProfileRolesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutProfileRolesInput, ProfileUncheckedCreateWithoutProfileRolesInput>
  }

  export type RoleCreateWithoutProfileRolesInput = {
    id?: string
    key: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleUncheckedCreateWithoutProfileRolesInput = {
    id?: string
    key: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleCreateOrConnectWithoutProfileRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutProfileRolesInput, RoleUncheckedCreateWithoutProfileRolesInput>
  }

  export type ProfileUpsertWithoutProfileRolesInput = {
    update: XOR<ProfileUpdateWithoutProfileRolesInput, ProfileUncheckedUpdateWithoutProfileRolesInput>
    create: XOR<ProfileCreateWithoutProfileRolesInput, ProfileUncheckedCreateWithoutProfileRolesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutProfileRolesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutProfileRolesInput, ProfileUncheckedUpdateWithoutProfileRolesInput>
  }

  export type ProfileUpdateWithoutProfileRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdCourses?: CourseUpdateManyWithoutCreatedByNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutInstructorProfileNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutProfileRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdCourses?: CourseUncheckedUpdateManyWithoutCreatedByNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutInstructorProfileNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentProfileNestedInput
  }

  export type RoleUpsertWithoutProfileRolesInput = {
    update: XOR<RoleUpdateWithoutProfileRolesInput, RoleUncheckedUpdateWithoutProfileRolesInput>
    create: XOR<RoleCreateWithoutProfileRolesInput, RoleUncheckedCreateWithoutProfileRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutProfileRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutProfileRolesInput, RoleUncheckedUpdateWithoutProfileRolesInput>
  }

  export type RoleUpdateWithoutProfileRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateWithoutProfileRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseCreateWithoutDepartmentInput = {
    id?: string
    orgId: string
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: ProfileCreateNestedOneWithoutCreatedCoursesInput
    courseOfferings?: CourseOfferingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutDepartmentInput = {
    id?: string
    orgId: string
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    createdById?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseOfferings?: CourseOfferingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseCreateManyDepartmentInputEnvelope = {
    data: CourseCreateManyDepartmentInput | CourseCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
  }

  export type CourseUpdateManyWithWhereWithoutDepartmentInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type CourseOfferingCreateWithoutTermInput = {
    id?: string
    orgId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseOfferingsInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutCourseOfferingInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateWithoutTermInput = {
    id?: string
    orgId: string
    courseId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutCourseOfferingInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingCreateOrConnectWithoutTermInput = {
    where: CourseOfferingWhereUniqueInput
    create: XOR<CourseOfferingCreateWithoutTermInput, CourseOfferingUncheckedCreateWithoutTermInput>
  }

  export type CourseOfferingCreateManyTermInputEnvelope = {
    data: CourseOfferingCreateManyTermInput | CourseOfferingCreateManyTermInput[]
    skipDuplicates?: boolean
  }

  export type CourseOfferingUpsertWithWhereUniqueWithoutTermInput = {
    where: CourseOfferingWhereUniqueInput
    update: XOR<CourseOfferingUpdateWithoutTermInput, CourseOfferingUncheckedUpdateWithoutTermInput>
    create: XOR<CourseOfferingCreateWithoutTermInput, CourseOfferingUncheckedCreateWithoutTermInput>
  }

  export type CourseOfferingUpdateWithWhereUniqueWithoutTermInput = {
    where: CourseOfferingWhereUniqueInput
    data: XOR<CourseOfferingUpdateWithoutTermInput, CourseOfferingUncheckedUpdateWithoutTermInput>
  }

  export type CourseOfferingUpdateManyWithWhereWithoutTermInput = {
    where: CourseOfferingScalarWhereInput
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyWithoutTermInput>
  }

  export type CourseOfferingScalarWhereInput = {
    AND?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
    OR?: CourseOfferingScalarWhereInput[]
    NOT?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
    id?: StringFilter<"CourseOffering"> | string
    orgId?: StringFilter<"CourseOffering"> | string
    courseId?: StringFilter<"CourseOffering"> | string
    termId?: StringFilter<"CourseOffering"> | string
    sectionCode?: StringFilter<"CourseOffering"> | string
    modality?: EnumModalityTypeFilter<"CourseOffering"> | $Enums.ModalityType
    capacity?: IntFilter<"CourseOffering"> | number
    waitlistCapacity?: IntFilter<"CourseOffering"> | number
    isPublished?: BoolFilter<"CourseOffering"> | boolean
    createdAt?: DateTimeFilter<"CourseOffering"> | Date | string
    updatedAt?: DateTimeFilter<"CourseOffering"> | Date | string
  }

  export type DepartmentCreateWithoutCoursesInput = {
    id?: string
    orgId: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUncheckedCreateWithoutCoursesInput = {
    id?: string
    orgId: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutCoursesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
  }

  export type ProfileCreateWithoutCreatedCoursesInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileRoles?: ProfileRoleCreateNestedManyWithoutProfileInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutInstructorProfileInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentProfileInput
  }

  export type ProfileUncheckedCreateWithoutCreatedCoursesInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileRoles?: ProfileRoleUncheckedCreateNestedManyWithoutProfileInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutInstructorProfileInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentProfileInput
  }

  export type ProfileCreateOrConnectWithoutCreatedCoursesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCreatedCoursesInput, ProfileUncheckedCreateWithoutCreatedCoursesInput>
  }

  export type CourseOfferingCreateWithoutCourseInput = {
    id?: string
    orgId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    term: TermCreateNestedOneWithoutCourseOfferingsInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutCourseOfferingInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateWithoutCourseInput = {
    id?: string
    orgId: string
    termId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutCourseOfferingInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingCreateOrConnectWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    create: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput>
  }

  export type CourseOfferingCreateManyCourseInputEnvelope = {
    data: CourseOfferingCreateManyCourseInput | CourseOfferingCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutCoursesInput = {
    update: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutCoursesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type DepartmentUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUpsertWithoutCreatedCoursesInput = {
    update: XOR<ProfileUpdateWithoutCreatedCoursesInput, ProfileUncheckedUpdateWithoutCreatedCoursesInput>
    create: XOR<ProfileCreateWithoutCreatedCoursesInput, ProfileUncheckedCreateWithoutCreatedCoursesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCreatedCoursesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCreatedCoursesInput, ProfileUncheckedUpdateWithoutCreatedCoursesInput>
  }

  export type ProfileUpdateWithoutCreatedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileRoles?: ProfileRoleUpdateManyWithoutProfileNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutInstructorProfileNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutCreatedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileRoles?: ProfileRoleUncheckedUpdateManyWithoutProfileNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutInstructorProfileNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentProfileNestedInput
  }

  export type CourseOfferingUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    update: XOR<CourseOfferingUpdateWithoutCourseInput, CourseOfferingUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput>
  }

  export type CourseOfferingUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    data: XOR<CourseOfferingUpdateWithoutCourseInput, CourseOfferingUncheckedUpdateWithoutCourseInput>
  }

  export type CourseOfferingUpdateManyWithWhereWithoutCourseInput = {
    where: CourseOfferingScalarWhereInput
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutCourseOfferingsInput = {
    id?: string
    orgId: string
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutCoursesInput
    createdBy?: ProfileCreateNestedOneWithoutCreatedCoursesInput
  }

  export type CourseUncheckedCreateWithoutCourseOfferingsInput = {
    id?: string
    orgId: string
    departmentId?: string | null
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    createdById?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutCourseOfferingsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
  }

  export type TermCreateWithoutCourseOfferingsInput = {
    id?: string
    orgId: string
    code: string
    name: string
    dateStart: Date | string
    dateEnd: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermUncheckedCreateWithoutCourseOfferingsInput = {
    id?: string
    orgId: string
    code: string
    name: string
    dateStart: Date | string
    dateEnd: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermCreateOrConnectWithoutCourseOfferingsInput = {
    where: TermWhereUniqueInput
    create: XOR<TermCreateWithoutCourseOfferingsInput, TermUncheckedCreateWithoutCourseOfferingsInput>
  }

  export type TeachingAssignmentCreateWithoutCourseOfferingInput = {
    id?: string
    role?: $Enums.TeachingRole
    createdAt?: Date | string
    instructorProfile: ProfileCreateNestedOneWithoutTeachingAssignmentsInput
  }

  export type TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput = {
    id?: string
    instructorProfileId: string
    role?: $Enums.TeachingRole
    createdAt?: Date | string
  }

  export type TeachingAssignmentCreateOrConnectWithoutCourseOfferingInput = {
    where: TeachingAssignmentWhereUniqueInput
    create: XOR<TeachingAssignmentCreateWithoutCourseOfferingInput, TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput>
  }

  export type TeachingAssignmentCreateManyCourseOfferingInputEnvelope = {
    data: TeachingAssignmentCreateManyCourseOfferingInput | TeachingAssignmentCreateManyCourseOfferingInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutCourseOfferingInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    gradeScheme?: string | null
    gradeValue?: string | null
    enrolledAt?: Date | string
    droppedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentProfile: ProfileCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseOfferingInput = {
    id?: string
    studentProfileId: string
    status?: $Enums.EnrollmentStatus
    gradeScheme?: string | null
    gradeValue?: string | null
    enrolledAt?: Date | string
    droppedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutCourseOfferingInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseOfferingInput, EnrollmentUncheckedCreateWithoutCourseOfferingInput>
  }

  export type EnrollmentCreateManyCourseOfferingInputEnvelope = {
    data: EnrollmentCreateManyCourseOfferingInput | EnrollmentCreateManyCourseOfferingInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutCourseOfferingsInput = {
    update: XOR<CourseUpdateWithoutCourseOfferingsInput, CourseUncheckedUpdateWithoutCourseOfferingsInput>
    create: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseOfferingsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseOfferingsInput, CourseUncheckedUpdateWithoutCourseOfferingsInput>
  }

  export type CourseUpdateWithoutCourseOfferingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutCoursesNestedInput
    createdBy?: ProfileUpdateOneWithoutCreatedCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseOfferingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermUpsertWithoutCourseOfferingsInput = {
    update: XOR<TermUpdateWithoutCourseOfferingsInput, TermUncheckedUpdateWithoutCourseOfferingsInput>
    create: XOR<TermCreateWithoutCourseOfferingsInput, TermUncheckedCreateWithoutCourseOfferingsInput>
    where?: TermWhereInput
  }

  export type TermUpdateToOneWithWhereWithoutCourseOfferingsInput = {
    where?: TermWhereInput
    data: XOR<TermUpdateWithoutCourseOfferingsInput, TermUncheckedUpdateWithoutCourseOfferingsInput>
  }

  export type TermUpdateWithoutCourseOfferingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermUncheckedUpdateWithoutCourseOfferingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentUpsertWithWhereUniqueWithoutCourseOfferingInput = {
    where: TeachingAssignmentWhereUniqueInput
    update: XOR<TeachingAssignmentUpdateWithoutCourseOfferingInput, TeachingAssignmentUncheckedUpdateWithoutCourseOfferingInput>
    create: XOR<TeachingAssignmentCreateWithoutCourseOfferingInput, TeachingAssignmentUncheckedCreateWithoutCourseOfferingInput>
  }

  export type TeachingAssignmentUpdateWithWhereUniqueWithoutCourseOfferingInput = {
    where: TeachingAssignmentWhereUniqueInput
    data: XOR<TeachingAssignmentUpdateWithoutCourseOfferingInput, TeachingAssignmentUncheckedUpdateWithoutCourseOfferingInput>
  }

  export type TeachingAssignmentUpdateManyWithWhereWithoutCourseOfferingInput = {
    where: TeachingAssignmentScalarWhereInput
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyWithoutCourseOfferingInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseOfferingInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseOfferingInput, EnrollmentUncheckedUpdateWithoutCourseOfferingInput>
    create: XOR<EnrollmentCreateWithoutCourseOfferingInput, EnrollmentUncheckedCreateWithoutCourseOfferingInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseOfferingInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseOfferingInput, EnrollmentUncheckedUpdateWithoutCourseOfferingInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseOfferingInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseOfferingInput>
  }

  export type CourseOfferingCreateWithoutTeachingAssignmentsInput = {
    id?: string
    orgId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseOfferingsInput
    term: TermCreateNestedOneWithoutCourseOfferingsInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateWithoutTeachingAssignmentsInput = {
    id?: string
    orgId: string
    courseId: string
    termId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingCreateOrConnectWithoutTeachingAssignmentsInput = {
    where: CourseOfferingWhereUniqueInput
    create: XOR<CourseOfferingCreateWithoutTeachingAssignmentsInput, CourseOfferingUncheckedCreateWithoutTeachingAssignmentsInput>
  }

  export type ProfileCreateWithoutTeachingAssignmentsInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileRoles?: ProfileRoleCreateNestedManyWithoutProfileInput
    createdCourses?: CourseCreateNestedManyWithoutCreatedByInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentProfileInput
  }

  export type ProfileUncheckedCreateWithoutTeachingAssignmentsInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileRoles?: ProfileRoleUncheckedCreateNestedManyWithoutProfileInput
    createdCourses?: CourseUncheckedCreateNestedManyWithoutCreatedByInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentProfileInput
  }

  export type ProfileCreateOrConnectWithoutTeachingAssignmentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutTeachingAssignmentsInput, ProfileUncheckedCreateWithoutTeachingAssignmentsInput>
  }

  export type CourseOfferingUpsertWithoutTeachingAssignmentsInput = {
    update: XOR<CourseOfferingUpdateWithoutTeachingAssignmentsInput, CourseOfferingUncheckedUpdateWithoutTeachingAssignmentsInput>
    create: XOR<CourseOfferingCreateWithoutTeachingAssignmentsInput, CourseOfferingUncheckedCreateWithoutTeachingAssignmentsInput>
    where?: CourseOfferingWhereInput
  }

  export type CourseOfferingUpdateToOneWithWhereWithoutTeachingAssignmentsInput = {
    where?: CourseOfferingWhereInput
    data: XOR<CourseOfferingUpdateWithoutTeachingAssignmentsInput, CourseOfferingUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type CourseOfferingUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseOfferingsNestedInput
    term?: TermUpdateOneRequiredWithoutCourseOfferingsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    termId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseOfferingNestedInput
  }

  export type ProfileUpsertWithoutTeachingAssignmentsInput = {
    update: XOR<ProfileUpdateWithoutTeachingAssignmentsInput, ProfileUncheckedUpdateWithoutTeachingAssignmentsInput>
    create: XOR<ProfileCreateWithoutTeachingAssignmentsInput, ProfileUncheckedCreateWithoutTeachingAssignmentsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutTeachingAssignmentsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutTeachingAssignmentsInput, ProfileUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type ProfileUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileRoles?: ProfileRoleUpdateManyWithoutProfileNestedInput
    createdCourses?: CourseUpdateManyWithoutCreatedByNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileRoles?: ProfileRoleUncheckedUpdateManyWithoutProfileNestedInput
    createdCourses?: CourseUncheckedUpdateManyWithoutCreatedByNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentProfileNestedInput
  }

  export type CourseOfferingCreateWithoutEnrollmentsInput = {
    id?: string
    orgId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseOfferingsInput
    term: TermCreateNestedOneWithoutCourseOfferingsInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    orgId: string
    courseId: string
    termId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseOfferingWhereUniqueInput
    create: XOR<CourseOfferingCreateWithoutEnrollmentsInput, CourseOfferingUncheckedCreateWithoutEnrollmentsInput>
  }

  export type ProfileCreateWithoutEnrollmentsInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileRoles?: ProfileRoleCreateNestedManyWithoutProfileInput
    createdCourses?: CourseCreateNestedManyWithoutCreatedByInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutInstructorProfileInput
  }

  export type ProfileUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    orgId?: string | null
    email: string
    firstName: string
    lastName: string
    username?: string | null
    avatarUrl?: string | null
    status?: $Enums.UserStatus
    locale?: $Enums.UserLocale
    emailVerifiedAt?: Date | string | null
    failedLoginAttempts?: number
    lockedUntil?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileRoles?: ProfileRoleUncheckedCreateNestedManyWithoutProfileInput
    createdCourses?: CourseUncheckedCreateNestedManyWithoutCreatedByInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutInstructorProfileInput
  }

  export type ProfileCreateOrConnectWithoutEnrollmentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutEnrollmentsInput, ProfileUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseOfferingUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseOfferingUpdateWithoutEnrollmentsInput, CourseOfferingUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseOfferingCreateWithoutEnrollmentsInput, CourseOfferingUncheckedCreateWithoutEnrollmentsInput>
    where?: CourseOfferingWhereInput
  }

  export type CourseOfferingUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: CourseOfferingWhereInput
    data: XOR<CourseOfferingUpdateWithoutEnrollmentsInput, CourseOfferingUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseOfferingUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseOfferingsNestedInput
    term?: TermUpdateOneRequiredWithoutCourseOfferingsNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    termId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutCourseOfferingNestedInput
  }

  export type ProfileUpsertWithoutEnrollmentsInput = {
    update: XOR<ProfileUpdateWithoutEnrollmentsInput, ProfileUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<ProfileCreateWithoutEnrollmentsInput, ProfileUncheckedCreateWithoutEnrollmentsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutEnrollmentsInput, ProfileUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ProfileUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileRoles?: ProfileRoleUpdateManyWithoutProfileNestedInput
    createdCourses?: CourseUpdateManyWithoutCreatedByNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutInstructorProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    locale?: EnumUserLocaleFieldUpdateOperationsInput | $Enums.UserLocale
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileRoles?: ProfileRoleUncheckedUpdateManyWithoutProfileNestedInput
    createdCourses?: CourseUncheckedUpdateManyWithoutCreatedByNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutInstructorProfileNestedInput
  }

  export type ProfileRoleCreateManyRoleInput = {
    id?: string
    profileId: string
    orgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileRoleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUpdateOneRequiredWithoutProfileRolesNestedInput
  }

  export type ProfileRoleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileRoleCreateManyProfileInput = {
    id?: string
    roleId: string
    orgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CourseCreateManyCreatedByInput = {
    id?: string
    orgId: string
    departmentId?: string | null
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAssignmentCreateManyInstructorProfileInput = {
    id?: string
    courseOfferingId: string
    role?: $Enums.TeachingRole
    createdAt?: Date | string
  }

  export type EnrollmentCreateManyStudentProfileInput = {
    id?: string
    courseOfferingId: string
    status?: $Enums.EnrollmentStatus
    gradeScheme?: string | null
    gradeValue?: string | null
    enrolledAt?: Date | string
    droppedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileRoleUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutProfileRolesNestedInput
  }

  export type ProfileRoleUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileRoleUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutCoursesNestedInput
    courseOfferings?: CourseOfferingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseOfferings?: CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentUpdateWithoutInstructorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeachingRoleFieldUpdateOperationsInput | $Enums.TeachingRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseOffering?: CourseOfferingUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
  }

  export type TeachingAssignmentUncheckedUpdateWithoutInstructorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseOfferingId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeachingRoleFieldUpdateOperationsInput | $Enums.TeachingRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutInstructorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseOfferingId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeachingRoleFieldUpdateOperationsInput | $Enums.TeachingRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    gradeScheme?: NullableStringFieldUpdateOperationsInput | string | null
    gradeValue?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    droppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseOffering?: CourseOfferingUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseOfferingId?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    gradeScheme?: NullableStringFieldUpdateOperationsInput | string | null
    gradeValue?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    droppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseOfferingId?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    gradeScheme?: NullableStringFieldUpdateOperationsInput | string | null
    gradeValue?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    droppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyDepartmentInput = {
    id?: string
    orgId: string
    code: string
    title: string
    description?: string | null
    creditHours?: number | null
    createdById?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: ProfileUpdateOneWithoutCreatedCoursesNestedInput
    courseOfferings?: CourseOfferingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseOfferings?: CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creditHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseOfferingCreateManyTermInput = {
    id?: string
    orgId: string
    courseId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseOfferingUpdateWithoutTermInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseOfferingsNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutCourseOfferingNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateWithoutTermInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutCourseOfferingNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateManyWithoutTermInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseOfferingCreateManyCourseInput = {
    id?: string
    orgId: string
    termId: string
    sectionCode: string
    modality?: $Enums.ModalityType
    capacity?: number
    waitlistCapacity?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseOfferingUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    term?: TermUpdateOneRequiredWithoutCourseOfferingsNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutCourseOfferingNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    termId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutCourseOfferingNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    termId?: StringFieldUpdateOperationsInput | string
    sectionCode?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityTypeFieldUpdateOperationsInput | $Enums.ModalityType
    capacity?: IntFieldUpdateOperationsInput | number
    waitlistCapacity?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentCreateManyCourseOfferingInput = {
    id?: string
    instructorProfileId: string
    role?: $Enums.TeachingRole
    createdAt?: Date | string
  }

  export type EnrollmentCreateManyCourseOfferingInput = {
    id?: string
    studentProfileId: string
    status?: $Enums.EnrollmentStatus
    gradeScheme?: string | null
    gradeValue?: string | null
    enrolledAt?: Date | string
    droppedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeachingAssignmentUpdateWithoutCourseOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeachingRoleFieldUpdateOperationsInput | $Enums.TeachingRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: ProfileUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
  }

  export type TeachingAssignmentUncheckedUpdateWithoutCourseOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorProfileId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeachingRoleFieldUpdateOperationsInput | $Enums.TeachingRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutCourseOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorProfileId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeachingRoleFieldUpdateOperationsInput | $Enums.TeachingRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutCourseOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    gradeScheme?: NullableStringFieldUpdateOperationsInput | string | null
    gradeValue?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    droppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: ProfileUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    gradeScheme?: NullableStringFieldUpdateOperationsInput | string | null
    gradeValue?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    droppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    gradeScheme?: NullableStringFieldUpdateOperationsInput | string | null
    gradeValue?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    droppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}