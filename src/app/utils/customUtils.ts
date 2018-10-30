export class CustomUtils {

  hello = 'hello';

  stringToUrl(text: string): string {
    let stringUrl = '';
    let textArray = text.split(' ');
    if (textArray.length > 6) {
      textArray = textArray.splice(0, 6);
      textArray.forEach(word => {
        stringUrl += (word + '-');
      });
      stringUrl = stringUrl.slice(0, (stringUrl.length - 1));
      return stringUrl;
    } else if (textArray.length <= 6) {
      textArray.forEach(word => {
        stringUrl += (word + '-');
      });
      stringUrl = stringUrl.slice(0, (stringUrl.length - 1));
      return stringUrl;
    }
  }
}
