const directionsFromImaan = (destination) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("Viale Legioni Romane 23, Milano")}&destination=${encodeURIComponent(destination)}&travelmode=transit`;

window.IMAAN_EVENT_OVERRIDES = {
  "candle-flowers-les-amis": {
    note: "<b>Vibes:</b> A relaxed craft night where you leave with something genuinely cute, not just another tote bag.",
    actions: [
      ["Details", "https://www.meetup.com/les-amis-milan-women-community/events/315788044/", "details"],
      ["Apply", "https://lesamis.cc/apply", "book"],
      ["Location", "", "map", true, "The exact studio is shared after your application is accepted."]
    ]
  },
  "duemila30-festival": {
    note: "<b>Vibes:</b> Young filmmakers, thoughtful conversations and small creative venues — the kind of festival you stumble into and end up talking about all week.",
    actions: [
      ["Details", "https://www.duemila30.com/festival", "details"],
      ["Programme", "https://www.duemila30.com/event-list", "book"],
      ["Location", directionsFromImaan("Anteo Palazzo del Cinema, Piazza XXV Aprile 8, Milano"), "map"]
    ]
  },
  "street-culture-festival": {
    note: "<b>Vibes:</b> A proper neighbourhood evening: live piano, an aperitivo, a film outside and a historic villa most people in Milan never visit.",
    actions: [
      ["Details", "https://www.yesmilano.it/eventi/tutti-gli-eventi/street-culture-il-festival-2026", "details"],
      ["Reservations", "street-culture-reservations.html", "book"],
      ["Location", directionsFromImaan("Villa Scheibler, Via Felice Orsini 21, Milano"), "map"]
    ]
  },
  "internations-august-expat": {
    note: "<b>Vibes:</b> One of the easier rooms to walk into alone because the hosts actively ask regulars to welcome people who are new.",
    actions: [
      ["Details", "https://www.internations.org/event/promotion/details/1059618", "details"],
      ["Register", "https://www.internations.org/event/promotion/details/1059618", "book"],
      ["Location", "", "map", true, "The venue has not been announced yet."]
    ]
  },
  "wednesday-english-aperitivo": {
    note: "<b>Vibes:</b> Low-pressure, chatty and easy to try on your own — everyone is there because they actually want to meet new people.",
    actions: [
      ["Details", "https://www.meetup.com/it-it/milano-language-and-social-exchange/events/jgsdztyjclbhb/", "details"],
      ["RSVP", "https://www.meetup.com/it-it/milano-language-and-social-exchange/events/jgsdztyjclbhb/", "book"],
      ["Location", directionsFromImaan("Next Bar, Via Crema 7, Milano"), "map"]
    ]
  },
  "flamenco-trascendentale": {
    note: "<b>Vibes:</b> Piano, dance and contemporary flamenco in an open-air garden. It feels special without needing to become a huge, expensive night out.",
    actions: [
      ["Details", "https://www.eventbrite.it/cc/milano-la-citta-che-sale-2026-4857117", "details"],
      ["Reserve", "https://www.eventbrite.it/e/biglietti-flamenco-trascendentale-1994541128206", "book"],
      ["Location", directionsFromImaan("Giardino delle Culture, Via Emilio Morosini 8, Milano"), "map"]
    ]
  },
  "milano-in-ascolto": {
    note: "<b>Vibes:</b> Pick whichever session catches your eye — music mixed with photography, poetry, theatre and movement in spaces well outside the usual city-centre circuit.",
    actions: [
      ["Details", "https://www.yesmilano.it/eventi/tutti-gli-eventi/milano-ascolto", "details"],
      ["Programme", "https://www.yesmilano.it/eventi/tutti-gli-eventi/milano-ascolto", "book"],
      ["Location", directionsFromImaan("Biblioteca Chiesa Rossa, Milano"), "map"]
    ]
  },
  "golden-hour-les-amis": {
    note: "<b>Vibes:</b> Rooftop drinks, the Milan skyline and a small social group — polished enough to feel like a plan, relaxed enough to actually talk to people.",
    actions: [
      ["Details", "https://www.meetup.com/les-amis-milan-women-community/events/315788045/", "details"],
      ["Apply", "https://lesamis.cc/apply", "book"],
      ["Location", directionsFromImaan("VIU Terrace, Via Aristotile Fioravanti 6, Milano"), "map"]
    ]
  },
  "parcels-carroponte": {
    note: "<b>Vibes:</b> Warm summer air, immaculate grooves and a crowd that will definitely be dancing by the second song.",
    actions: [
      ["Details", "https://www.kozelcarroponte.net/parcels/", "details"],
      ["Tickets", "https://www.ticketone.it/event/parcels-kozel-carroponte-21123314/", "book"],
      ["Location", directionsFromImaan("Kozel Carroponte, Via Luigi Granelli 1, Sesto San Giovanni"), "map"]
    ]
  },
  "geese-unaltrofestival": {
    note: "<b>Vibes:</b> Scrappy, loud and slightly chaotic in the best way — a good pick when you want a gig that feels alive rather than overly polished.",
    actions: [
      ["Details", "https://www.circolomagnolia.it/evento/geese-live-19-agosto/", "details"],
      ["Tickets", "https://www.ticketone.it/event/geese-circolo-magnolia-21304271/", "book"],
      ["Location", directionsFromImaan("Circolo Magnolia, Via Circonvallazione Idroscalo 41, Segrate"), "map"]
    ]
  },
  "mud-dance-previews": {
    note: "<b>Vibes:</b> Movement in the park with zero pressure to be good at it. Close enough to feel spontaneous rather than like a whole-day mission.",
    actions: [
      ["Details", "https://www.yesmilano.it/eventi/tutti-gli-eventi/mud-milano-urban-dance-festival-4a-edizione", "details"],
      ["Free entry", "https://www.yesmilano.it/eventi/tutti-gli-eventi/mud-milano-urban-dance-festival-4a-edizione", "book"],
      ["Location", directionsFromImaan("Parco delle Cave, Via Cancano, Milano"), "map"]
    ]
  },
  "tyler-the-creator": {
    note: "<b>Vibes:</b> The full-scale spectacle pick: huge production, a big crowd and the sort of concert that turns into a proper memory.",
    actions: [
      ["Details", "https://fieramilanolive.com/tyler-the-creator/", "details"],
      ["Tickets", "https://www.ticketone.it/event/tyler-the-creator-fiera-milano-live-20708838/", "book"],
      ["Location", directionsFromImaan("Fiera Milano Live, Cargo 1 Viale delle Ferrovie, Rho"), "map"]
    ]
  },
  "djo-parco-musica": {
    note: "<b>Vibes:</b> Dreamy synth-pop outdoors with just enough nostalgia — probably the easiest feel-good concert night on the list.",
    actions: [
      ["Details", "https://www.parcomusicamilano.it/", "details"],
      ["Tickets", "https://www.ticketone.it/event/djo-parco-della-musica-di-milano-21520181/", "book"],
      ["Location", directionsFromImaan("Parco della Musica di Milano, Via Enzo Jannacci, Segrate"), "map"]
    ]
  },
  "clipse-magnolia": {
    note: "<b>Vibes:</b> Sharp bars, minimal beats and real hip-hop history on a relatively intimate outdoor stage.",
    actions: [
      ["Details", "https://www.vivoconcerti.com/mag/notizie/clipse-tornano-in-italia-per-uno-show-imperdibile-al-magnolia-summer", "details"],
      ["Tickets", "https://www.ticketone.it/event/clipse-pusha-t-and-malice-circolo-magnolia-21180491/", "book"],
      ["Location", directionsFromImaan("Circolo Magnolia, Via Circonvallazione Idroscalo 41, Segrate"), "map"]
    ]
  },
  "gin-tonic-festival": {
    note: "<b>Vibes:</b> More playful than a normal drinks festival: tastings, make-your-own gin, music, food trucks and plenty to wander between.",
    actions: [
      ["Details", "https://www.eventbrite.it/e/biglietti-gin-tonic-festival-2026-milano-1989290221603", "details"],
      ["Reserve", "https://www.eventbrite.it/e/biglietti-gin-tonic-festival-2026-milano-1989290221603", "book"],
      ["Location", directionsFromImaan("Le Scuderie Milano, Piazzale dello Sport 16, Milano"), "map"]
    ]
  }
};

(window.IMAAN_UPCOMING || []).forEach((event) => {
  const override = window.IMAAN_EVENT_OVERRIDES[event.i];
  if (!override) return;
  if (override.actions) event.a = override.actions;
  if (override.note) event.n = override.note;
});
