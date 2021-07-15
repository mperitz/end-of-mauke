import State from '../data_structures/state';

export default function start() : Promise<State> {
  return new Promise((resolve : Function, reject : Function) => {
    try {
      const nameInput = document.getElementById('name');
      const startButton = document.getElementById('start');
  
      let playerName = '';
  
      nameInput.focus();
      nameInput.addEventListener('input', (event : InputEvent) => {
        const target = <HTMLInputElement>event.target;
        if (!target.value || target.value.trim().replace(/( |\W)+/g, '').toLowerCase().match(/mauke?/)) {
          startButton.classList.add('disabled');
        } else {
          startButton.classList.remove('disabled');
          playerName = target.value;
        }
      });
  
      startButton.addEventListener('click', (event : MouseEvent) => {
        localStorage.playerName = playerName;
        resolve(new State(playerName));
      });
    } catch (err) {
      reject(err);
    }
  });
}