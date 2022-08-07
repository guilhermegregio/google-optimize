const getVariant = (experimentId: string): string => {
  let variant = ''

  if (window.google_optimize) {
    variant = window.google_optimize.get(experimentId)
  }

  return variant
}

export {getVariant}
