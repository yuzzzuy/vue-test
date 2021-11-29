<template>
  <div id="app">
    <School/>
    <hr>
    <Student/>
  </div>
</template>

<script>
import School from "@/components/test1/School";
import Student from "@/components/test1/Student";

export default {
  name: 'App',
  components: {
    Student,
    School,
  }
}
</script>