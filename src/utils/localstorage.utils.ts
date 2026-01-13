/* ---------------------------------------------
   Local Storage Utility (TypeScript)
   --------------------------------------------- */

type StorageValue<T> = {
  value: T
  expiry?: number // unix timestamp in ms
}

/* ---------------------------------------------
   Set Item
--------------------------------------------- */
export const setItemToStorage = <T>(
  key: string,
  value: T,
  ttlInMs?: number
): void => {

  const payload: StorageValue<T> = {
    value,
    expiry: ttlInMs ? Date.now() + ttlInMs : undefined
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(payload))
  } catch (error) {
    console.error(`localStorage setItem error for key "${key}"`, error)
  }
}

/* ---------------------------------------------
   Get Item
--------------------------------------------- */
export const getItem = <T>(key: string): T | null => {

  try {
    const item = window.localStorage.getItem(key)
    if (!item) return null

    const parsed: StorageValue<T> = JSON.parse(item)

    if (parsed.expiry && Date.now() > parsed.expiry) {
      removeItem(key)
      return null
    }

    return parsed.value
  } catch (error) {
    console.error(`localStorage getItem error for key "${key}"`, error)
    return null
  }
}

/* ---------------------------------------------
   Remove Item
--------------------------------------------- */
export const removeItem = (key: string): void => {

  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.error(`localStorage removeItem error for key "${key}"`, error)
  }
}

/* ---------------------------------------------
   Clear Storage
--------------------------------------------- */
export const clearStorage = (): void => {

  try {
    window.localStorage.clear()
  } catch (error) {
    console.error('localStorage clear error', error)
  }
}

/* ---------------------------------------------
   Check Key Exists
--------------------------------------------- */
export const hasKey = (key: string): boolean => {
  return window.localStorage.getItem(key) !== null
}