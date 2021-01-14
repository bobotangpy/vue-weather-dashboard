<!-- This is a 'dummy component' => to pass data from children to App.vue(root compo) -->
<!-- this way could keep code clean & enhance readability -->
<template>
  <div id="pageContent">
    <TempVarChart :tempVar="tempVar" />
    <Highlights :highlights="highlights" />
  </div>
</template>

<script>
import TempVarChart from "./TempVarChart";
import Highlights from "./Highlights";

export default {
  name: "Content",
  props: ["tempVar", "highlights"],
  components: {
    TempVarChart,
    Highlights,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>