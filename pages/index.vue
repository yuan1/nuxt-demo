<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ pdfNumPages }}</p>
    <iframe :src="'/pdfjs/web/viewer.html?file='+pdfUrl" width="100%" height="1000px" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      name: '111',
      pdfUrl:  'https://xunbiao-static.nengapp.com/2022-08-15/%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%8A%9B%E6%8A%95%E8%B5%84%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8/14040b03bd24476e94c8ec07fca993c8.pdf',
    }
  },
  mounted() {
    console.log(this.$config)
  },
  methods: {
  },
}
</script>
