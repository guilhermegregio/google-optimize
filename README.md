# @gregio/google-optimize

Library too integrate with google optimize

Easy to use with lazy experiment active

## Quick start

Using the @gregio/google-optimize requires that you've installed [Google Tag
Manager] and created [Google Optimize] test cases.

```
import { Experiment } from '@gregio/google-optimize';

const ComponentABTest = (props) => {
  return (
    <Experiment
      experimentId={`experimentID`}
      customEvent={`optimize.activate`}
      onActivate={(variant) => console.log(`activa ${variant}`) }
    >
      <ComponentABValue />
    </Experiment>
  );
};

// test variant value

import { useExperimentVariant, useExperimentActivate } from '@gregio/google-optimize';
const ComponentABValue = (props) => {
  const variant = useExperimentVariant();

  return  (
    {variant === ORIGINAL} && <ComponentOriginal />
    {variant === VARIANT_1} && <ComponentVariant />
  )
}
```

[google tag manager]: https://support.google.com/optimize/answer/6314801?hl=en
[google optimize]: https://marketingplatform.google.com/about/optimize/
