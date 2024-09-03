import { Context, Effect, Layer, Option, pipe } from "effect";
import { P, match } from "ts-pattern";

type Schema = {
	lang: "en" | "fr";
};
type Key = keyof Schema;

export type LocalStorageService = {
	get: <StorageKey extends Key>(
		key: Key
	) => Effect.Effect<Option.Option<Schema[StorageKey]>, Error, never>;
	set: <StorageKey extends Key>(
		key: StorageKey,
		value: Schema[StorageKey]
	) => Effect.Effect<void, Error, never>;
};

const make = (): LocalStorageService => {
	return {
		get: <T extends Key>(key: Key) => {
			return pipe(
				Effect.try({
					try: () => {
						return match(key)
							.with(P.union("lang"), (selectedKey) => {
								return window.localStorage.getItem(selectedKey) as Schema[T];
							})
							.otherwise(() => {
								throw new Error("Unsupported");
							});
					},
					catch: () => {
						return {
							name: 'get error',
							message: "error",
						};
					},
				}),
				Effect.map(Option.fromNullable)
			);
		},
		set: (key, value) => {
			return Effect.try({
				try: () => {
					return window.localStorage.setItem(key, value);
				},
				catch: () => {
					return {
						name: 'set error',
						message: "error",
					};
				},
			});
		},
	};
};

export class LocalStorageServiceClass extends Context.Tag("MyService")<
	LocalStorageServiceClass,
	LocalStorageService
>() {
	static layer = Layer.effect(
		this,
		pipe(Effect.sync(make), Effect.tap(Effect.logDebug("🆗")))
	);
}
