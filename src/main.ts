import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { App01 } from './app/section02/app01/app01';
import { App02 } from './app/section02/app02/app02';
import { App03 } from './app/section03/app03/app03';
import { App04 } from './app/section03/app04/app04';
import { App05 } from './app/section03/app05/app05';
import { App07 } from './app/section03/app07/app07';
import { App014 } from './app/section04/app01/app01';
import { App41 } from './app/section04/app41/app41';
import { App100 } from './app/examples/app100/app100';
import { App102 } from './app/examples02/app102/app102';
import { App103 } from './app/examples03/app103/app103';
import { App104 } from './app/examples04/app104/app104';

bootstrapApplication(App104, appConfig).catch((err) => console.error(err));
