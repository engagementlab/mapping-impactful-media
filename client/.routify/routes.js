
/**
 * @roxi/routify 2.15.1
 * File generated Wed Apr 28 2021 17:44:28 GMT-0400 (Eastern Daylight Time)
 */

export const __version = "2.15.1"
export const __timestamp = "2021-04-28T21:44:28.789Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_reset",
  "filepath": "/_reset.svelte",
  "root": true,
  "ownMeta": {
    "preload": "proximity"
  },
  "absolutePath": "/Users/john_richardson/Documents/Projects/mapping-impactful-media/client/src/pages/_reset.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/john_richardson/Documents/Projects/mapping-impactful-media/client/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "about.svelte",
      "filepath": "/about.svelte",
      "name": "about",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/john_richardson/Documents/Projects/mapping-impactful-media/client/src/pages/about.svelte",
      "importPath": "../src/pages/about.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/about",
      "id": "_about",
      "component": () => import('../src/pages/about.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "blog",
      "filepath": "/blog",
      "name": "blog",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/john_richardson/Documents/Projects/mapping-impactful-media/client/src/pages/blog",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[post].svelte",
          "filepath": "/blog/[post].svelte",
          "name": "[post]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/john_richardson/Documents/Projects/mapping-impactful-media/client/src/pages/blog/[post].svelte",
          "importPath": "../src/pages/blog/[post].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/blog/:post",
          "id": "_blog__post",
          "component": () => import('../src/pages/blog/[post].svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/blog/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/john_richardson/Documents/Projects/mapping-impactful-media/client/src/pages/blog/index.svelte",
          "importPath": "../src/pages/blog/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/blog/index",
          "id": "_blog_index",
          "component": () => import('../src/pages/blog/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/blog"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/john_richardson/Documents/Projects/mapping-impactful-media/client/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": true,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_reset.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_reset.svelte",
  "meta": {
    "preload": "proximity",
    "recursive": true,
    "prerender": true
  },
  "path": "/",
  "id": "__reset",
  "component": () => import('../src/pages/_reset.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

