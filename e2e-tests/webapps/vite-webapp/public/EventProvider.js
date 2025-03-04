export default class EventController {
  changeRenderIndex(vm) {
    if (vm.renderIndex === 0) {
      vm.renderIndex = 1;
    } else {
      vm.renderIndex = 0;
    }
  }
}
