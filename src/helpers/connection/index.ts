export const isOffline = () => {
  return typeof window !== 'undefined' && !window.navigator.onLine
}
