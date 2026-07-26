window.IMAAN_ACTIONS = {
  "candle-flowers-les-amis": [
    ["Details", "https://www.meetup.com/les-amis-milan-women-community/events/315788044/", "details"],
    ["Apply", "https://lesamis.cc/apply", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Milan+Italy", "map"]
  ],
  "duemila30-festival": [
    ["Details", "https://www.duemila30.com/", "details"],
    ["Entry info", "https://www.yesmilano.it/eventi/tutti-gli-eventi/duemila30-festival", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Duemila30+Festival+Milano", "map"]
  ],
  "street-culture-festival": [
    ["Details", "https://www.yesmilano.it/eventi/tutti-gli-eventi/street-culture-il-festival-2026", "details"],
    ["Reserve", "mailto:prenotazionivillaperta@gmail.com?subject=Street%20Culture%20Villa%20Scheibler%20reservation", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Villa+Scheibler+Via+Felice+Orsini+21+Milano", "map"]
  ],
  "internations-august-expat": [
    ["Details", "https://www.internations.org/milan-expats", "details"],
    ["Register", "https://www.internations.org/event/promotion/details/1059618", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Milan+Italy", "map"]
  ],
  "wednesday-english-aperitivo": [
    ["Details", "https://www.meetup.com/milano-language-and-social-exchange/", "details"],
    ["RSVP", "https://www.meetup.com/it-it/milano-language-and-social-exchange/events/jgsdztyjclbhb/", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Next+Bar+Via+Crema+7+Milano", "map"]
  ],
  "flamenco-trascendentale": [
    ["Details", "https://milanolacittachesale.it/2026/", "details"],
    ["Reserve", "https://www.eventbrite.it/e/biglietti-flamenco-trascendentale-1994541128206", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Giardino+delle+Culture+Via+Emilio+Morosini+8+Milano", "map"]
  ],
  "milano-in-ascolto": [
    ["Details", "https://www.yesmilano.it/eventi/tutti-gli-eventi/milano-ascolto", "details"],
    ["Free entry", "https://www.yesmilano.it/eventi/tutti-gli-eventi/milano-ascolto", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Biblioteca+Chiesa+Rossa+Milano", "map"]
  ],
  "golden-hour-les-amis": [
    ["Details", "https://www.meetup.com/les-amis-milan-women-community/events/315788045/", "details"],
    ["Apply", "https://lesamis.cc/apply", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=VIU+Terrace+Milan", "map"]
  ],
  "parcels-carroponte": [
    ["Details", "https://www.kozelcarroponte.net/parcels/", "details"],
    ["Tickets", "https://www.ticketone.it/event/parcels-kozel-carroponte-21123314/", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Kozel+Carroponte+Sesto+San+Giovanni", "map"]
  ],
  "geese-unaltrofestival": [
    ["Details", "https://www.livenation.it/en/event/geese-segrate-tickets-edp1651421", "details"],
    ["Tickets", "https://www.ticketone.it/en/artist/geese/", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Circolo+Magnolia+Segrate", "map"]
  ],
  "mud-dance-previews": [
    ["Details", "https://www.yesmilano.it/eventi/tutti-gli-eventi/mud-milano-urban-dance-festival-4a-edizione", "details"],
    ["Free entry", "https://www.yesmilano.it/eventi/tutti-gli-eventi/mud-milano-urban-dance-festival-4a-edizione", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Parco+delle+Cave+Milano", "map"]
  ],
  "tyler-the-creator": [
    ["Details", "https://fieramilanolive.com/", "details"],
    ["Tickets", "https://www.ticketone.it/event/tyler-the-creator-fiera-milano-live-20708838/", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Fiera+Milano+Live+Rho", "map"]
  ],
  "djo-parco-musica": [
    ["Details", "https://www.parcomusicamilano.it/", "details"],
    ["Tickets", "https://www.ticketone.it/event/djo-parco-della-musica-di-milano-21520181/", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Parco+della+Musica+di+Milano+Segrate", "map"]
  ],
  "clipse-magnolia": [
    ["Details", "https://www.vivoconcerti.com/roster/clipse/clipse-tour-2026", "details"],
    ["Tickets", "https://www.ticketone.it/event/clipse-pusha-t-and-malice-circolo-magnolia-21180491/", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Circolo+Magnolia+Segrate", "map"]
  ],
  "gin-tonic-festival": [
    ["Details", "https://gintonicfestival.com/", "details"],
    ["Reserve", "https://www.eventbrite.it/e/biglietti-gin-tonic-festival-2026-milano-1989290221603", "book"],
    ["Map", "https://www.google.com/maps/search/?api=1&query=Le+Scuderie+Milano+Piazzale+dello+Sport+16", "map"]
  ]
};

(window.IMAAN_UPCOMING || []).forEach((event) => {
  if (window.IMAAN_ACTIONS[event.i]) event.a = window.IMAAN_ACTIONS[event.i];
});
