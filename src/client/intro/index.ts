import State from '../data_structures/state';

export default function intro(state : State) : Promise<State> {
  return new Promise(async (resolve : Function, reject : Function) => {
    try {
      await removeStartElements();
    } catch (err) {
      reject(err);
    }
  });
}

function removeStartElements() : Promise<void> {
  return new Promise((resolve : Function, reject : Function) => {
    try {
      const container = document.querySelector('.container');
      const prompt = document.querySelector('.prompt');
      const nameInput = document.getElementById('name');
      const startButton = document.getElementById('start');

      container.classList.add('fade-to-white');
      prompt.classList.add('fade-out');
      nameInput.classList.add('fade-out');
      startButton.classList.add('fade-out');

      setTimeout(() => {
        resolve();
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}
