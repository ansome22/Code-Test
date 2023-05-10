import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logError(message: string, stack: string) {
    // Send errors to be saved here
    // The console.log is only for testing this example. Could use AWS logging to log mobile errors
    console.log('LoggingService: ' + message);
  }
}
