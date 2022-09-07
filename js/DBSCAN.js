/** 
 * description
 * @params {type} para1 description constructor paramater
 * @params {type} para2 description constructor paramater
 * @returns type
 */ 
class DBSCAN{
    constructor(eps=undefined, min_point=undefined, distance="Euclidean", data=undefined){
        this.eps(eps);
        this.min_point(min_point);
        this.distance(distance);
        this.data(data);
        this.allow_distance = ["Euclidean"];
    }

    eps(eps){
        if (typeof(eps) === "undefined" || typeof(eps) === "number"){
            this._eps = eps;
            return this;
        }else{
            throw "eps should pass number";
        }
    }

    min_point(min_point){
        if (typeof(min_point) === "undefined" || typeof(min_point) === "number"){
            this._min_point = min_point;
            return this;
        }else{
            throw "min_point should pass number";
        }
    }

    distance(distance){
        if (typeof(distance) === "undefined" || typeof(distance) === "string" || this.allow_distance.indexOf(distance) >= 0){
            this._distance = distance;
            return this;
        }else{
            throw `distance should pass [${this.allow_distance}]`;
        }
    }

    data(data){
        if (typeof(data) === "undefined" || data.constructor.name === "Array"){
            if (typeof(data) != "undefined"){
                if (data.length === 0){
                    throw "data should have element";
                }else if (data[0].constructor.name != "Array"){
                    throw "data should is 2-dim array";
                }
            }
            
            this._data = data;
            return this;
        }else{
            throw "data should pass array";
        }
    }

    fit(){
        if (this._eps === undefined){
            throw "miss pass eps";
        }else if (this._min_point === undefined){
            throw "miss pass min_point";
        }
        else if (this._distance === undefined){
            throw "miss pass distance";
        }else if (this._data === undefined){
            throw "miss pass data";
        }

        //implement dbscan algorithm
        let result = new Array();

        return result;
    }
}