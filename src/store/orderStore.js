import { makeAutoObservable } from 'mobx'

class OrderStore {
    constructor() {
        this._postType = []
        this._status = []
        this._user = []
        this._location = []
        this._nameZk = []
        this._orders = [{id:1,name:'dave'},{id:2,name:'nike'}]

        makeAutoObservable(this)
    }
    setOrders(item) {
        this._orders = item
    }
    setPostType(item) {
        this._postType = item
    }
    setStatus(item) {
        this._status = item
    }
    setLocation(item) {
        this._location = item
    }
    setNameZk(item) {
        this._nameZk = item
    }
    setUser(item) {
        this._user = item
    }
    get orders() {
        return this._orders
    }
    get postType() {
        return this._postType
    }
    get user() {
        return this._user
    }
    get status() {
        return this._status
    }
    get location() {
        return this._location
    }
    get nameZk() {
        return this._nameZk
    }
}
 
export default OrderStore;