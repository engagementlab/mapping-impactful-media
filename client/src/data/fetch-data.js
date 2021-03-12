import { parseItem, parseList } from './http-utils';
import API from './config';


export async function getDataAction() {
  try {
    const response = await fetch(`${API}/content`, {
      method: 'GET',
    });
    const parsed = await parseList(response);
    return parsed;
  } catch (error) {
    return console.log(error);
  }
}