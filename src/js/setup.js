import Flux from 'flux';
import GeneralStore from 'general-store';

var dispatcher = new Flux.Dispatcher();
GeneralStore.DispatcherInstance.set(dispatcher);

