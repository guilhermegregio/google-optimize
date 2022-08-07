const interval = (fn: Function, time: number) => {
  const intervalId = setInterval(() => {
    fn()

    clearInterval(intervalId)
  }, time)

  return () => {
    clearInterval(intervalId)
  }
}

export {interval}
