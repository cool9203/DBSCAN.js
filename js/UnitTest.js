unit_test = {
    /** 
     * description
     * @params {type} var1
     * @params {type} var2
     * @returns type
     */ 
    test_dbscan : 
    function test_dbscan(){
        console.log("---start test_dbscan---");
        
        const dbscan = new DBSCAN();
        console.assert(dbscan.euclidean([1, 2, 3], [1, 2, 3]) === 0);
        console.assert(dbscan.euclidean([3, 2, 1], [1, 2, 3]) === Math.sqrt(8));
        console.assert(dbscan.euclidean([7, 4, 9], [6, 2, 1]) === Math.sqrt(69));
        console.assert(dbscan.eps(10).min_point(10).distance("Euclidean").data([[1,2,3]]).fit().constructor.name === "Object");
        console.assert(dbscan.eps(10).min_point(10).distance("Euclidean").fit([[]]).constructor.name === "Object");
        console.log(dbscan.eps(10).min_point(10).distance("Euclidean").data([[1,2,3], [999, 999, 999]]).fit());
        console.log(dbscan.eps(10).min_point(0).distance("Euclidean").data({1:{x:1, y:2}, 2:{x:999, y:999}}).fit());
        console.log(dbscan.eps(10).min_point(0).distance("Euclidean").data({1:{x:1, y:2}, 2:{x:999, y:999}, 3:{x:1, y:2}}).fit());
        
        console.log("---end test_dbscan---");
    },

    test_all :
    function test_all(){
        unit_test.test_dbscan();
    }
}