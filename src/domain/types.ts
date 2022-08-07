import {ExperimentStatus} from './ExperimentStatus'

export type Experiment = {
  experimentId: string
  experimentStatus: ExperimentStatus
  variant: string
}

export type Activate = () => void

export type ExperimentResult = {
  experiment: Experiment
  activate: Activate
}
