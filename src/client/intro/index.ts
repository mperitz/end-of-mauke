import State from '../data_structures/state';
import {
  getContainer,
  showTextBlock,
  removeTextBlock,
  pause,
} from '../util/util';

const belowImgText = 'For it was then that sweet Michael Peritz became Mauke.';

export default function intro(state : State) : Promise<State> {
  return new Promise(async (resolve : Function, reject : Function) => {
    try {
      await removeStartElements();
      await pause(1000);
      
      await displayTextBlock(
        [
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

      await displayAndRemoveMerwin();
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

const displayMerwinMeadows = () : Promise<void> =>
  new Promise(async (resolve, reject) => {
    try {
      const imgWrapper = document.createElement('div');
      imgWrapper.id = 'merwin';
      imgWrapper.classList.add('merwin-wrapper');
      const img = document.createElement('div');
      imgWrapper.appendChild(img);
      img.classList.add('merwin', 'fade-in');

      getContainer().appendChild(imgWrapper);
      await pause(2000);
      imgWrapper.classList.add('tighten');
      img.classList.add('zoom-in');
      await pause(2000);
      resolve();
    } catch (err) {
      reject(err);
    }
  });

const removeMerwinMeadows = () : Promise<void> =>
  new Promise(async (resolve : Function, reject : Function) => {
    try {
      await pause(belowImgText.length * 75 + 2300);
      const imgWrapper = document.getElementById('merwin');
      imgWrapper.classList.add('fade-out-merwin');
      await pause(1000);
      imgWrapper.remove();
      resolve();
    } catch (err) {
      reject(err);
    }
  });

const displayAndRemoveMerwin = async () : Promise<void> => {
  await displayMerwinMeadows();
  await Promise.all([
    displayTextBlock(
      [belowImgText],
      500,
      75
    ),
    removeMerwinMeadows(),
  ]);
}
