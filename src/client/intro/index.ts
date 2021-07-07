import State from '../data_structures/state';
import {
  getContainer,
  showTextBlock,
  removeTextBlock,
  pause,
} from '../util';

export default function intro(state : State) : Promise<State> {
  return new Promise(async (resolve : Function, reject : Function) => {
    try {
      await removeStartElements();
      await pause(1000);
      
      await displayTextBlock([
          'It was 1999.',
          'The world\'s six billionth person was born in Sarajevo.',
          'The New York Yankees had just swept the Atlanta Braves to win their 25th World Championship.',
        ]
        , 500
        , 70);
      
      await displayTextBlock(
        ['And a legend came to be.'],
        500,
        150);
      resolve(state);
    } catch (err) {
      reject(err);
    }
  });
}

const removeStartElements = () : Promise<void> => 
  new Promise(async (resolve : Function, reject : Function) => {
    try {
      const container = getContainer();
      const prompt = document.querySelector('.prompt');
      const nameInput = document.getElementById('name');
      const startButton = document.getElementById('start');

      container.classList.add('fade-to-white');
      prompt.classList.add('fade-out');
      nameInput.classList.add('fade-out');
      startButton.classList.add('fade-out');

      await pause(1000);
      container.style.margin = '0 10vw';
      prompt.remove();
      nameInput.remove();
      startButton.remove();
      resolve();
    } catch (err) {
      reject(err);
    }
  });

const displayTextBlock = async (
  textList : Array<string>,
  pauseDuration : number,
  typeDuration : number
): Promise<void> =>
  await removeTextBlock(await showTextBlock(textList, pauseDuration, typeDuration));