import React from 'react'
import {Provider, useExperiment, ExperimentParams} from '@/application'

type ProviderProps = {
  children: React.ReactNode
}

type Props = ExperimentParams & ProviderProps

const ExperimentProvider = ({
  experimentId = '',
  customEvent = '',
  onActivate = () => {},
  children,
}: Props) => {
  const experimentProps = useExperiment({
    experimentId,
    customEvent,
    onActivate,
  })

  return <Provider value={experimentProps}>{children}</Provider>
}

export {ExperimentProvider}
