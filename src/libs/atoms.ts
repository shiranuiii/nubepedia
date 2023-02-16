import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const tempPostAtom = atomWithStorage("posts", [])
