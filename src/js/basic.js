export default class Validator {
  constructor(telephon) {
    this.telephon = telephon;
  }

  clearTelephon() {
    const delSplit = /([\(\)-\s])/g;
    const setPlus = /^([^\+]{1})/;

    return this.telephon.replace(delSplit, '').replace(setPlus, '+7');
  }
}
