// before

order.filer(o => "high"  === o.priority || "rush" === o.priority);

// after

order.filter(o => o.priority.higherThan(new Priority("normal", o.priority)));