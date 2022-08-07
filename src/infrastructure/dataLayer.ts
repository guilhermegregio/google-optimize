const dataLayerEventPush = (event: string) => {
  if (window.dataLayer) {
    window.dataLayer.push({event})
  }
}

export {dataLayerEventPush}
