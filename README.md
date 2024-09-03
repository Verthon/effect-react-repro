# Effect repro

BUG: FiberRuntime - {} - please report an issue at https://github.com/Effect-TS/effect/issues

## Steps to reproduce the error
Issue happens only in the jest tests in the original codebase, it is react-native one, however the contents of the error are the same like here on Web

* install deps: `nvm use && npm i`
* run test command: `npm run test:unit`
* test should fail with output `BUG: FiberRuntime - {} - please report an issue at https://github.com/Effect-TS/effect/issues`