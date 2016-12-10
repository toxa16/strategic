import {inject} from 'strategic-dependency-injection/dist/lib/inject';
import {launch} from 'strategic-routing/dist';

/**
 * Bootstraps Strategic.js application's root service.
 * @param serviceClass A root service class
 */
export function bootstrap(serviceClass) {

  inject(serviceClass)
    .then(service => {
      launch(service);
    })
    .catch(err => console.error(err));
}