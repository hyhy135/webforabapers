sap.ui.define([

], function () {
    "use strict";

    return {
        arrayFormatter: function (aData) {
            return aData ? aData.toString() : "";
        },

        objectFormatter: function (aData) {
            let res="";
            for (let i in aData){
                res+= aData[i].City.Name + "," + aData[i].Address + ";"
            };
            return res;

        },

        homeAddressFormatter:function (oData){
            if (oData !== null){
                return oData.City !== null || oData.Address !== null ? oData.City + ", " + oData.Address : "";
            }
            else {
                return "";
            }

        }
    }

});
