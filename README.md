# promo-types, by [Tincre`.dev`](https://tincre.dev/)

Types for Tincre [Promo](https://tincre.dev/promo). Use it in conjunction with the [`promo-dashboard`](https://github.com/Tincre/promo-dashboard), [`promo-chat`](https://github.com/Tincre/promo-chat), [`promo-button`](https://github.com/Tincre/promo-button) and other Promo integration applications.

- [promo-types, by Tincre`.dev`](#promo-types-by-tincredev)
  - [Installation](#installation)
    - [Yarn](#yarn)
    - [Npm](#npm)
    - [Usage](#usage)
  - [Support](#support)
  - [License](#license)
  - [Development](#development)
    - [Releases](#releases)
      - [Release prep](#release-prep)
        - [Test release](#test-release)
      - [Release `latest` tag](#release-latest-tag)

## Installation

Use your favorite package manager to rock installation of `promo-types`.

### Yarn

```
yarn add @tincre/promo-types# -D if you want this as a dev dep
```

### Npm

```
npm install @tincre/promo-types# --save-dev if you want it as a dev dep
```

### Usage

- Import the types
- Use the types
- Deploy!

#### Usage example

```ts
import { CampaignData } from '@tincre/promo-types';

const data: CampaignData = {
    ...//your actual stuff here
}
```

## Support

- Documentation: [tincre.dev/docs](https://tincre.dev/docs)
- Guides and how-tos: [tincre.dev/docs/guides](https://tincre.dev/docs/guides)
- Reference docs: [tincre.dev/docs/reference](https://tincre.dev/docs/reference)
- Community: [community.tincre.dev](https://community.tincre.dev)

## License

This code is free to use for your commercial or personal projects. It is open-source
licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/).

You will see various headers throughout the codebase and can reference the license
directly via [LICENSE](/LICENSE) herein.

### Releases

We use [`npm`](https://npmjs.com) for releases. In particular, we use
`npm --publish` to publish.

Currently, only [@thinkjrs](https://github.com/thinkjrs) has the ability to release.

#### Release prep

Prior to using `npm --publish` a release tag needs to be created for
the library using our standard tagging practices.

> Ensure that tests :white_check_mark: pass during this process prior to
> releasing via npm.

##### Test release

To do a proper release, ensure you're in the base repo directory and run
`npm publish . --access public --dry-run`.

#### Release `latest` tag

To complete a full release to the `latest` npm `dist-tag`, ensure you're in
the base repo directory and run `npm publish . --access public`.

🎉 That's it! 🎉
