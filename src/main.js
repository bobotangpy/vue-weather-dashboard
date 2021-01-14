import Vue from "vue";
import App from "./App.vue";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import VueFusionCharts from "vue-fusioncharts";
import "../src/css/style.css";
// import "vue-googlemaps/dist/vue-googlemaps.css";
// import VueGoogleMaps from "vue-googlemaps";

Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
FusionTheme(FusionCharts);

Vue.use(VueFusionCharts, FusionCharts);
// Vue.use(VueGoogleMaps, {
//   load: {
//     // Google API key
//     apiKey: "AIzaSyA_T3G0STeGi3URKfmMjTPYo8mVFkrdl6g",
//     // Enable more Google Maps libraries here
//     libraries: ["places"],
//     // Use new renderer
//     useBetaRenderer: false,
//   },
// });
Vue.prototype.$H = self.H;
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
});
// .$mount("#app");
