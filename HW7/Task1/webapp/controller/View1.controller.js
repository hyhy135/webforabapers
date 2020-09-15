sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	'sap/ui/model/json/JSONModel',
	"../model/formatter"
], function (Controller,UIComponent,JSONModel,formatter) {
	"use strict";

	return Controller.extend("W4A.W4A.controller.View1", {
		formatter: formatter,
		
		onInit: function () {
			this.oCount = new JSONModel({
			});
			this.oComboThree = new JSONModel({
			});
			this.aComboThreeFilters = new JSONModel({
			});
			this.oExpand = new JSONModel({
			});
			this.oSearch = new JSONModel({
			});
			this.oSelect = new JSONModel({
			});
			this.getView().setModel(this.oComboThree, "three");
			this.getView().setModel(this.aComboThreeFilters, "threeFilters");
			this.getView().setModel(this.oExpand, "expand");
			this.getView().setModel(this.oSearch, "search");
			this.getView().setModel(this.oSelect, "select");
			this.getView().setModel(this.oCount, "count");
			this.loadCount();
			this.loadComboThree();
			this.loadComboThreeFilters();
			this.loadWithExpand();
			this.loadWithSearch();
			this.loadWithSelect();


		},
		loadCount: function () {
			$.ajax({
				type: "GET",
				url:"https://services.odata.org/V4/TripPinServiceRW/People/$count",
				dataType: "json",
				beforeSend: () => {
				},
				success: iCount => {
					this.getView().getModel("count").setData(iCount);
				},
				error: oError => {
					jQuery.sap.log.error(oError);
					sap.m.MessageBox.error(this.getResourceBundle().getText("errorGetData"));
				},
				complete: () => {
				}
			});
		},
		loadComboThree: function () {
			$.ajax({
				type: "GET",
				url:"https://services.odata.org/V4/TripPinServiceRW/People?$top=2&$skip=2&$orderby=UserName",
				dataType: "json",
				beforeSend: () => {
				},
				success: aComboThree => {
					console.log(aComboThree)
					this.getView().getModel("three").setData(aComboThree);
				},
				error: oError => {
					jQuery.sap.log.error(oError);
					sap.m.MessageBox.error(this.getResourceBundle().getText("errorGetData"));
				},
				complete: () => {
				}
			});
		},
		loadComboThreeFilters: function () {
			$.ajax({
				type: "GET",
				url:"https://services.odata.org/V4/TripPinServiceRW/People?$filter=UserName eq 'elainestewart' or LastName eq 'Ketchum' or FirstName eq 'Ronald'",
				dataType: "json",
				beforeSend: () => {
				},
				success: aComboThreeFilters => {
					console.log(aComboThreeFilters)
					this.getView().getModel("threeFilters").setData(aComboThreeFilters);
				},
				error: oError => {
					jQuery.sap.log.error(oError);
					sap.m.MessageBox.error(this.getResourceBundle().getText("errorGetData"));
				},
				complete: () => {
				}
			});
		},
		loadWithExpand: function () {
			$.ajax({
				type: "GET",
				url:"https://services.odata.org/V4/TripPinServiceRW/People?$expand=Photo",
				dataType: "json",
				beforeSend: () => {
				},
				success: aExpand => {
					console.log(aExpand)
					this.getView().getModel("expand").setData(aExpand);
				},
				error: oError => {
					jQuery.sap.log.error(oError);
					sap.m.MessageBox.error(this.getResourceBundle().getText("errorGetData"));
				},
				complete: () => {
				}
			});
		},
		loadWithSearch: function () {
			$.ajax({
				type: "GET",
				url:"https://services.odata.org/V4/TripPinServiceRW/People?$search=elainestewart",
				dataType: "json",
				beforeSend: () => {
				},
				success: aSearch => {
					console.log(aSearch)
					this.getView().getModel("search").setData(aSearch);
				},
				error: oError => {
					jQuery.sap.log.error(oError);
					sap.m.MessageBox.error(this.getResourceBundle().getText("errorGetData"));
				},
				complete: () => {
				}
			});
		},
		loadWithSelect: function () {
			$.ajax({
				type: "GET",
				url:"https://services.odata.org/V4/TripPinServiceRW/People?$select=LastName,FirstName",
				dataType: "json",
				beforeSend: () => {
				},
				success: aSelect => {
					console.log(aSelect)
					this.getView().getModel("select").setData(aSelect);
				},
				error: oError => {
					jQuery.sap.log.error(oError);
					sap.m.MessageBox.error(this.getResourceBundle().getText("errorGetData"));
				},
				complete: () => {
				}
			});
		},
	});
});