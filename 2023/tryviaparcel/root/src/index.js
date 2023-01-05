import { registerApplication, start } from 'single-spa';

registerApplication(
  'root', // Name of this single-spa application
  () => import('./root.app'),
  () => true,
);

start();