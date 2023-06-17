import CryptoJS from "crypto-js";
import Cookies from 'js-cookie';
import { CONFIG } from "./config";

export const setSessionStorage = (name: string, value: any) => {
  try {
    sessionStorage.setItem(name, value);
    return true;
  } catch {
    return false;
  }
};

export const getSessionStorageItem = (name: string) => {
  try {
    return JSON.parse(sessionStorage.getItem(name) || "");
  } catch {
    return {};
  }
};

export const getCookieItem = (name: string) => {
  try {
    return Cookies.get(name);
  } catch {
    return null;
  }
};

export const removeSessionStorageItem = (name: string) => {
  try {
    return sessionStorage.removeItem(name);
  } catch {
    return {};
  }
};

export const plainEncrypt = (plaintext: string) => {
  return CryptoJS.AES.encrypt(plaintext, CONFIG.ENCRYPTION_SECRET).toString();
}
export const plainDecrypt = (cipherText: string) => {
  if(cipherText.length === 0){
    return {}
  }
  const bytes = CryptoJS.AES.decrypt(cipherText, CONFIG.ENCRYPTION_SECRET); 
  return bytes.toString(CryptoJS.enc.Utf8);
}

export const jsonDecrypt = (cipherText: string) => {
  if(cipherText.length === 0){
    return {}
  }
  const bytes = CryptoJS.AES.decrypt(cipherText, CONFIG.ENCRYPTION_SECRET); 
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

export function encrypt(plaintext: string, secret: string = "ADARSH") {
  var key = CryptoJS.enc.Utf8.parse(secret);
  let iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4));
  
  // Encrypt the plaintext
  var cipherText = CryptoJS.AES.encrypt(plaintext, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return {
    cipher: cipherText.toString(),
    iv: CryptoJS.enc.Base64.stringify(iv)
  };
}

export function decrypt(cipherText: any, secret: string = "ADARSH", iv: any) {
  // IV is a base64 string
  let iv1 = CryptoJS.enc.Base64.parse(iv);
  
  var key = CryptoJS.enc.Utf8.parse(secret);
  var cipherBytes: string | any = CryptoJS.enc.Base64.parse(cipherText);

  var decrypted = CryptoJS.AES.decrypt(cipherBytes, key, {
      iv: iv1,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
