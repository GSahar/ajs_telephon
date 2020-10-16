// TODO: write your code here
import Validator from './basic';

const telephone = '8 (927) 000-00-00';
const getTelephon = new Validator(telephone);

console.log(getTelephon.clearTelephon());
