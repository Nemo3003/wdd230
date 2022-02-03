window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector:".weatherWidget",
    apiKey:"EE2RK3VQUJKT99ESSP42XS2H4", 
    location:"Puerto tirol, Ar", 
    unitGroup:"metric", 
    forecastDays:2, 
    title:"Puerto Tirol,Ar", 
    showTitle:true, 
    showConditions:true
   });
  
(function() {
var d = document, s = d.createElement('script');
s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();