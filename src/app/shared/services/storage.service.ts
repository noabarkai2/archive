export class StorageService {

  private static cache: { [key: string]: string | null } = {};

  public static getItem(key: string): string | null {
    const cachedValue = StorageService.cache[key];
    if (cachedValue) {
      return cachedValue;
    } else {
      let value: string | null = localStorage.getItem(key);
      if (!value) {
        const cookieValue = StorageService.getCookie(key);
        if (cookieValue) {
          value = cookieValue;
        }
      }
      StorageService.cache[key] = value;
      return value;
    }
  }

  public static setItem(key: string, value: string): void {
    StorageService.cache[key] = value;
    try {
      localStorage.setItem(key, value);

    } catch (error) {
      StorageService.setCookie(key, value);
      console.log('error');
    }
  }

  public static removeItem(key: string): void {
    StorageService.cache[key] = null;
    localStorage.removeItem(key);
    StorageService.deleteCookie(key);
  }

  private static deleteCookie(key: string): void {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  private static setCookie(cname: string, cvalue: string, exdays: number = 100) {
    StorageService.deleteCookie(cname);

    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  private static getCookie(cname: string): string {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let cookieChar = ca[i];
      while (cookieChar.charAt(0) === ' ') {
        cookieChar = cookieChar.substring(1);
      }
      if (cookieChar.indexOf(name) === 0) {
        return cookieChar.substring(name.length, cookieChar.length);
      }
    }
    return '';
  }
}