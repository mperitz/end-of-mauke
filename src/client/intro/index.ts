import State from '../data_structures/state';

export default function intro(state : State) : Promise<State> {
  return new Promise(async (resolve : Function, reject : Function) => {
    try {
      await removeStartContainer();
    } catch (err) {
      reject(err);
    }
  });
}

function removeStartContainer() : Promise<void> {
  return new Promise((resolve : Function, reject : Function) => {
    try {
      const startContainer = document.querySelector('.start-container');
      startContainer.classList.add('fade-out');
      setTimeout(() => {
        startContainer.remove();
        resolve();
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}
