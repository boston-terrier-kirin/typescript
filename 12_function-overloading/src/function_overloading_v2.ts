import {
  CATEGORIES_ACTION_TYPES,
  Category,
} from './function_overloading_v2_types';

export type Action<T> = {
  type: T;
};

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

// ここからcrateActionのローバーロード
// パターン1) payloadがvoidの場合、Actionを返す。
export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

// パターン2) payloadがあるの場合、ActionWithPayloadを返す。
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

// ■Actionの型
export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

// ■実際のAction
export const fetchCategoriesStart = (): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (
  categories: Category[]
): FetchCategoriesSuccess =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
