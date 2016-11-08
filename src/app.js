import React from 'react'
import Experiment from './experiment'
import Variant from './variant'

// import { Experiment, Variant, emitter, experimentDebugger } from 'react-ab-test'

// experimentDebugger.enable();
//
//
// const Case = {
//   A:'A',
//   B:'B'
// }
//
// emitter.defineVariants('Experiment', [ 'A', 'B' ], [50, 50])
//
// emitter.addPlayListener(function(experimentName, variantName){
//   console.log("Displaying experiment '" + experimentName + "' variant '" + variantName + "'");
// });
//
// emitter.addWinListener(function(experimentName, variantName){
//   console.log("Variant '" + variantName + "' of experiment '" + experimentName + "'  was clicked");
// });
//
// <Experiment name="Experiment">...</Experiment>
// <Variant name="A">...</Variant>

const App = () =>
  <div>
    <Experiment name="Experiment" onImpression={console.log}>
      <Variant name="A">
        <p>A really compelling argument to buy more!</p>
      </Variant>
      <Variant name="B">
        <p>Copy about cats</p>
      </Variant>
    </Experiment>
  </div>

export default App
