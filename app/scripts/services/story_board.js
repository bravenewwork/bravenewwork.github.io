app
.value('StoryBoard', function() {
  return  [{
    id: 'start',
    title: "BRAVE<br>NEW<br>WORK"
  },{
    id: 'kaffee-kochen-quote',
    caption: "Kaffee kochen",
    // instructions: "Nach oben wischen",
    scrollDown: true,
    // underground: {
    //   url: '/kaffee-kochen',
      video: "PFVcfyqm9_Y",
      videoStill: "kaffee-kochen.jpg",
    // },
    theme: {

    },
    effects: {
      "out": "slideInRight",
      "in": ""
    }
  },
  {
    id: 'st-oberholz',
    caption: "St. Oberholz",
    audio: "/audio/01-stoberholz.mp3"
  },
  {
    id: 'ausland',
    caption: "Weg zum Haus aus einem anderen Land",
    // maps: "https://www.google.com/maps/embed?pb=!1m29!1m12!1m3!1d1213.5841912603892!2d13.40105350178898!3d52.530387583271406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m14!1i0!3e2!4m5!1s0x47a851e51ffe4c8f%3A0x81d84dd51899d817!2sBrunnenstra%C3%9Fe+11%2C+10119+Berlin%2C+Germany!3m2!1d52.5313641!2d13.400299799999999!4m5!1s0x47a851e4644a4b75%3A0xf49417256487121c!2sGastst%C3%A4tte+St.+Oberholz%2C+Rosenthaler+Stra%C3%9Fe+72a%2C+10119+Berlin%2C+Germany!3m2!1d52.529512!2d13.401764!5e0!3m2!1sen!2s!4v1402598598218",
    maps: {
      center: {
        latitude: 52.529781,
        longitude: 13.401393,
      },
      kml: "/data/01-ausland.kml",
      zoom: 17
    },
    audio: "/audio/02-jura.mp3",
    autoplay: true
  },
  {
    id: 'brunnenstrasse',
    caption: "Brunnenstrasse 10",
    instructions: "Content missing!",
    audio: "/audio/haus_aus_einem_anderen_Land.m4a"
  },
  {
    id: 'weg-zum-leihamt',
    caption: "Weg zum Königlichen Leihamt",
    // maps: "https://www.google.com/maps/embed?pb=!1m29!1m12!1m3!1d1213.5841912603892!2d13.40105350178898!3d52.530387583271406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m14!1i0!3e2!4m5!1s0x47a851e51ffe4c8f%3A0x81d84dd51899d817!2sBrunnenstra%C3%9Fe+11%2C+10119+Berlin%2C+Germany!3m2!1d52.5313641!2d13.400299799999999!4m5!1s0x47a851e4644a4b75%3A0xf49417256487121c!2sGastst%C3%A4tte+St.+Oberholz%2C+Rosenthaler+Stra%C3%9Fe+72a%2C+10119+Berlin%2C+Germany!3m2!1d52.529512!2d13.401764!5e0!3m2!1sen!2s!4v1402598598218",
    maps: {
      center: {
        latitude: 52.5299474,
        longitude: 13.3995975
      },
      kml: "/data/02-leihamt.kml",
      zoom: 16
    },
    audio: "/audio/3 BNW unterwegs sounds 1 120614.mp3",
    autoplay: true
  },
  {
    id: 'leihamt',
    caption: "Königliches Leihamt",
    instructions: "Content missing!"
  },
  {
    id: 'leerstehendes-haus',
    caption: "Leerstehendes Haus",
    instructions: "Content missing!"
  },
  {
    id: 'linienstrasse-206',
    caption: "Linienstrasse 206",
    instructions: "Content missing!"
  },
  {
    id: 'garnisonsfriedhof',
    caption: "Garnisonsfriedhof",
    instructions: "Content missing!"
  },
  {
    id: 'centraler-arbeitsnachweis',
    caption: "Centraler Arbeitsnachweis",
    instructions: "Content missing!"
  },
  {
    id: 'wunschgarten',
    caption: "Wunschgarten",
    instructions: "Content missing!"
  },
  {
    id: 'flitterzaun',
    caption: "Flitterzaun",
    instructions: "Content missing!"
  },
  {
    id: 'volksbuehne',
    caption: "Volksbühne AM Rosa-Luxemburg-Platz",
    instructions: "Content missing!"
  },
  {
    id: 'arbeiterdenkmal',
    caption: "Arbeiterdenkmal",
    instructions: "Content missing!"
  },
  {
    id: 'karl-liebknecht-haus',
    caption: "Karl-Liebknecht-Haus",
    instructions: "Content missing!"
  },
  {
    id: 'soho-House',
    caption: "Soho-House",
    instructions: "Content missing!"
  },
  {
    id: 'tips-please',
    caption: "Spenden",
    image: "/images/tip-jar.jpg"
  }]
})
