﻿$(function () {
    var table = $("#tableRows");
    var meterno = $("#txtSearch").val();
    $("#btnSearch").click(function () {
        var jqxhr = $.post('http://localhost:51337/api/Address/SearchByMeterNo/', { "": meterno })
            .success(function () {
                var output = table;
                output.empty();
                output.append("<tr><td><a href='javascript:ShowDetails(" + customer.MeterNo + ")' title='Show details'>" + customer.MeterNo + "</a></td><td>" + customer.CustomerName + "</td><td>" + customer.AccountNo + "</td><td>" + customer.Address + "</td><td>" + customer.MobilePhoneNo + "</td><td><a style='color:red;' href='javascript:DeleteRecord(" + customer.MeterNo + ")' title='Delete details'>Delete</a></td></tr>");
            })
        .error(function () {
            $("#tableRows").html("No record found.");
        });
        return false;
    });

        $("#btnAdd").click(function () {

            var Customer = {
                "MeterNo": $("#MeterNo").val(),
                "CustomerName":$("#CustomerName").val(),
                "AccountNo": $("#AccountNo").val(),
                "Address": $("#Address").val(),
                "MobilePhoneNo": $("#MobilePhoneNo").val()
              };

            $.ajax({
                type: "POST",
                url: 'http://localhost:51337//api/Address/AddNewCustomer',
                data: JSON.stringify(Customer),
                contentType: "application/json;charset=utf-8",
                success: function (data, status, xhr) {
                                 },
                error: function (xhr) {
                    alert(xhr.responseText);
                }
            });
        });

        //$("#btnSearch").click(function () {
        //    $.ajax({
        //        type:'GET',
        //        url: 'api/Address/SearchByMeterNo',
        //        datatype: 'json',
        //        success: function (data) {
        //            table.empty();
        //            table.append("<tr><td><a href='javascript:SearchByMeterNo(" + customer.MeterNo + ")' title='Show details'>" + customer.MeterNo + "</a></td><td>" + customer.CustomerName + "</td><td>" + customer.AccountNo + "</td><td>" + customer.Address + "</td><td>" + customer.MobilePhoneNo + "</td><td><a style='color:red;' href='javascript:DeleteRecord(" + customer.MeterNo + ")' title='Delete details'>Delete</a></td></tr>");
        //        }
        //    })


        //    //ShowDetails(meterno);
        //});

        function ShowDetails(id) {
            var myurl = 'http://localhost:51337/api/Address/GetCustomerDetails/' + id;
            $.ajax({
                url: myurl,
                type: 'POST',
                dataType: 'json',
                success: function (customer, status, xhr) {
                    var output = $("#tableRows");
                    output.empty();
                    output.append("<tr><td><a href='javascript:ShowDetails(" + customer.MeterNo + ")' title='Show details'>" + customer.MeterNo + "</a></td><td>" + customer.CustomerName + "</td><td>" +customer.AccountNo+ "</td><td>" + customer.Address + "</td><td>" + customer.MobilePhoneNo+ "</td><td><a style='color:red;' href='javascript:DeleteRecord(" + customer.MeterNo + ")' title='Delete details'>Delete</a></td></tr>");
                },
                error: function (xhr, status, error) { alert(error); }
            });
        }
});
