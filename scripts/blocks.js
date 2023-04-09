Events.on(ContentInitEvent, e => {
    Vars.content.block("hyperspace-methane-ice").attributes.set(Attribute.get("methane"), 0.25);
    
	Vars.content.block("hyperspace-ice-pump").attribute = Attribute.get("methane");
});