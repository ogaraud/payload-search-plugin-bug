/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export function joinClasses(...args: Array<boolean | null | string | undefined>): string {
  return args.filter(Boolean).join(' ')
}
