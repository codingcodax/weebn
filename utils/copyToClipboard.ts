const copyToClipboard = (text: string) =>
  new Promise((resolve, reject) => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard;

      cb.writeText(text).then(resolve).catch(reject);

      return;
    }

    try {
      const body = document.querySelector('body');
      const textarea = document.createElement('textarea');

      body?.appendChild(textarea);

      textarea.value = text;
      textarea.select();
      document.execCommand('copy');

      body?.removeChild(textarea);

      resolve('Copied successfully');
    } catch (error) {
      reject(error);
    }
  });

export default copyToClipboard;
