const yamapsInit = () => {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.968335, 30.317394],
      zoom: 18,
      controls: ['zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Drink2go',
        balloonContent: 'Drink2go Интернет-магазин кофейных напитков'
      }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/sprite.svg#map-mark',
        iconImageSize: [38, 50],
        iconImageOffset: [-19, -50]
      });

    myMap.geoObjects
      .add(myPlacemark);
  });
};

export { yamapsInit };
