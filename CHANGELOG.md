## [2.0.2] - 2024-12-06

## Fixed

- fixed a bug in `2.0.1` where `deno init --npm oak-deno` fails due to the
  difference in how Node.js and Deno handle `fs.copy`

## [2.0.1] - 2024-12-06

### Fixed

- typo fix in library script name `create-oak-bun` => `create-oak-deno`
- directory copying should no longer fail when used with
  `deno init --npm oak-deno`

## [2.0.0] - 2024-12-06

### Changed

- library upgrade (`@dklab/oak-routing-ctrl@^0.12.2`)
- support Deno 2 by updating the `deno test` task (**BREAKING CHANGE**: this
  task no longer works on Deno 1)
- updated boilerplate code to log a message on service ready (`listen` event)

## [1.3.0] - 2024-11-15

### Changed

- library upgrades (`@dklab/oak-routing-ctrl@^0.12.1`, `@oak/oak@^17.1.3`,
  `@std/testing@1.0.5`)

## [1.2.0] - 2024-09-14

### Changed

- library upgrades (`@dklab/oak-routing-ctrl@^0.11.0`, `@oak/oak@^17.0.0`,
  `@std/testing@1.0.2`)

## [1.1.1] - 2024-07-16

### Changed

- library upgrade (`@dklab/oak-routing-ctrl@^0.9.0`)

## [1.1.0] - 2024-07-15

### Added

- sample integration test
- template code to support OpenAPI Spec serving
- template test code to cover OpenAPI Spec serving
- support for `-y` (alternatively: `--yes`, `-f`, `--force`) flag (example:
  `npm create oak-deno -- -y`)

### Changed

- library upgrade (`@dklab/oak-routing-ctrl@^0.8.6`)
- improved README

## [1.0.1] - 2024-06-30

### Fixed

- README typo fix

## [1.0.0] - 2024-06-29

### Added

- Initial Release
