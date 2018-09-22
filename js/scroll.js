var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
	triggerElement: ".event.event2",
	triggerHook: "onEnter",
	duration: "100%"
}).setPin(".events-page .event.event1 .pinWrapper",{
	pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
	triggerElement: ".event.event2",
	triggerHook: "onEnter",
	duration: "200%"
}).setPin(".events-page .event.event2 .pinWrapper",{
	pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
	triggerElement: ".event.event3",
	triggerHook: "onEnter",
	duration: "200%"
}).setPin(".events-page .event.event3 .pinWrapper",{
	pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
	triggerElement: ".event.event4",
	triggerHook: "onEnter",
	duration: "100%"
}).setPin(".events-page .event.event4 .pinWrapper",{
	pushFollowers: false
}).addTo(controller);