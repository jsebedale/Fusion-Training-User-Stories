# 2.4 Migration Example

## User story
As a user, I would like to update my repository so that it is compatible with bearer tokens

## Overview
On this branch, we have two different content sources that are set up to use the basic auth credentials. They are both accessing data from the same endpoint, however, `content-api.js` is using the resolve pattern and `content-api-fetch` is using the fetch pattern.

The `.env` file to use these content sources would follow this pattern:

```
CONTENT_BASE=https://<username>:<password>@api.sandbox.<org>.arcpublishing.com
```

## Documentation
We will be walking through the steps outlined in the documentation here:
- [Defining a Content Source](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/defining-arc-content-source.md?version=2.4)
- [Migrating Content Sources from 2.3 to 2.4](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/user-documentation/pagebuilder-fusion-migrating-content-sources-from-23-to-24/)

## What's next
Checkout the 2.4-migration-after branch!
