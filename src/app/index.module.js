import { config } from './index.config';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { percentFieldDirective } from './components/input/percent/field/percent.field.directive'
import { percentSliderDirective } from './components/input/percent/slider/percent.slider.directive'
import { percentControlDirective } from './components/input/percent/percent.control.directive'
import { percentGroupDirective } from './components/input/percent/percent.group.directive'
import { toNumber } from './components/utils/toNumber'


import {ServerMock} from './mock/server'

angular.module('egm', [])
  .config(config)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('percentField', percentFieldDirective)
  .directive('percentSlider', percentSliderDirective)
  .directive('percentControl', percentControlDirective)
  .directive('percentGroup', percentGroupDirective)
  .directive('toNumber', toNumber)
  .service('ServerMock', ServerMock)

;
