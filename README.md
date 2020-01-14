# 2.4 Migration Example

## User story
As a user, I would like to update my repository so that it is compatible with bearer tokens

## Overview
On this branch, we have updated the content sources so that are set up to use bearer tokens. Only `content-api-fetch` requires a code change since it is using the fetch pattern.

The `.env` file to use these content sources would follow this pattern:

```
CONTENT_BASE=https://api.sandbox.<org>.arcpublishing.com
ARC_ACCESS_TOKEN=<your-peronsal-token>
```
Your personal token can be created in the [developer center](https://redirector.arcpublishing.com/developer/access/tokens).

Keep in mind - tokens are now environment specific so you will need one for sandbox and production.

## Documentation
We will be walking through the steps outlined in the documentation here:
- [Defining a Content Source](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/defining-arc-content-source.md?version=2.4)
- [Migrating Content Sources from 2.3 to 2.4](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/user-documentation/pagebuilder-fusion-migrating-content-sources-from-23-to-24/)
