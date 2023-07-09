/* eslint-disable */
import * as types from "./graphql"
import {TypedDocumentNode as DocumentNode} from "@graphql-typed-document-node/core"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\nquery GetScenes($filter: FindFilterType, $sceneFilter: SceneFilterType) {\n  findScenes(\n    filter: $filter,\n    scene_filter: $sceneFilter\n  ) {\n    count\n    scenes {\n      id\n      play_count\n      details\n      rating100\n      o_counter\n      date\n      performers {\n        name\n      }\n      studio {\n        name\n      }\n      title\n      files {\n        basename\n        duration\n      }\n      tags {\n        name\n      }\n    }\n  }\n}":
    types.GetScenesDocument,
  "\nquery GetImages($filter: FindFilterType, $imageFilter: ImageFilterType) {\n  findImages(filter: $filter, image_filter: $imageFilter) {\n    count\n    images {\n      id\n      date\n      rating100\n      o_counter\n      performers {\n        name\n      }\n      studio {\n        name\n      }\n      title\n\t\t\ttags {\n        name\n      }\n    }\n  }\n}":
    types.GetImagesDocument,
  "\nquery GetTags($filter: FindFilterType) {\n  findTags(filter: $filter) {\n    count\n    tags {\n      id\n      name\n      scene_count\n      image_count\n      scene_marker_count\n      performer_count\n    }\n  }\n}\n":
    types.GetTagsDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\nquery GetScenes($filter: FindFilterType, $sceneFilter: SceneFilterType) {\n  findScenes(\n    filter: $filter,\n    scene_filter: $sceneFilter\n  ) {\n    count\n    scenes {\n      id\n      play_count\n      details\n      rating100\n      o_counter\n      date\n      performers {\n        name\n      }\n      studio {\n        name\n      }\n      title\n      files {\n        basename\n        duration\n      }\n      tags {\n        name\n      }\n    }\n  }\n}"
): (typeof documents)["\nquery GetScenes($filter: FindFilterType, $sceneFilter: SceneFilterType) {\n  findScenes(\n    filter: $filter,\n    scene_filter: $sceneFilter\n  ) {\n    count\n    scenes {\n      id\n      play_count\n      details\n      rating100\n      o_counter\n      date\n      performers {\n        name\n      }\n      studio {\n        name\n      }\n      title\n      files {\n        basename\n        duration\n      }\n      tags {\n        name\n      }\n    }\n  }\n}"]
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\nquery GetImages($filter: FindFilterType, $imageFilter: ImageFilterType) {\n  findImages(filter: $filter, image_filter: $imageFilter) {\n    count\n    images {\n      id\n      date\n      rating100\n      o_counter\n      performers {\n        name\n      }\n      studio {\n        name\n      }\n      title\n\t\t\ttags {\n        name\n      }\n    }\n  }\n}"
): (typeof documents)["\nquery GetImages($filter: FindFilterType, $imageFilter: ImageFilterType) {\n  findImages(filter: $filter, image_filter: $imageFilter) {\n    count\n    images {\n      id\n      date\n      rating100\n      o_counter\n      performers {\n        name\n      }\n      studio {\n        name\n      }\n      title\n\t\t\ttags {\n        name\n      }\n    }\n  }\n}"]
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\nquery GetTags($filter: FindFilterType) {\n  findTags(filter: $filter) {\n    count\n    tags {\n      id\n      name\n      scene_count\n      image_count\n      scene_marker_count\n      performer_count\n    }\n  }\n}\n"
): (typeof documents)["\nquery GetTags($filter: FindFilterType) {\n  findTags(filter: $filter) {\n    count\n    tags {\n      id\n      name\n      scene_count\n      image_count\n      scene_marker_count\n      performer_count\n    }\n  }\n}\n"]

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
