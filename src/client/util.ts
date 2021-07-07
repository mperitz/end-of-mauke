export const getContainer = () : HTMLElement => 
  document.querySelector('.container');

export const createAndShowText = (text : string, typeDuration : number) : Promise<Element> =>
  new Promise((resolve : Function, reject : Function) => {
    setTimeout(() => {
      const container = getContainer();
      const textElement = document.createElement('p');
      textElement.classList.add('intro-text');
      container.appendChild(textElement);
      let i = 0;
      const interval = setInterval(() => {
        textElement.textContent += text[i++];
        if (i === text.length) {
          clearInterval(interval);
          resolve(textElement);
        }
      }, typeDuration);
    }, 300);
  });

export const showTextBlock = (textList : Array<string>, pauseDuration : number, typeDuration : number) : Promise<Array<Element>> =>
  new Promise(async (resolve : Function, reject : Function) => {
    try {
      const elementsList = [];
      for await (let phrase of textList) {
        elementsList.push(await createAndShowText(phrase, typeDuration));
        await pause(pauseDuration);
      }
      resolve(elementsList);
    } catch (err) {
      reject(err);
    }
  });

export const removeTextBlock = (block : Array<Element>) : Promise<void> =>
  new Promise(async (resolve : Function, reject : Function) => {
    try {
      await pause(1500);
      block.forEach(el => el.classList.add('fade-out'));
      await pause(1000);
      block.forEach(el => el.remove());
      resolve();
    } catch (err) {
      reject(err);
    }
  });

export const pause = (duration : number) : Promise<void> =>
  new Promise((resolve : Function) => setTimeout(resolve, duration));
