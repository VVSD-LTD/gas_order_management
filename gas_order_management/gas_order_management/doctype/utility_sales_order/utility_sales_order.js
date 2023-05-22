// Copyright (c) 2022, VV Systems Developer Ltd and contributors
// For license information, please see license.txt

frappe.ui.form.on('Utility Sales Order', {
	customer: function(frm) {
		set_order_utility_detail(frm);
	},
    onload: function (frm) {
		frm.get_field("order_utility_detail").grid.cannot_add_rows = true;
    },
    reload_items: function (frm){
        set_order_utility_detail(frm);
    }
	// refresh: function(frm) {

	// }
});
function set_order_utility_detail(frm){
    frappe.db.get_doc("Customer",frm.doc.customer)
    .then(doc => {
        frm.clear_table("order_utility_detail");
        for(const d of doc.customer_utility_detail) {
            let row = frm.add_child("order_utility_detail", {
                utility_type: d.utility_type,
                utility_size: d.utility_size,
                qty: 1
            });
        }
        frm.refresh_field("order_utility_detail");
	});
}
