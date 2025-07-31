/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface User {
  id?: string;
  username: string;
  password: string;
  authorityList?: ("ADMIN" | "USER")[];
}

export type AvatarDecorationData = object;

export type Collectibles = object;

export type Colors = object;

export interface DiscordEmoji {
  /** @format int64 */
  id?: number;
  name?: string;
  roles?: DiscordRole[];
  user?: DiscordUser;
  requiredColons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}

export interface DiscordGuild {
  /** @format int64 */
  id?: number;
  name?: string;
  icon?: string;
  iconHash?: string;
  splash?: string;
  discoverySplash?: string;
  owner?: boolean;
  /** @format int64 */
  ownerId?: number;
  permissions?: string;
  regions?: string;
  /** @format int64 */
  afkChannelId?: number;
  /** @format int32 */
  afkTimeout?: number;
  widgetEnable?: boolean;
  /** @format int64 */
  widgetChannelId?: number;
  /** @format int32 */
  verificationLevel?: number;
  /** @format int32 */
  defaultMessageNotification?: number;
  /** @format int32 */
  explicitContentFilter?: number;
  roles?: DiscordRole[];
  emojis?: DiscordEmoji[];
  features?: string[];
  /** @format int32 */
  mfaLevel?: number;
  /** @format int64 */
  applicationId?: number;
  /** @format int64 */
  systemChannelId?: number;
  /** @format int64 */
  rolesChannelId?: number;
  /** @format int32 */
  maxPresences?: number;
  /** @format int32 */
  maxMembers?: number;
  vanityUrlCode?: string;
  description?: string;
  banner?: string;
  /** @format int32 */
  premiumTier?: number;
  /** @format int32 */
  preferredLocale?: number;
  /** @format int64 */
  publicUpdatesChannelId?: number;
  /** @format int32 */
  maxVideoChannelUsers?: number;
  /** @format int32 */
  maxStageVideoChannelUsers?: number;
  /** @format int32 */
  approximateMemberCount?: number;
  /** @format int32 */
  approximatePresenceCount?: number;
  welcomeScreen?: DiscordWelcomeScreen;
  /** @format int32 */
  nsfwLevel?: number;
  stickers?: DiscordSticker[];
  premiumProgressBarEnabled?: boolean;
  /** @format int64 */
  safetyAlertsChannelId?: number;
  incidentsData?: IncidentsData;
}

export interface DiscordRole {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int32 */
  color?: number;
  colors?: Colors;
  hoist?: boolean;
  icon?: string;
  unicodeEmoji?: string;
  /** @format int32 */
  position?: number;
  permissions?: string;
  managed?: boolean;
  mentionable?: boolean;
  tags?: Tags;
  /** @format int32 */
  flags?: number;
}

export interface DiscordSticker {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  packId?: number;
  name?: string;
  description?: string;
  tags?: string;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  formatType?: number;
  available?: boolean;
  /** @format int64 */
  guildId?: number;
  user?: DiscordUser;
  /** @format int32 */
  sortValue?: number;
}

export interface DiscordUser {
  /** @format int64 */
  id?: number;
  username?: string;
  discriminator?: string;
  globalName?: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfaEnabled?: boolean;
  banner?: string;
  /** @format int32 */
  accentColor?: number;
  locale?: string;
  verified?: boolean;
  email?: string;
  /** @format int32 */
  flags?: number;
  /** @format int32 */
  premium_type?: number;
  /** @format int32 */
  public_flags?: number;
  avatarDecorationData?: AvatarDecorationData;
  collectibles?: Collectibles;
  primaryGuild?: PrimaryGuild;
}

export interface DiscordWelcomeScreen {
  description?: string;
  welcomeScreenChannels?: WelcomeScreenChannel[];
}

export type IncidentsData = object;

export type PrimaryGuild = object;

export type Tags = object;

export type WelcomeScreenChannel = object;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8080";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title OpenAPI definition
 * @version v0
 * @baseUrl http://localhost:8080
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags auth-controller
     * @name GetUsers
     * @request GET:/auth/user
     */
    getUsers: (params: RequestParams = {}) =>
      this.request<AvatarDecorationData, any>({
        path: `/auth/user`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth-controller
     * @name CreateUser
     * @request POST:/auth/user
     */
    createUser: (data: User, params: RequestParams = {}) =>
      this.request<AvatarDecorationData, any>({
        path: `/auth/user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth-controller
     * @name Home
     * @request GET:/auth/hello
     */
    home: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/auth/hello`,
        method: "GET",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags user-controller
     * @name User
     * @request GET:/user
     */
    user: (params: RequestParams = {}) =>
      this.request<Record<string, object>, any>({
        path: `/user`,
        method: "GET",
        ...params,
      }),
  };
  discord = {
    /**
     * No description
     *
     * @tags discord-api-controller
     * @name GetUserJoinedServer
     * @summary Get user guilds
     * @request GET:/discord/guilds
     */
    getUserJoinedServer: (params: RequestParams = {}) =>
      this.request<DiscordGuild[], any>({
        path: `/discord/guilds`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
