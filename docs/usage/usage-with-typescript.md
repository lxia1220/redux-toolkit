---
id: usage-with-typescript
title: Usage With TypeScript
sidebar_label: Usage With TypeScript
hide_title: true
---

&nbsp;

# Usage With TypeScript

:::tip 배울 내용

- Typescript와 함께 Redux Toolkit의 여러 API를 사용하는 방법

:::

## 소개

Redux Toolkit은 TypeScript로 작성되었으며 해당 API는 TypeScript 애플리케이션에서 원활하게 사용하도록 설계되었습니다.

이 페이지는 Redux Toolkit에 포함된 다양한 API 각각에 대한 구체적인 세부 정보와 TypeScript를 사용하여 타입을 입력하는 방법을 제공합니다.

**See the [TypeScript Quick Start tutorial page](../tutorials/typescript.md) for a brief overview of how to set up and use Redux Toolkit and React Redux to work with TypeScript**.

:::info

이 페이지에 설명되지 않은 유형의 문제가 발생하는 경우, [이슈를 열어](https://github.com/reduxjs/redux-toolkit/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) 논의 해 볼 수 있습니다.

:::

## `configureStore`

`configureStore` 의 기본 사용 방법은 [TypeScript 빠른 시작 튜토리얼 페이지](../tutorials/typescript.md) 에 나와 있습니다. 다음은 유용할 수 있는 몇 가지 추가 세부정보입니다.

### Getting the `State` type

`State` 타입을 얻는 가장 쉬운 방법은 root reducer를 미리 정의하고 `ReturnType`을 추출하는 것입니다.
유형 이름 `State`는 일반적으로 남용되기 때문에, 혼동을 방지하기 위해 유형에 `RootState`와 같은 다른 이름을 지정하는 것이 좋습니다.

```typescript
import { combineReducers } from '@reduxjs/toolkit'
const rootReducer = combineReducers({})
// highlight-start
export type RootState = ReturnType<typeof rootReducer>
// highlight-end
```

또는 `rootReducer`를 직접 생성하지 않고 대신 slice reducer를 `configureStore()`에 직접 전달하는 경우 루트 리듀서를 올바르게 추론하기 위해 타입을 약간 수정해야 합니다:

```ts
import { configureStore } from '@reduxjs/toolkit'
// ...
const store = configureStore({
  reducer: {
    one: oneSlice.reducer,
    two: twoSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store
```

reducer를 `configureStore()`에 직접 전달하고 root reducer를 명시적으로 정의하지 않으면, `rootReducer`에 대한 참조를 확인할 수 없습니다.
이 대신, `State` 타입을 가져오기 위해 `store.getState`를 참조할 수 있습니다.

```typescript
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
const store = configureStore({
  reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>
```


### Getting the `Dispatch` type

Store에서 'Dispatch' 유형을 가져오려면, store를 생성한 후 추출할 수 있습니다. 'Dispatch'라는 형식 이름은 일반적으로 남용되기 때문에 혼동을 방지하기 위해 'AppDispatch'와 같은 다른 이름을 지정하는 것이 좋습니다. 또한 아래와 같이 `useAppDispatch`와 같은 hook를 내보낸 다음 `useDispatch`를 호출하는 모든 위치에서 사용하는 것이 더 편리하다는 것을 볼 수 있습니다.

```typescript
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
})

// highlight-start
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
// highlight-end

export default store
```

### Correct typings for the `Dispatch` type

The type of the `dispatch` function type will be directly inferred from the `middleware` option. So if you add _correctly typed_ middlewares, `dispatch` should already be correctly typed.

As TypeScript often widens array types when combining arrays using the spread operator, we suggest using the `.concat(...)` and `.prepend(...)` methods of the `MiddlewareArray` returned by `getDefaultMiddleware()`.

```ts
import { configureStore } from '@reduxjs/toolkit'
import additionalMiddleware from 'additional-middleware'
import logger from 'redux-logger'
// @ts-ignore
import untypedMiddleware from 'untyped-middleware'
import rootReducer from './rootReducer'

export type RootState = ReturnType<typeof rootReducer>
const store = configureStore({
  reducer: rootReducer,
  // highlight-start
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(
        // correctly typed middlewares can just be used
        additionalMiddleware,
        // you can also type middlewares manually
        untypedMiddleware as Middleware<
          (action: Action<'specialAction'>) => number,
          RootState
        >
      )
      // prepend and concat calls can be chained
      .concat(logger),
  // highlight-end
})

export type AppDispatch = typeof store.dispatch

export default store
```

#### `getDefaultMiddleware` 없이 `MiddlewareArray` 사용하기

If you want to skip the usage of `getDefaultMiddleware` altogether, you can still use `MiddlewareArray` for type-safe concatenation of your `middleware` array. This class extends the default JavaScript `Array` type, only with modified typings for `.concat(...)` and the additional `.prepend(...)` method.

This is generally not required though, as you will probably not run into any array-type-widening issues as long as you are using `as const` and do not use the spread operator.

So the following two calls would be equivalent:

```ts
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'

configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(additionalMiddleware, logger),
})

configureStore({
  reducer: rootReducer,
  middleware: [additionalMiddleware, logger] as const,
})
```

### Using the extracted `Dispatch` type with React Redux

By default, the React Redux `useDispatch` hook does not contain any types that take middlewares into account. If you need a more specific type for the `dispatch` function when dispatching, you may specify the type of the returned `dispatch` function, or create a custom-typed version of `useSelector`. See [the React Redux documentation](https://react-redux.js.org/using-react-redux/static-typing#typing-the-usedispatch-hook) for details.

## `createAction`

For most use cases, there is no need to have a literal definition of `action.type`, so the following can be used:

```typescript
createAction<number>('test')
```

이것의 결과로는 생성된 action의 타입이 `PayloadActionCreator<number, string>`가 됩니다.

일부 설정에서는 `action.type`에 대한 리터럴 타입이 필요합니다.
불행히도 TypeScript 타입 정의는 수동으로 정의된 타입 매개변수와 유추된 타입 매개변수의 혼합을 허용하지 않으므로, 제너릭 정의와 실제 JavaScript 코드 모두에서 '타입'을 지정해야 합니다:

```typescript
createAction<number, 'test'>('test')
```

If you are looking for an alternate way of writing this without the duplication, you can use a prepare callback so that both type parameters can be inferred from arguments, removing the need to specify the action type.

```typescript
function withPayloadType<T>() {
  return (t: T) => ({ payload: t })
}
createAction('test', withPayloadType<string>())
```

### Alternative to using a literally-typed `action.type`

If you are using `action.type` as a discriminator on a discriminated union, for example to correctly type your payload in `case` statements, you might be interested in this alternative:

Created action creators have a `match` method that acts as a [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates):

```typescript
const increment = createAction<number>('increment')
function test(action: Action) {
  if (increment.match(action)) {
    // action.payload inferred correctly here
    action.payload
  }
}
```

This `match` method is also very useful in combination with `redux-observable` and RxJS's `filter` method.

## `createReducer`

The default way of calling `createReducer` would be with a "lookup table" / "map object", like this:

```typescript
createReducer(0, {
  increment: (state, action: PayloadAction<number>) => state + action.payload,
})
```

Unfortunately, as the keys are only strings, using that API TypeScript can neither infer nor validate the action types for you:

```typescript
{
  const increment = createAction<number, 'increment'>('increment')
  const decrement = createAction<number, 'decrement'>('decrement')
  createReducer(0, {
    [increment.type]: (state, action) => {
      // action is any here
    },
    [decrement.type]: (state, action: PayloadAction<string>) => {
      // even though action should actually be PayloadAction<number>, TypeScript can't detect that and won't give a warning here.
    },
  })
}
```

As an alternative, RTK includes a type-safe reducer builder API.

### Building Type-Safe Reducer Argument Objects

Instead of using a simple object as an argument to `createReducer`, you can also use a callback that receives a `ActionReducerMapBuilder` instance:

```typescript {3-10}
const increment = createAction<number, 'increment'>('increment')
const decrement = createAction<number, 'decrement'>('decrement')
createReducer(0, (builder) =>
  builder
    .addCase(increment, (state, action) => {
      // action is inferred correctly here
    })
    .addCase(decrement, (state, action: PayloadAction<string>) => {
      // this would error out
    })
)
```

We recommend using this API if stricter type safety is necessary when defining reducer argument objects.

#### Typing `builder.addMatcher`

As the first `matcher` argument to `builder.addMatcher`, a [type predicate](https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates) function should be used.
As a result, the `action` argument for the second `reducer` argument can be inferred by TypeScript:

```ts
function isNumberValueAction(action: AnyAction): action is PayloadAction<{ value: number }> {
  return typeof action.payload.value === 'number'
}

createReducer({ value: 0 }, builder =>
   builder.addMatcher(isNumberValueAction, (state, action) => {
      state.value += action.payload.value
   })
})
```

## `createSlice`

As `createSlice` creates your actions as well as your reducer for you, you don't have to worry about type safety here.
Action type은 인라인으로 제공될 수 있습니다.:

```typescript
const slice = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
})
// now available:
slice.actions.increment(2)
// also available:
slice.caseReducers.increment(0, { type: 'increment', payload: 5 })
```

Case reducer가 너무 많아 인라인으로 정의하는 것이 지저분하거나, Slice 간에 case reducer를 재사용하려는 경우 `createSlice` 호출 외부에서 정의하고 `CaseReducer`로 타입을 선언 할 수도 있습니다:

```typescript
type State = number
const increment: CaseReducer<State, PayloadAction<number>> = (state, action) =>
  state + action.payload

createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    increment,
  },
})
```

### Defining the Initial State Type

`SliceState` 유형을 `createSlice`에 제네릭으로 전달하는 것은 좋은 생각이 아님을 알아차렸을 것입니다. 이는 거의 모든 경우에 `createSlice`에 대한 후속 제네릭 매개변수를 유추해야 하고 TypeScript가 동일한 "제네릭 블록" 내에서 제네릭 유형의 명시적 선언과 유추를 혼합할 수 없기 때문입니다.

표준 접근 방식은 state에 대한 인터페이스 또는 타입을 선언하고, 해당 타입을 사용하는 초기 state 값을 생성하고, 초기 state 값을 `createSlice`에 전달하는 것입니다. `initialState: myInitialState as SliceState`와 같이 사용할 수도 있습니다.

```ts {1,4,8,15}
type SliceState = { state: 'loading' } | { state: 'finished'; data: string }

// First approach: define the initial state using that type
const initialState: SliceState = { state: 'loading' }

createSlice({
  name: 'test1',
  initialState, // type SliceState is inferred for the state of the slice
  reducers: {},
})

// Or, cast the initial state as necessary
createSlice({
  name: 'test2',
  initialState: { state: 'loading' } as SliceState,
  reducers: {},
})
```

which will result in a `Slice<SliceState, ...>`.

### Defining Action Contents with `prepare` Callbacks

If you want to add a `meta` or `error` property to your action, or customize the `payload` of your action, you have to use the `prepare` notation.

TypeScript와 함께 이 표기법을 사용하면 다음과 같습니다:

```ts {5-16}
const blogSlice = createSlice({
  name: 'blogData',
  initialState,
  reducers: {
    receivedAll: {
      reducer(
        state,
        action: PayloadAction<Page[], string, { currentPage: number }>
      ) {
        state.all = action.payload
        state.meta = action.meta
      },
      prepare(payload: Page[], currentPage: number) {
        return { payload, meta: { currentPage } }
      },
    },
  },
})
```

### Generated Action Types for Slices

As TS cannot combine two string literals (`slice.name` and the key of `actionMap`) into a new literal, all actionCreators created by `createSlice` are of type 'string'. This is usually not a problem, as these types are only rarely used as literals.

In most cases that `type` would be required as a literal, the `slice.action.myAction.match` [type predicate](https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates) should be a viable alternative:

```ts {10}
const slice = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
})

function myCustomMiddleware(action: Action) {
  if (slice.actions.increment.match(action)) {
    // `action` is narrowed down to the type `PayloadAction<number>` here.
  }
}
```

If you actually _need_ that type, unfortunately there is no other way than manual casting.

### Type safety with `extraReducers`

Reducer lookup tables that map an action `type` string to a reducer function are not easy to fully type correctly. This affects both `createReducer` and the `extraReducers` argument for `createSlice`. So, like with `createReducer`, [you may also use the "builder callback" approach](#building-type-safe-reducer-argument-objects) for defining the reducer object argument.

This is particularly useful when a slice reducer needs to handle action types generated by other slices, or generated by specific calls to `createAction` (such as the actions generated by [`createAsyncThunk`](../api/createAsyncThunk.mdx)).

```ts {27-30}
const fetchUserById = createAsyncThunk(
  'users/fetchById',
  // if you type your function argument here
  async (userId: number) => {
    const response = await fetch(`https://reqres.in/api/users/${userId}`)
    return (await response.json()) as Returned
  }
)

interface UsersState {
  entities: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  entities: [],
  loading: 'idle',
} as UsersState

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    })
  },
})
```

Like the `builder` in `createReducer`, this `builder` also accepts `addMatcher` (see [typing `builder.matcher`](#typing-builderaddmatcher)) and `addDefaultCase`.

### Wrapping `createSlice`

If you need to reuse reducer logic, it is common to write ["higher-order reducers"](https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic#customizing-behavior-with-higher-order-reducers) that wrap a reducer function with additional common behavior. This can be done with `createSlice` as well, but due to the complexity of the types for `createSlice`, you have to use the `SliceCaseReducers` and `ValidateSliceCaseReducers` types in a very specific way.

Here is an example of such a "generic" wrapped `createSlice` call:

```ts
interface GenericState<T> {
  data?: T
  status: 'loading' | 'finished' | 'error'
}

const createGenericSlice = <
  T,
  Reducers extends SliceCaseReducers<GenericState<T>>
>({
  name = '',
  initialState,
  reducers,
}: {
  name: string
  initialState: GenericState<T>
  reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>
}) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      start(state) {
        state.status = 'loading'
      },
      /**
       * If you want to write to values of the state that depend on the generic
       * (in this case: `state.data`, which is T), you might need to specify the
       * State type manually here, as it defaults to `Draft<GenericState<T>>`,
       * which can sometimes be problematic with yet-unresolved generics.
       * This is a general problem when working with immer's Draft type and generics.
       */
      success(state: GenericState<T>, action: PayloadAction<T>) {
        state.data = action.payload
        state.status = 'finished'
      },
      ...reducers,
    },
  })
}

const wrappedSlice = createGenericSlice({
  name: 'test',
  initialState: { status: 'loading' } as GenericState<string>,
  reducers: {
    magic(state) {
      state.status = 'finished'
      state.data = 'hocus pocus'
    },
  },
})
```

## `createAsyncThunk`

In the most common use cases, you should not need to explicitly declare any types for the `createAsyncThunk` call itself.

Just provide a type for the first argument to the `payloadCreator` argument as you would for any function argument, and the resulting thunk will accept the same type as its input parameter.
The return type of the `payloadCreator` will also be reflected in all generated action types.

```ts
interface MyData {
  // ...
}

const fetchUserById = createAsyncThunk(
  'users/fetchById',
  // highlight-start
  // Declare the type your function argument here:
  async (userId: number) => {
    // highlight-end
    const response = await fetch(`https://reqres.in/api/users/${userId}`)
    // Inferred return type: Promise<MyData>
    // highlight-next-line
    return (await response.json()) as MyData
  }
)

// the parameter of `fetchUserById` is automatically inferred to `number` here
// and dispatching the resulting thunkAction will return a Promise of a correctly
// typed "fulfilled" or "rejected" action.
const lastReturnedAction = await store.dispatch(fetchUserById(3))
```

The second argument to the `payloadCreator`, known as `thunkApi`, is an object containing references to the `dispatch`, `getState`, and `extra` arguments from the thunk middleware as well as a utility function called `rejectWithValue`. If you want to use these from within the `payloadCreator`, you will need to define some generic arguments, as the types for these arguments cannot be inferred. Also, as TS cannot mix explicit and inferred generic parameters, from this point on you'll have to define the `Returned` and `ThunkArg` generic parameter as well.

To define the types for these arguments, pass an object as the third generic argument, with type declarations for some or all of these fields:

```ts
type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: unknown
  /** type for `thunkApi.dispatch` */
  dispatch?: Dispatch
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: unknown
  /** return type of the `serializeError` option callback */
  serializedErrorType?: unknown
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: unknown
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: unknown
}
```

```ts
const fetchUserById = createAsyncThunk<
  // highlight-start
  // Return type of the payload creator
  MyData,
  // First argument to the payload creator
  number,
  {
    // Optional fields for defining thunkApi field types
    dispatch: AppDispatch
    state: State
    extra: {
      jwt: string
    }
  }
  // highlight-end
>('users/fetchById', async (userId, thunkApi) => {
  const response = await fetch(`https://reqres.in/api/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${thunkApi.extra.jwt}`,
    },
  })
  return (await response.json()) as MyData
})
```

If you are performing a request that you know will typically either be a success or have an expected error format, you can pass in a type to `rejectValue` and `return rejectWithValue(knownPayload)` in the action creator. This allows you to reference the error payload in the reducer as well as in a component after dispatching the `createAsyncThunk` action.

```ts
interface MyKnownError {
  errorMessage: string
  // ...
}
interface UserAttributes {
  id: string
  first_name: string
  last_name: string
  email: string
}

const updateUser = createAsyncThunk<
  // Return type of the payload creator
  MyData,
  // First argument to the payload creator
  UserAttributes,
  // Types for ThunkAPI
  {
    extra: {
      jwt: string
    }
    rejectValue: MyKnownError
  }
>('users/update', async (user, thunkApi) => {
  const { id, ...userData } = user
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${thunkApi.extra.jwt}`,
    },
    body: JSON.stringify(userData),
  })
  if (response.status === 400) {
    // Return the known error for future handling
    return thunkApi.rejectWithValue((await response.json()) as MyKnownError)
  }
  return (await response.json()) as MyData
})
```

While this notation for `state`, `dispatch`, `extra` and `rejectValue` might seem uncommon at first, it allows you to provide only the types for these you actually need - so for example, if you are not accessing `getState` within your `payloadCreator`, there is no need to provide a type for `state`. The same can be said about `rejectValue` - if you don't need to access any potential error payload, you can ignore it.

In addition, you can leverage checks against `action.payload` and `match` as provided by `createAction` as a type-guard for when you want to access known properties on defined types. Example:

- In a reducer

```ts
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.entities[payload.id] = payload
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error
      }
    })
  },
})
```

- In a component

```ts
const handleUpdateUser = async (userData) => {
  const resultAction = await dispatch(updateUser(userData))
  if (updateUser.fulfilled.match(resultAction)) {
    const user = resultAction.payload
    showToast('success', `Updated ${user.name}`)
  } else {
    if (resultAction.payload) {
      // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
      // Note: this would also be a good place to do any handling that relies on the `rejectedWithValue` payload, such as setting field errors
      showToast('error', `Update failed: ${resultAction.payload.errorMessage}`)
    } else {
      showToast('error', `Update failed: ${resultAction.error.message}`)
    }
  }
}
```

## `createEntityAdapter`

Typing `createEntityAdapter` only requires you to specify the entity type as the single generic argument.

The example from the `createEntityAdapter` documentation would look like this in TypeScript:

```ts
interface Book {
  bookId: number
  title: string
  // ...
}

// highlight-next-line
const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.bookId,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
})

const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState(),
  reducers: {
    bookAdded: booksAdapter.addOne,
    booksReceived(state, action: PayloadAction<{ books: Book[] }>) {
      booksAdapter.setAll(state, action.payload.books)
    },
  },
})
```

### Using `createEntityAdapter` with `normalizr`

When using a library like [`normalizr`](https://github.com/paularmstrong/normalizr/), your normalized data will resemble this shape:

```js
{
  result: 1,
  entities: {
    1: { id: 1, other: 'property' },
    2: { id: 2, other: 'property' }
  }
}
```

The methods `addMany`, `upsertMany`, and `setAll` all allow you to pass in the `entities` portion of this directly with no extra conversion steps. However, the `normalizr` TS typings currently do not correctly reflect that multiple data types may be included in the results, so you will need to specify that type structure yourself.

Here is an example of how that would look:

```ts
type Author = { id: number; name: string }
type Article = { id: number; title: string }
type Comment = { id: number; commenter: number }

export const fetchArticle = createAsyncThunk(
  'articles/fetchArticle',
  async (id: number) => {
    const data = await fakeAPI.articles.show(id)
    // Normalize the data so reducers can responded to a predictable payload.
    // Note: at the time of writing, normalizr does not automatically infer the result,
    // so we explicitly declare the shape of the returned normalized data as a generic arg.
    const normalized = normalize<
      any,
      {
        articles: { [key: string]: Article }
        users: { [key: string]: Author }
        comments: { [key: string]: Comment }
      }
    >(data, articleEntity)
    return normalized.entities
  }
)

export const slice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticle.fulfilled, (state, action) => {
      // The type signature on action.payload matches what we passed into the generic for `normalize`, allowing us to access specific properties on `payload.articles` if desired
      articlesAdapter.upsertMany(state, action.payload.articles)
    })
  },
})
```
