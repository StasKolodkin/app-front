import { App, Plugin } from "vue";
import "../components/Craft/events";

const events: Plugin = {
  install(app: App) {
    if (!window.mp) {
      window.mp = {
        events: {
          add: (event: string, callback: Function) => {
            console.log(`Event added: ${event}`);
          },
          call: (event: string, ...args: any[]) => {
            console.log(`Event called: ${event}`, args);
          },
          callProc: async (event: string, ...args: any[]) => {
            console.log(`Event called asynchronously: ${event}`, args);
            return {};
          }
        },
        trigger: (event: string, ...args: any[]) => {
          console.log(`Event triggered: ${event}`, args);
        }
      };
    }

    window.bsurl = import.meta.env.MODE === "production" ? "/Main" : "";
    
  }
};

export default events;