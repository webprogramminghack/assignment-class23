const eventBus = new Map();

export const on = (event: string, callback: () => void) => {
  eventBus.set(event, callback);
}

export const emit = (event: string) => {
  eventBus.get(event)?.();
}

export const off = (event: string) => {
  eventBus.delete(event);
}

export const once = (event: string, callback: () => void) => {
  on(event, () => {
    off(event);
    callback();
  });
}

export const offAll = () => {
  eventBus.clear();
}