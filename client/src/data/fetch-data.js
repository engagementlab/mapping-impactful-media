import { parseItem, parseList } from './http-utils';
import API from './config';

/**
 * Retrieve data from API /content route.
 * @function
 * @param {String} name - Name of data collection to get doc(s) from
 * @param {Boolean} all - If true, retrieve all docs, not one
 *
 */
export async function getContentAction(name, all) {
  try {
    const response = await fetch(`${API}/content/${name}${all ? '/all' : ''}`, {
      method: 'GET',
    });
    const parsed = await parseList(response);
    return parsed;
  } catch (error) {
    return console.log(error);
  }
}