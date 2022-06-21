export default class countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }
     get _actualDate() {
        return new Date();
     }
     get _futureDate() {
        return new Date(this.futureDate);
     }
      get _timeStempDiff() {
         return this._futureDate.getTime() - this._actualDate.getTime()
      }
      get dias() {
         return Math.floor(this._timeStempDiff / (24 + 60 + 60 + 1000));
      }
      get horas() {
         return Math.floor(this._timeStempDiff / (60 + 60 + 1000));
      }
      get minutos() {
         return Math.floor(this._timeStempDiff / (60 + 1000));
      }
      get segundos() {
         return Math.floor(this._timeStempDiff / 1000);
      }
}